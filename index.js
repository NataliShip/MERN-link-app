const express = require('express')
const config = require('config')

const server = express()

const PORT = config.get('port') || 5000

server.listen(PORT, () => console.log(`App has been started! on port ${PORT}`))