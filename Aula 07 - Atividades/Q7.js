function tabuada(numero){
    numero = parseInt(prompt("Por favor, insira o número que deseja saber a tabuada de 1 a 10."))

    for (i = 1; i < 11; i ++){
        alert(`${numero} * ${i} = ${numero*i}`)
    }
}