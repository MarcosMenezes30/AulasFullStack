const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log(`Erro: ${error}`);
  } else {
    console.log("Pasta criada com sucesso!");
  }
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "teste", "arquivo_teste.txt"),
  "Hello World!",
  (error) => {
    if (error) {
      return console.log(`Erro: ${error}`);
    } else {
      console.log("Arquivo criado com sucesso!");
    }
  },
);

// Adicionar a um arquivo (caso seja utilizado o comando acima, o texto seria sobrescrito)
fs.appendFile(
  path.join(__dirname, "/teste", "arquivo_teste.txt"),
  "\nHello Node!",
  (error) => {
    if (error) {
      return console.log(`Erro: ${error}`);
    } else {
      console.log("Arquivo modificado com sucesso!");
    }
  },

  // Leitura de um arquivo 
  //    Está dentro do fs.appendFile porque o Node é assíncrono, ou seja ele não espera uma coisa terminar para começar outra. 
  //    Então dessa maneira nós garantimos que a leitura só vai ser feita depois das duas modificações serem feitas.
    fs.readFile(
    path.join(__dirname, "/teste", "arquivo_teste.txt"),
    "utf8",
    (error, data) => {
        if (error) {
        return console.log(`Erro: ${error}`);
        } else {
        console.log(data);
        }
    },
    )
);


