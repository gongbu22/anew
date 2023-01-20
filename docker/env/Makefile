build:
	docker build -t ubuntu .
run:
	docker run -it --name ubuntu ubuntu 
history:
	docker history centos
ps:
	docker ps -a
img:
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi: 
	docker rmi $$(docker images -q)
