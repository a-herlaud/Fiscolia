#!/usr/bin/env sh
set -eu

trap 'kill "$SERVER_PID" 2>/dev/null || true' INT TERM EXIT

# Start Ollama server in background
ollama serve &
SERVER_PID=$!

# Wait for API readiness
until curl -sf http://127.0.0.1:11434/api/tags >/dev/null; do
    sleep 1
done

ollama pull nomic-embed-text:latest || true
ollama pull llama3.2:1b || true

# Keep Ollama running
wait "$SERVER_PID"