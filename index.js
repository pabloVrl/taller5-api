require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.options('*', cors())

// Rutas
const marcaRoute = require('./routes/marcaRoute')
const autoRoute = require('./routes/autoRoute')

app.use('/api', marcaRoute)
app.use('/api', autoRoute)

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: true, //this is the code I added that solved it all
  keepAlive: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
  useFindAndModify: false,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_URI, options)
.then(() => console.log('Conectado a la base de datos :)'))
.catch(err => console.log(err))

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT)
})