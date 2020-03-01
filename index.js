const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())

server.get('/health', (_, response) => {
  response.send('🤙🏼')
})

server.listen(process.env.PORT, function() {
  console.log(`active on ${this.address().port}`)
})