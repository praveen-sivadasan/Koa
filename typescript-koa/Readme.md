Sample project 
- with postgress db hosted in docker container
- running node-js project using nodemon
- typeorm for mapping models to db objects

Ref: https://inviqa.com/blog/how-build-basic-api-typescript-koa-and-typeorm

Docker
Step 1
Postgress image is being run in a docker container. Check docker-compose.yml for more info
Start docker by running the following command in the root folder
>> docker-compose up

Run project
Step 2
Run docker container before running app
>> npm start

Debug Project
Debugging can be done using different approaches
- debug using inspect option throuh nodemon script command
>> npm run debug
- using launch.json
created launch.json under vscode
ex: 
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node", 
            "request": "launch",
            "name": "nodemon",
            "runtimeExecutable": "nodemon",
            "program": "${workspaceFolder}/bin/www",
            "restart": true,
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
            "env": {
                "debug": "app:*",
            }
        }
    ]
}


Postman collection
Run colleaction requests to communicate with the app
http://127.0.0.1:3000/movies

Technical notes

Issue with post requests

- koa-bodyparser
Koa doesn't parse the request body by default, you need to add a middleware for body parsing, like koa-bodyparser. 
Koa's philosophy is to have as little as possible in the core framework, and let people compound their system by assembling specialized middlewares
Impl: https://github.com/koajs/bodyparser
- Body undefined
Note that when using Postman data content type is JSON and not anything else