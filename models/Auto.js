const mongoose = require('mongoose')

const AutoSchema = mongoose.Schema({
  patente: String,
  anio: Number,
  idMarca: {
    type: mongoose.Schema.ObjectId, ref:"Marca"
  }
})

module.exports = mongoose.model('Auto', AutoSchema)