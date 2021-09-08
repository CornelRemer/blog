FROM python:3.9-slim-buster

RUN apt -y update && \
    apt -y upgrade && \
    apt install -y curl \
    binutils \
    libproj-dev \
    gdal-bin

RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash - && \
    apt install -y nodejs

# Create new user
RUN useradd -ms /bin/bash appuser

# Copy files
RUN mkdir /home/appuser/app
COPY . /home/appuser/app

WORKDIR /home/appuser/app
RUN mkdir /home/appuser/app/blog/media && \
    chmod -R ugo+rw /home/appuser/app/blog/media

# Install poetry
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -

# Install dependencies
RUN ${HOME}/.poetry/bin/poetry install

RUN npm install && \
    npm run build

# Switch to appuser
USER appuser
