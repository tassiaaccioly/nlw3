
//import dependencies
const express = require('express');
const path = require('path');

//starting library "express"
const server = express()

server

    //using static archives (CSS and some front-end Javascript)
    .use(express.static('public'))
    //create a path
    .get('/', (request, response) => {
      return response.sendFile(path.join(__dirname + '/views', 'index.html'))

    })

//turn the server on
server.listen(5500)