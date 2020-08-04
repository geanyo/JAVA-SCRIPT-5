// es6 module
// import express from 'express'
// Node.js module
const express = require('express') 

const server = express()
const port = 3000

// cream serverul si setam portul
const message = {message: 'Hello from my fisrt server'}

// configuram rutele
server.get('/hello', (request, response) => response.send(message))
// putem face cate rute vrem
server.get('/test', (request, response) => response.send({message: 'this is just another test'}))

// pornim serverul
server.listen(
port,
() => console.log(`Server started on http://localhost:${port}`)
)