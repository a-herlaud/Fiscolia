#!/bin/sh

set -e

chmod 700 /vault/data
chown vault:vault /vault/data

export VAULT_ADDR="${VAULT_ADDR}"
KEYS_FILE="/vault/data/init-keys.json"

vault server -config=/vault/config/vault.hcl &
VAULT_PID=$!

echo "==> Waiting for Vault to respond..."
until vault status 2>/dev/null | grep -q "Initialized"; do
  sleep 1
done

INITIALIZED=$(vault status 2>/dev/null | grep "^Initialized" | awk '{print $2}')

if [ "$INITIALIZED" = "false" ]; then
  echo "==> First start: initializing Vault..."
  vault operator init \
    -key-shares=1 \
    -key-threshold=1 \
    -format=json > "$KEYS_FILE"
  echo "==> Vault initialized."
fi

echo "==> Unsealing Vault..."
# awk read the hex value between ""
UNSEAL_KEY=$(awk -F'"' '/"unseal_keys_hex"/{getline; print $2}' "$KEYS_FILE")
ROOT_TOKEN=$(awk -F'"' '/"root_token"/{print $4}' "$KEYS_FILE")

echo "DEBUG unseal: $UNSEAL_KEY"
echo "DEBUG token: $ROOT_TOKEN"

vault operator unseal "$UNSEAL_KEY"

echo "$ROOT_TOKEN" > /vault/data/root-token
vault login "$ROOT_TOKEN" > /dev/null

SECRETS_EXIST=$(vault kv get secret/database > /dev/null 2>&1 && echo "yes" || echo "no")

# if [ "$SECRETS_EXIST" = "no" ]; then
#   echo "==> Enabling KV v2 and writing secrets..."
#   vault secrets enable -path=secret kv-v2

  if [ "$SECRETS_EXIST" = "no" ]; then
    echo "==> Checking Secrets Engine..."

    if ! vault secrets list | grep -q "^secret/"; then
      echo "==> Enabling KV v2..."
      vault secrets enable -path=secret kv-v2
    fi

    echo "==> Writing secrets..."
    vault kv put secret/general \
      project_name="${PROJECT_NAME}" \
      db_name="${DB_AUTH_NAME}"

    DB_AUTH_PWD_VALUE=$(cat /run/secrets/db_auth_pwd)
    DB_ROOT_PWD_VALUE=$(cat /run/secrets/db_root_pwd)

    vault kv put secret/database \
      db_user="${DB_AUTH_USER}" \
      db_password="${DB_AUTH_PWD_VALUE}" \
      db_root_password="${DB_ROOT_PWD_VALUE}"

    vault kv put secret/ports \
      db_port="${DB_AUTH_PORT}" \
      backend_port="${BACK_AUTH_PORT}" \
      front_port="${FRONT_PORT}"

    echo "==> Secrets written."
  fi

  # vault kv put secret/general \
  #   project_name=${PROJECT_NAME} \
  #   db_name=${DB_AUTH_NAME}

  # vault kv put secret/database \
  #   db_user=${DB_AUTH_USER} \
  #   db_password=@/run/secrets/db_auth_pwd \
  #   db_root_password=@/run/secrets/db_root_pwd

  # vault kv put secret/ports \
  #   db_port=${DB_AUTH_PORT} \
  #   backend_port=${BACK_AUTH_PORT}  \
  #   front_port=${FRONT_PORT}    \


#   echo "==> Secrets written."
# fi

echo "==> Vault is ready."
wait $VAULT_PID