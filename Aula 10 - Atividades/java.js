let lista = []

function limpaFormulario(){
    document.getElementById('nome').value=("");
    document.getElementById('curso').value=("");
    document.getElementById('semestre').value=("");

}

function fazerCadastro(){
    lista.push({
        nome: document.getElementById('nome').value,
        curso: document.getElementById('curso').value,
        semestre: document.getElementById('semestre').value
    })
    limpaFormulario()
}

function verLista() {
    if (lista.length == 0){
        alert("Nenhum aluno cadastrado!")
    }
    else{
        for (let i = 0; i < lista.length; i++) {
        console.log(`Aluno ${i + 1}`)
        console.log(`Nome: ${lista[i].nome}`)
        console.log(`Curso: ${lista[i].curso}`)
        console.log(`Semestre: ${lista[i].semestre}`)
        }
    }
}

function limparLista() {
    if (lista.length == 0){
        alert("A lista já está vazia!")
    }
    else{
        lista = []
        alert("Lista esvaziada!")
    }
}