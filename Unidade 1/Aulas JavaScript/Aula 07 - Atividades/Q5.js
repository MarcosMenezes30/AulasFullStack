function calcularMedia(nota1, nota2, nota3){
    nota1 = parseFloat(prompt("Insira sua primeira nota: "))
    nota2 = parseFloat(prompt("Insira sua segunda nota: "))
    nota3 = parseFloat(prompt("Insira sua terceira nota: "))

    media = (nota1 + nota2 + nota3) / 3

    if (media >= 7){
        alert(`Sua média final foi ${media}. Parabés! Você foi aprovado!`)
    }
    else{
        alert(`Sua média final foi ${media}. Sinto muito. Você foi reprovado.`)
    }
}