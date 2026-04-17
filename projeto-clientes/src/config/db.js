const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar no banco de dados:', error);
    return;
  }
  console.log('Banco de dados conectado com sucesso!');
});

module.exports = connection;