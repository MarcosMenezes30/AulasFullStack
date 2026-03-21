function calcularIdadeDias(anos){
    anos = parseInt(prompt("Quantos anos você tem?"))
    let dias = (anos * 365)
    let meses = (anos * 12)
    alert(`Você já viveu aproximadamente ${dias} dias e ${meses} meses! `)
}