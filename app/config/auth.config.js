// configure Auth Key
// JsonWebToken functions such as verify() sign() use
// algorithm that needs a secret ket (as String) to encode and decode token

 module.exports = {
     secret: 'project04-secret-key'
 }