const cors = require('cors')
// const massive = require('massive')

module.exports = function(server) {
  server.use(cors())

  /** @TODO set up massive here */

  server.get('/health', (_, response) => {
    response.send('🤙🏼')
  })

  server.listen(process.env.PORT, function() {
    console.log(`active on ${this.address().port}`)
  })

  return Promise.resolve(server)
}
