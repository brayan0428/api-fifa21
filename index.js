require('dotenv').config()
const express = require('express')
const cors = require('cors')
const playersRouter = require('./controllers/players.controller')
const app = express()

require('./config/db')

app.use(cors())
app.use(express.json())
app.use('/api/v1',playersRouter)
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})