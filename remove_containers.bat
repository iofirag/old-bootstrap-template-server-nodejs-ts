docker-machine ssh default docker stop $(docker ps -aqf "name=app")
docker-machine ssh default docker rm $(docker ps -aqf "name=app")
docker-machine ssh default docker image rm app

docker-machine ssh default docker stop $(docker ps -aqf "name=praypayserver_app")
docker-machine ssh default docker rm $(docker ps -aqf "name=praypayserver_app")
docker-machine ssh default docker image rm praypayserver_app

docker-machine ssh default docker stop $(docker ps -aqf "name=mongo")
docker-machine ssh default docker rm $(docker ps -aqf "name=mongo")
docker-machine ssh default docker image rm mongo

docker-machine ssh default docker stop $(docker ps -aqf "name=node")
docker-machine ssh default docker rm $(docker ps -aqf "name=node")
docker-machine ssh default docker image rm node

docker-compose down
docker rm -fv $(docker ps -aq)