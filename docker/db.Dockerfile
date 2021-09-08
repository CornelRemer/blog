FROM postgis/postgis

RUN apt -y update && apt -y upgrade && \
    apt -y install gdal-bin \
    python3-gdal \
    python3-numpy