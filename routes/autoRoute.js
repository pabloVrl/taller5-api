const express = require('express')
const autoController = require('../controllers/autoController')

const api = express.Router()

api.get('/autos', autoController.listar)
api.post('/autos', autoController.guardar)

module.exports = api