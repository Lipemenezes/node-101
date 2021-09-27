## Project

Simple node.js starting guide

## Pre-reqs

- Node 14 (+ npm 7)

## Setup server

1. Make sure the pre-reqs are installed
2. Run `npm init -y` to generate a package.json
3. Install express and body-parser: `npm i --save express body-parser`
4. Let's create a server.js on the project root and create a hello world based on the [official documentation](https://expressjs.com/en/starter/hello-world.html)
5. Make sure it works by running `node server.js` and going to `http://localhost:3000`

Done, now you have a working server.

## Hot reload for dev environment

1. Install nodemon with `npm i --save-dev nodemon`
2. Go to `package.json` and add a new key under `scripts`: `"dev": "nodemon server.js"`
3. Run the server with `npm run dev`
4. Notice that every time you change code on server.js the server automatically restarts with the most recent version of the code

## Setup tests

1. Install jest with `npm install --save-dev jest`
2. Follow the basic tutorial from the [official documentation](https://jestjs.io/docs/getting-started)
3. Run the tests with `npm run test`

# Setup db
1. Install mongoose `npm install --save mongoose`
2. Follow the [official documentation](https://mongoosejs.com/)

