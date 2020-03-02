import cors from      'cors'
// import massive from 'massive'

export default function(server) {
  server.use(cors())

  /** @TODO set up massive here */

  server.get('/health', (_, response) => {
    response.send('🤙🏼')
  })

  server.listen(process.env.PORT, function() {
    console.log(`[READY]: ${this.address().port}`)
  })

  return Promise.resolve(server)
}