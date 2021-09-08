CONTAINER_PORT = $(or $(BLOG_CONTAINER_PORT),$(BLOG_CONTAINER_PORT),8000)
HOST_PORT = $(or $(BLOG_HOST_PORT),$(BLOG_HOST_PORT),8002)
CONTAINER_NAME = $(or $(BLOG_CONTAINER_NAME),$(BLOG_CONTAINER_NAME),blog_container)


help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


dev-up:		## build image and compose up application
	$(call build_env_variables) docker-compose -f ./docker/docker-compose.yml up -d --build


dev-down:	## compose down application
	$(call build_env_variables) docker-compose -f ./docker/docker-compose.yml down


init:		## initiate migrations and superuser
init: \
	collectstatic \
	migrations \
	dev-start \
	restart-nginx


dev-start:	## start backend
	docker exec -d blog_container .venv/bin/gunicorn --daemon --workers 3 --chdir ./blog --bind unix:/home/appuser/app/blog/blog.sock blog.wsgi
# docker exec -d blog_container .venv/bin/gunicorn --chdir ./blog --bind 0.0.0.0:8000 blog.wsgi
# docker exec -d blog_container .venv/bin/python blog/manage.py runserver 0.0.0.0:$(CONTAINER_PORT)


migrations:	## make and migrate migrations
	docker exec blog_container .venv/bin/python blog/manage.py makemigrations
	docker exec blog_container .venv/bin/python blog/manage.py migrate


collectstatic: ## collect all static files
	docker exec -u 0 blog_container .venv/bin/python blog/manage.py collectstatic --noinput


restart-nginx:
	docker exec -it nginx nginx -s reload


create-superuser: ## create superuser for logint
	docker exec -it blog_container .venv/bin/python blog/manage.py createsuperuser


build-blog: ## only build blog image
	docker build -t blog_image -f docker/dev.Dockerfile .


define build_env_variables
	CONTAINER_NAME=$(CONTAINER_NAME) \
	CONTAINER_PORT=$(CONTAINER_PORT) \
	HOST_PORT=$(HOST_PORT)
endef
