const Marca = require('../models/Marca')

const guardar = (req, res) => {
  try {
    const marca = req.body
    console.log(marca)
    const newMarca = new Marca({
      nombre: marca.nombre
    })

    newMarca.save((err, marca) => {
      if (err) return response.status(404).send({error: err})
      res.status(201).send({marca: marca})
    })

  } catch(err) {
    res.status(500).send({error: err})
  }
}

const listar = (req, res) => {
  Marca.find({}, (err, marcas) => {
    if (err) return response.status(500).send({error: err})
    res.status(200).send(marcas)
  })
}

const borrar = (req, res) => {

  const id = req.params.id

  Marca.findByIdAndDelete(id, (err, marca) => {
    if (err) return  res.status(500).send({error: err})
    res.status(200).send({deleted: marca})
  })
}

module.exports = {
  guardar,
  listar,
  borrar
}