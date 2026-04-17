const clienteService = require('../services/clienteService');
const criarCliente = (req, res) => {
    const dados = req.body;
    clienteService.criarCliente(dados, (erro, resultado) => {
        if (erro) {
            return res.status(400).json({ erro: erro.message });
        }
        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso',
            idInserido: resultado.insertId
        });
    });
};
const excluirCliente = (req, res) => {
    const { id } = req.params;
    clienteService.excluirCliente(id, (erro, resultado) => {
        if (erro) {
            return res.status(400).json({ erro: erro.message });
        }
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado' });
        }
        res.status(200).json({ mensagem: 'Cliente excluído com sucesso' });
    });
};
module.exports = {
    criarCliente,
    excluirCliente
};