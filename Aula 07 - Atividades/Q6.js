function calcularDesconto(preco,desconto){
    preco = parseFloat(prompt("Bem vindo(a) a sua calculadora de descontos! Por favor, insira o valor do produto desejado."))
    desconto = parseFloat(prompt("Agora, por favor, insira o valor do desconto para esse produto. (Ex: 20)"))

    valor_final = (preco * ( (100 - desconto) / 100) )

    alert(`O valor final do produto foi R$${valor_final.toFixed(2)}!`)
}