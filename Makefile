PROJECT_NAME=fiscolia
RAG_DATABASE_PATH=./srcs/backend-chatbot/config/ma_base_chroma

# Couleurs
GREEN  = \033[0;32m
RED    = \033[0;31m
YELLOW = \033[0;33m
BLUE   = \033[0;34m
CYAN   = \033[0;36m
PURPLE = \033[0;35m
RESET  = \033[0m

all :
	@$(MAKE) env_check
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml up -d --build
	@sleep 2
	@$(MAKE) container_check -s


clean:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml --profile chatbot down

fclean:
	docker compose -p $(PROJECT_NAME) --env-file .env -f srcs/docker-compose.yml --profile chatbot down -v --rmi all

re: clean all


# ADR

adr:
	docker run -it --rm -v $(PWD):/app:Z -w /app \
		python:3.11-slim \
		sh -c "pip install -q questionary && python scripts/create_adr.py"
# 	@python3 ./scripts/create_adr.py 

# TEST/CHECKER 

env_check:
	@python3 ./scripts/env_checker.py

create_users:
	@python3 scripts/create_user/create_user.py	

vector_db:
	docker compose -f srcs/docker-compose.yml up -d --build ollama
	docker build -t vector-db ./scripts/create_vector_db
	docker run --name vector-db-container --network fiscolia-network -v $(RAG_DATABASE_PATH):/app/ma_base_chroma vector-db
	docker stop vector-db-container
	docker rm vector-db-container
	docker compose -f srcs/docker-compose.yml down ollama

container_check:
	@PROJECT_NAME=$(PROJECT_NAME) python3 ./scripts/container_checker.py

github-actions:
	@$(MAKE)