# THIS DOCKERFILE PREPARES A DEVELOPMENT ENVIRONMENT.
# YOU CAN ALSO FOLLOW THE INSTRUCTIONS BELOW TO MANUALLY SETUP A DEVELOPMENT ENVIRONMENT. 

# Base image is Alpine Linux with Node.js v21 installed.
FROM node:21-alpine

# We install the latest version of `npm` via Corepack.
RUN corepack enable npm

# We install Git via Alpine package keeper. 
RUN apk add git
