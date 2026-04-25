// const crypto = require('crypto');
// const hash = crypto.createHash('sha256').update("EngenhariaComp").digest("hex")
// const hash2 = crypto.createHash('sha384').update("EngenhariaComp").digest("hex")
// const hash3 = crypto.createHash('sha512').update("EngenhariaComp").digest("hex")

// console.log("SHA-256 hash: ", hash)
// console.log("SHA-384 hash: ", hash2)
// console.log("SHA-512 hash: ", hash3)

const crypto = require('crypto')
const hash = crypto.createHash('sha512')
hash.update('Hello World!')
const digest = hash.digest('hex')
console.log('HASH2: ' + digest)

