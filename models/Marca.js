const mongoose = require('mongoose')

const MarcaSchema = mongoose.Schema({
  nombre: String
})

module.exports = mongoose.model('Marca', MarcaSchema)