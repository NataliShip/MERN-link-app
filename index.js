const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const server = express()

const PORT = config.get('port') || 5000

async function start() { // wrap for Promise mongoose.connect()
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    server.listen(PORT, () => console.log(`App has been started! on port ${PORT}`))
  } catch (e) {
    console.log(`Server Error ${e.message}`)
    process.exit(1) // exit Node.js
  }
}

start()
