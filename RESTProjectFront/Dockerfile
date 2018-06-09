# Create image based on the official Node 6 image from dockerhub
FROM mhart/alpine-node:latest

RUN npm i -g @angular/cli
RUN mkdir -p /srv/spa

#COPY CONTENT
COPY . /srv/spa

WORKDIR /srv/spa

# Install dependecies
RUN npm install

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["ng", "serve"]
