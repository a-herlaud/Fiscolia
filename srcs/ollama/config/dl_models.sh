#!/usr/bin/env sh
set -eu

# Start Ollama server in background
ollama serve &
SERVER_PID=$!

# Wait for API readiness
until curl -sf http://127.0.0.1:11434/api/tags >/dev/null; do
    sleep 1
done

# Remove existing models if none are listed
model_count=$(ollama list 2>/dev/null | sed '/^\s*$/d' | wc -l)

if [ "$model_count" -le 1 ]; then
    echo "No models listed; clearing /root/.ollama/models/"
    rm -rf /root/.ollama/models/*
fi

pull_if_missing() {
    model="$1"

    if ! ollama list 2>/dev/null | grep -q -- "$model"; then
        echo "Pulling $model"
        attempt=1
        max_attempts=3
        while [ "$attempt" -le "$max_attempts" ]; do
            if ollama pull "$model"; then
                return 0
            fi

            echo "Pull failed for $model (attempt $attempt/$max_attempts)"
            attempt=$((attempt + 1))
            sleep 3
        done

        echo "Giving up on $model after $max_attempts attempts"
        return 1
    else
        echo "$model already present"
    fi
}


pull_if_missing "nomic-embed-text:latest" || true
pull_if_missing "llama3.2:1b" || true

# Keep Ollama running
wait "$SERVER_PID"