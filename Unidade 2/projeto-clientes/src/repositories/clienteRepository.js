const db = require('../config/db');
const criar = (cliente, callback) => {
    const sql = 'INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)';
    db.query(sql, [cliente.nome, cliente.email, cliente.telefone], callback);
};
const excluir = (id, callback) => {
    const sql = 'DELETE FROM clientes WHERE id = ?';
    db.query(sql, [id], callback);
};
module.exports = {
    criar,
    excluir
};