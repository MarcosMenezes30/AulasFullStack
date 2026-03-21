function converterMedida(metros){
    metros = parseFloat(prompt("Por favor, insira o valor em metros para ser convertido para centímetros."))

    conversor = (metros * 1000)

    alert(`${metros} metro(s) equivale a ${conversor} centímetros!`)
}