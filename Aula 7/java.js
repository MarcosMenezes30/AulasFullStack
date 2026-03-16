function msg(){
    document.getElementById("eng").innerHTML = "chupe";
    alert("Mensagem de teste")
}

function calculator(){
    let a = parseFloat(prompt("Digite o primeiro número:"));
    let b = parseFloat(prompt("Digite o segundo número:"));
    let resultado = Number(a + b);
    return alert("O resultado da soma é: " + resultado);
}

function nome(nome){
    let nomes = prompt("digite seu nome");
    alert("Olá " + nomes + "!")
}