#!/bin/bash
git pull
docker-compose stop hsho-web
docker-compose up -d --build hsho-web