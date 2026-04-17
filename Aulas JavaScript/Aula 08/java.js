for (let i = 0; i < 5; i++){
    document.write(i);
}

let z = 0;
while (z < 5){
    document.writeln(`<br> z é igual a ${z} `); 
    z++;
}

for (let i = 0; i < 11; i++){
    for (let x = 0; x < 11; x++){
        document.writeln(`<br> ${x} * ${i} = ${x * i} `);
    }
}

let pessoa = {
    nome: "Marcão",
    idade: 20,
    profissao: "Arquiteto de soluções AWS"
};

for (let chave in pessoa){
    document.writeln(`<br> ${chave}: ${pessoa[chave]}`);
}