# Portfolio Website project

This repository host the portfolio website for Prosper Evergreen's projects. Check it out: https://prosperevergreen.github.io


### Setup development environment
To start the development environment:
1. Copy `docker-compose.dev.yml` to `docker-compose.override.yml`. The `docker-compose.override.yml` file can be further edited if needed.
2. Copy `.env.example` to `.env`.
3. Run `docker-compose up` to start the frontend in development mode. Docker will need to build the container if it's the first time you run it.
4. The frontend runs on http://localhost:3000 by default.


### Setup production environment
To start the production environment:
1. Run `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d` to start the frontend in production mode. Docker will need to build the container if it's the first time you run it.
2. The frontend runs on http://localhost:80 by default.