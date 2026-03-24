// 6. Um sistema armazena informações de um usuário em formato de objeto e
// precisa exibir todas as suas propriedades e valores.
// Utilize a estrutura for...in para percorrer um objeto e exibir suas propriedades e
// valores.
let cont = 1

let user = [{
    nome: "João",
    idade: "26 anos",
    profissao: "Engenheiro"
    },
    {
    nome: "Marcos",
    idade: "20 anos",
    profissao: "Estudante"
    }
]

function leituraObjeto(){
    for (let i in user){
        console.log(`O usuário ${cont} se chama ${user[i].nome}, tem ${user[i].idade} e é ${user[i].profissao}`)
        cont++
    }
}
