#########################################
############### VARIABLES ###############
#########################################

PROJECT_NAME=fiscolia
RAG_DATABASE_PATH=./srcs/backend-chatbot/config/ma_base_chroma
FLAG_FILE=.setup_done

#########################################
################# COLORS ################
#########################################

GREEN  = \033[0;32m
RED    = \033[0;31m
YELLOW = \033[0;33m
BLUE   = \033[0;34m
CYAN   = \033[0;36m
PURPLE = \033[0;35m
RESET  = \033[0m

#########################################
############### VARIABLES ###############
#########################################

all :
	@echo -e "$(PURPLE)========================================$(RESET)"
	@echo -e "$(PURPLE)========= LAUNCHING FISCOLIA... ========$(RESET)"
	@echo -e "$(PURPLE)========================================$(RESET)"
	
	@$(MAKE) env_check

	@mkdir -p ./logs_archives

	@if [ ! -f $(FLAG_FILE) ]; then \
		$(MAKE) init_project; \
	else \
		docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml up -d --build; \
	fi

	@$(MAKE) container_check -s

	@echo -e "$(PURPLE)========================================$(RESET)"
	@echo -e "$(PURPLE)========== FISCOLIA LAUNCHED ! =========$(RESET)"
	@echo -e "$(PURPLE)========================================$(RESET)"

	@echo -e "$(YELLOW) Project available at https://localhost $(RESET)"
# 	@echo -e "$(GREEN) Dashboard available at https://localhost/kibana/app/dashboards $(RESET)"

clean:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml --profile chatbot down

fclean:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml --profile chatbot down -v --rmi all
	rm $(FLAG_FILE)

re: clean all

#########################################
################# INIT ##################
#########################################

init_project:
	@echo -e "$(PURPLE)========================================$(RESET)"
	@echo -e "$(PURPLE)============ INITIALIZATION  ===========$(RESET)"
	@echo -e "$(PURPLE)========================================$(RESET)"
	
	@docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml up -d --build

	@$(MAKE) vector_db
	@$(MAKE) create_users
	@$(MAKE) create_profiles
	@touch $(FLAG_FILE)

create_users:
	@echo -e "$(PURPLE)========================================$(RESET)"
	@echo -e "$(PURPLE)============ USER CREATION  ============$(RESET)"
	@echo -e "$(PURPLE)========================================$(RESET)"
	docker compose --profile profile-create-user -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml build create-user
	docker compose --profile profile-create-user -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml run --rm create-user
	@docker image rm -f create-user-image || true

vector_db:
	@echo -e "$(PURPLE)========================================$(RESET)"
	@echo -e "$(PURPLE)============== VECTOR CREATION =========$(RESET)"
	@echo -e "$(PURPLE)========================================$(RESET)"
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml up -d --build ollama
	@sleep 3	
	docker exec -i $(PROJECT_NAME)-ollama ollama pull nomic-embed-text
	@echo -e "$(CYAN)--> Ollama : Téléchargement du modèle LLM 'llama3.2:1b'...$(RESET)"
	
	docker exec -i $(PROJECT_NAME)-ollama ollama pull llama3.2:1b
	
	docker build -t vector-db ./scripts/create_vector_db
	docker run --name vector-db-container --network fiscolia-network -v $(RAG_DATABASE_PATH):/app/ma_base_chroma:Z vector-db
	docker stop vector-db-container
	docker rm vector-db-container
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml down ollama

create_profiles:
	@echo -e "$(PURPLE)========================================$(RESET)"
	@echo -e "$(PURPLE)============ PROFILES CREATION =========$(RESET)"
	@echo -e "$(PURPLE)========================================$(RESET)"
	docker compose --profile profile-create-profile -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml build create-profile
	docker compose --profile profile-create-profile -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml run --rm create-profile
	@docker image rm -f create-profile-image || true

training: env_check
	@echo "$(CYAN)── Building training image ──$(RESET)"
	@mkdir -p $(PWD)/models
	@echo "$(CYAN)── Lancement de l'entraînement ──$(RESET)"
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml run --rm training
	@echo "$(CYAN)── Training container started in detached mode ──$(RESET)"
	@echo "$(CYAN)Access with: docker compose -p $(PROJECT_NAME) -f srcs/docker-compose.yml exec training bash$(RESET)"
	@docker image rm -f fiscolia-training || true

#########################################
################ DOCKER #################
#########################################

stop:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml stop

start:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml start

ps:
	docker ps -a -f "name=$(PROJECT_NAME)"

logs:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml logs -f


#########################################
################# ADR ###################
#########################################

adr:
	docker run -it --rm -v $(PWD):/app:Z -w /app \
		python:3.11-slim \
		sh -c "pip install -q questionary && python scripts/create_adr.py"

#########################################
############### CHECKER #################
#########################################

env_check:
	@python3 ./scripts/env_checker.py

container_check:
	@PROJECT_NAME=$(PROJECT_NAME) python3 ./scripts/container_checker.py

#########################################
################ CI/CD ##################
#########################################

github-actions:
	@$(MAKE)