// 3. Um sistema financeiro precisa calcular a soma de valores sequenciais para
// simular um acumulador de pequenas transações.
// Utilize a estrutura while para calcular e exibir a soma dos números de 1 a 100.

function somaAteCem(){
    let i = 1
    let soma = 0
    while (i <= 100){
        soma += i
        i ++
    }
    alert(`O resultado da soma de todos os números de 1 a 100 é ${soma}`)
}