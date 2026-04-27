const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();
const PORT = 4000;

p.use(bodyParser .urlencoded({extended: true}))
p.use(bodyParser.json());
p.use(express.static (path. join( dirname, 'public')));

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '', 
  database: 'DBEmail'
});

conexao.connect((erro) => {
  if (erro) {
    console.log('Erro ao conectar no MySQL:', erro);
    return;
  }

  console.log('Conectado ao MySQL!');
});

app.post('/cadastrar', (req, res) => {
    const {email} = req.body;
    if (!email){
        return res.send('Campo email obrigatório!');
    }
    const sql = "INSERT into email (email) value (?)"
    conexao.query(sql,[email],(erro)=>{
      if (erro){
        console.error('Erro ao cadastrar email: ', erro)
        return res.send ('Erro ao cadastrar, Email existente')
      }
    })
  });

app.get('/consultar')