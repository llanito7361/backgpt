const {Router} = require('express')
const exampleRouter = require('./exampleRouter')

const mainRouter = Router()

mainRouter.use('/example',exampleRouter)
 
module.exports = mainRouter