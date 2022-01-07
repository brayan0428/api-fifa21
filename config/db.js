const mongoose = require('mongoose')

const { MONGO_URI } = process.env

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la BD')
  }).catch(error => {
    console.log(error)
  })
