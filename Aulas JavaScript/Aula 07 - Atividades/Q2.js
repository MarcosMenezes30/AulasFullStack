function calcularAreaTriangulo(base, altura){
    base = parseFloat(prompt("Digite o valor da base: "))
    altura = parseFloat(prompt("Digite o valor da altura: "))

    let area = (base * altura) / 2
    
    document.getElementById('resultado').innerHTML = `O valor da área é ${area}`
}