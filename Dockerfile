FROM node:alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN  npm install 
COPY . .
EXPOSE 5000
CMD ["yarn", "run", "watch"]
# docker build . -t movie_App:1.0
# docker run -d -p 3000:3000 movie_app:1.0
# docker image rm movie_app:1.0
#docker stop 8a4f81ac8712 
#docker ps
#docker exec -it (containerId) /bin/sh connects your container to the terminal
#docker volume create e-commerce-app
#docker run -d -v (name of the volume):/app(folder inside the comtainer to bind it) (container name) this command will run and bind a container to a volume
#docker build after setting up the docker-compose.yml
#docker-compose up this will spin up the two services (the backend and database)
#do
#docker
#docker
#docker
#CI/CD action (gitlab,git actions,jenkins)