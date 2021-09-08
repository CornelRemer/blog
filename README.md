# Start Blog
1. make dev-up
2. make init
3. make create-superuser

# start docker
Build docker image:
$ docker build -f docker/dev.Dockerfile . --tag blog

Create new container:
$ docker create --name=new_container -it blog

Start new container:
$ docker start new_container

Exec into new container:
$ docker exec -it new_container bash

# docker-compose
Start (-d --detach):
$ docker-compose -f ./docker/docker-compose.yml up -d

End:
$ docker-compose -f ./docker/docker-compose.yml down

# postgres / postgis
start container (-d --detach):

    $ docker run --name postgres_db -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgis/postgis


exec into container:

    $ docker exec -it postgres_db bash


start psql:

    $ psql -h localhost -p 5432 -U postgres -d postgres

## Dump and restore
dump a specific database:

$ pg_dump dbname > backup_name.bak

dump all (as well as roles and tablespace definitions)

$ pg_dumpall > backup_name.bak

restore dump (user postgres db for an empty cluster)

$ psql -U username -f postgres


# Evironment variables
Set BASE_URL to change login targin.

BASE_URL=http://localhost:8001

BASE_RUL=http://127.0.0.1:8001

BASE_RUL=http://192.168.1.106:8001

BASE_RUL=http://68.183.78.125:80/


# Nginx
Run nginx and expose it to every device in the network:

$ docker run --rm --name web -p 1234:80 -d nginx

Expose container only to local holst

$ docker run --rm --name web -p 127.0.0.1:1234:80 -d nginx

# Add image to title-page
add image to _persistent/static/img/start/titelbild.JPG_

# ToDo:
* configure nginx reverse proxy (see: https://www.freecodecamp.org/news/docker-nginx-letsencrypt-easy-secure-reverse-proxy-40165ba3aee2/)
* add nginx as service
* add host volume for _static_ and _media_
* fix _permission denied_ when adding post
* add more env variables to docker / makefile / axios.js (ports)
* create test posts with external values (images, postgres db)
* create sample db dump
* write make rule to create / dump backup -> *.zip
* clean up .gitignore


# Notes

    $ docker run -it --name postgres_db -p 5432:5432 --env-file config/.env blog -v `.\persistent/postgres-data\`:`/var/lib/postgresql/data` -v `.\persistent\backups`:`/var/backups` postgis/postgis

