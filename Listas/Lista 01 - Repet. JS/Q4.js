// 4. Um sistema precisa identificar apenas valores pares dentro de um intervalo
// numérico para aplicar regras específicas.
// Utilize a estrutura while para exibir todos os números pares de 0 a 20.

function numerosPares(){
    console.log("Os números pares no intervalo de 1 a 100 são:")
    let i = 0;
    while (i <= 20){
        if (i%2 == 0){
            console.log(i)  
        }
        i++;
    }
}