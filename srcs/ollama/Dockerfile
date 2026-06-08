FROM docker.io/ollama/ollama:latest

WORKDIR /app

COPY ./config/dl_models.sh .

RUN apt-get update \
	&& apt-get install -y --no-install-recommends curl \
	&& rm -rf /var/lib/apt/lists/* \
	&& chmod 755 /app/dl_models.sh

ENTRYPOINT ["/app/dl_models.sh"]