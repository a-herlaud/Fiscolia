FROM docker.io/ollama/ollama:latest

WORKDIR /app

COPY ./config/ .
RUN apt-get update && apt-get install -y curl
RUN chmod +x dl_models.sh

ENTRYPOINT ["/app/dl_models.sh"]