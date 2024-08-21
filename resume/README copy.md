# Self CV

CV for self-presentation

## docker ops 

Build, install and run:

`docker-compose up --build -d`

Stop:

`docker-compose down`

Restart:

`docker-compose up -d --force-recreate`


> Do not forget to drop node_modules volume if something goes wrong on install new npm packages with `docker-compose down -v`