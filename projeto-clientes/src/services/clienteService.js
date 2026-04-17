const clienteRepository = require('../repositories/clienteRepository');
const criarCliente = (dados, callback) => {
    if (!dados.nome || !dados.email || !dados.telefone) {
        return callback(new Error('Nome, email e telefone são obrigatórios'));
    }
    clienteRepository.criar(dados, callback);
};
const excluirCliente = (id, callback) => {
    if (!id) {
        return callback(new Error('O ID é obrigatório'));
    }
    clienteRepository.excluir(id, callback);
};
module.exports = {
    criarCliente,
    excluirCliente
};