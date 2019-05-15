FROM mariadb

ENV MYSQL_DATABASE=projetonode \
    MYSQL_ROOT_PASSWORD=root

ADD ./projetonode.sql /docker-entrypoint-initdb.d
EXPOSE 3306