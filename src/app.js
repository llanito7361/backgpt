const express = require('express')
const mainRouter = require('./routes/index')
const server = express()

server.use('/', mainRouter)

module.exports = server;