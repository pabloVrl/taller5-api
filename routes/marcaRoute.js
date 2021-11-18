const express = require('express')
const marcaController = require('../controllers/marcaController')

const api = express.Router()

api.get('/marcas', marcaController.listar)
api.post('/marcas', marcaController.guardar)
api.delete('/marcas/:id', marcaController.borrar)

module.exports = api