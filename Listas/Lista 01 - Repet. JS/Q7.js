// 7. Um sistema educacional precisa calcular a média das notas de um aluno
// armazenadas em um array.
// Crie um algoritmo que percorra o array e calcule a média dos valores.

let notas = [{
    nome: "Marcos",
    nota1: 10,
    nota2: 10,
    nota3: 10
},
{
    nome: "João",
    nota1: 0,
    nota2: 0,
    nota3: 0
},
{
    nome: "Rian",
    nota1: 8,
    nota2: 4,
    nota3: 7
}]

function calculaMedia(){
    for (let i in notas){
        console.log(`O aluno ${notas[i].nome} com as notas: AV1: ${notas[i].nota1} / AV2: ${notas[i].nota2} / AV3: ${notas[i].nota3} possui média igual a ${(notas[i].nota1 + notas[i].nota2 + notas[i].nota3)/3}`)
    }
}