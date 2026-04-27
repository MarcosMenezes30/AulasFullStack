require('dotenv').config()

const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conexao.connect((erro) => {
  if (erro) {
    console.log('Erro ao conectar no MySQL:', erro);
    return;
  }

  console.log('Conectado ao MySQL!');
});

app.post('/cadastrar', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.send('Campo email obrigatório!');
  }

  const sql = 'INSERT INTO email (email) VALUE (?)'

  conexao.query(sql, [email], (erro) => {
    if (erro) {
      console.error('Erro ao cadastrar email: ', erro)
      return res.send('Erro ao cadastrar, Email existente')
    }

    res.send('Email cadastrado com sucesso!')
  })
});

app.get('/consultar', (req, res) => {
  const sql = 'SELECT * FROM email'

  conexao.query(sql, (erro, resultados) => {
    if (erro) {
      console.error('Erro ao consultar emails: ', erro)
      return res.send('Erro ao consultar emails')
    }

    res.json(resultados)
  })
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});
