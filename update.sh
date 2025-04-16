#!/bin/bash
git pull
docker-compose stop fewpz-web
docker-compose up -d --build fewpz-web