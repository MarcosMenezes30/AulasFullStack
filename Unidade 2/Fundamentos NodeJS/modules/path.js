const path = require("path");

// Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do Diretório atual
console.log(path.dirname(__filename));

// Capta a extensão do arquivo (.py, .js, etc) do arquivo
console.log(path.extname(__filename));

// Criar objeto com informações sobre o arquivo Path.js
console.log(path.parse(__filename));

// Juntar/Manipular caminhos de arquivos
console.log(path.join(__dirname, "extensao", "arquivo.txt"));
