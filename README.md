# Character Creator


## Description

_-- in progress --_

## How to run

### - By docker-compose
1. Install Docker Desktop
2. Pull repository
3. Go into repo folder
4. Run in terminal `docker-compose pull` to get the latest docker images
5. Run in terminal `docker-compose up -d` to start docker containers 🐋

Default variables are taken from `.env` file. It's not recommended editing it unless necessary.

To use different variables:
- create local `.env.development` file and fill it with required data
- run `docker-compose --env-file .env.development up -d`