docker-machine create --driver virtualbox --virtualbox-host-dns-resolver default
docker-machine start
FOR /f "tokens=*" %%i IN ('docker-machine env') DO %%i
docker-compose -f docker-compose.yml up