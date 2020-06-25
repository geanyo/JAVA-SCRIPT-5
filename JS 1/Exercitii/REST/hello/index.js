// import express from 'express'   ----- es6 modules    ------- asa ar fi arata in mod normal

const express = require('express') //node.js module

//cream serverul si setam portul
const server = express()
const port = 3000

//configuram rutele
server.get('/hello', (request, response) => response.send('hello world!'))

//pornim serverul
server.listen
    (port, 
        () => console.log(`Server started on http://localhost:${port}`)
    )

