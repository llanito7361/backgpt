const { Router } = require("express");
const saludar = require("../controllers/examplesControllers");

const exampleRouter = Router()

exampleRouter.get('/',saludar)

module.exports = exampleRouter