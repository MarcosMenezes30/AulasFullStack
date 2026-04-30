const { Person } = require('./person');

// Essa linha faz com que todos os comandos do arquivo modules/path sejam executados
// require("./modules/path") 
// require("./modules/fs") 
require("./modules/http")

const person = new Person('Marcos');

console.log(person.sayMyName());