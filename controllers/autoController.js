const Auto = require('../models/Auto')

const guardar = (req, res) => {
  try {
    const auto = req.body
    console.log(auto)
    const newAuto = new Auto({
      patente: auto.patente,
      anio: auto.anio,
      idMarca: auto.idMarca
    })

    newAuto.save((err, auto) => {
      if (err) return response.status(404).send({error: err})
      res.status(201).send({auto})
    })

  } catch(err) {
    res.status(500).send({error: err})
  }
}

const listar = (req, res) => {
  Auto.find().populate('idMarca').exec((err, auto) => {
    res.status(200).send(auto)
  })
}

module.exports = {
  guardar,
  listar
}