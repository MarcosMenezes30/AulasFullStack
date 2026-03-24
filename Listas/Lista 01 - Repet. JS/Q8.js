// 8. Um sistema de análise numérica precisa filtrar apenas números ímpares dentro
// de um intervalo para aplicar uma regra específica.
// Desenvolva um algoritmo que exiba apenas os números ímpares de 1 a 50.

function numeroImpar() {
    for (i = 0; i <= 50; i++){
        if (i%2 != 0){
            console.log(i)
        }
    }
}