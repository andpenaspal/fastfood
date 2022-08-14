#! /bin/bash

# Grab and export .env vars to this Shell Instance
export $(grep -v '^#' ./.env | xargs)

# Check if a container named 'mysql-db' is running
if [ ! "$(docker ps -q -f name=mysql-db)" ]
then
  echo "You need the Docker Container named 'mysql-db' with MySQL Running!"
  exit 1
fi

echo "Creating ${DB_NAME} DataBase"

docker exec mysql-db mysql -e "DROP SCHEMA IF EXISTS ${DB_NAME}" -uroot -p${DB_PASSWORD}

docker exec mysql-db mysql -e "CREATE DATABASE ${DB_NAME}" -uroot -p${DB_PASSWORD}
docker exec mysql-db mysql -e "CREATE USER IF NOT EXISTS '${DB_USERNAME}'@'%' IDENTIFIED BY '${DB_PASSWORD}'" -uroot -p${DB_PASSWORD}
docker exec mysql-db mysql -e "GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USERNAME}'@'%'  WITH GRANT OPTION; FLUSH PRIVILEGES;" -uroot -p${DB_PASSWORD}

echo "Done!!"