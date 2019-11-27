REM docker-machine ssh default docker stop $(docker ps -aqf "name=app")
REM docker-machine ssh default docker rm $(docker ps -aqf "name=app")
REM docker-machine ssh default docker image rm app

REM docker-machine ssh default docker stop $(docker ps -aqf "name=praypayserver_app")
REM docker-machine ssh default docker rm $(docker ps -aqf "name=praypayserver_app")
REM docker-machine ssh default docker image rm praypayserver_app

REM docker-machine ssh default docker stop $(docker ps -aqf "name=mongo")
REM docker-machine ssh default docker rm $(docker ps -aqf "name=mongo")
REM docker-machine ssh default docker image rm mongo

REM docker-machine ssh default docker stop $(docker ps -aqf "name=node")
REM docker-machine ssh default docker rm $(docker ps -aqf "name=node")
REM docker-machine ssh default docker image rm node

REM docker-compose down
REM docker rm -fv $(docker ps -aq)

docker volume rm praypay-server_mongovolume
# docker volume rm mongovolume praypay-server_mongovolume

# docker volume rm $(docker volume ls)

# docker-compose down --rmi
docker-compose kill
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
# docker rmi $(docker images -q)

# docker container stop $(docker container ls -aq)
# docker container rm $(docker container ls -aq)
docker rmi $(docker images -a | grep "praypay-server" | awk '{print $3}')
# docker volume rm $(docker volume ls -q --filter dangling=true)
docker container prune
docker volume prune

# https://linuxize.com/post/how-to-remove-docker-images-containers-volumes-and-networks/