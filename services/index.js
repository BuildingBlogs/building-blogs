// const decorate = require('./decorate')
import decorate from './decorate'

// module.exports = function(server) {
//   decorate(server)
// }

export default function(server) {
  decorate(server)
}