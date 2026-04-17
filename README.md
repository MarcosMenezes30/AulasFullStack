# Aulas Dev FullStack - Senai Cimatec

## Comando para rodar o live server pelo terminal dentro da pasta da aula
 - python -m http.server 5500
 - http://localhost:5500/

## Recomendações do professor: 
- https://getbootstrap.com/docs/5.3/getting-started/introduction/

# MySQL Básico

## 1. Entrar no banco

No terminal:
```bash
mysql -u root -h 127.0.0.1 -P 3306
```
Se der certo, aparece algo como:
```
mysql>
```

---

## 2. Ver os bancos que existem

Dentro do MySQL:
```sql
SHOW DATABASES;
```

---

## 3. Entrar em um banco

Exemplo, no banco `empresa`:
```sql
USE empresa;
```
Se der certo, aparece algo como:
```
Database changed
```

---

## 4. Ver as tabelas desse banco

```sql
SHOW TABLES;
```

---

## 5. Ver a estrutura de uma tabela

Exemplo com a tabela `clientes`:
```sql
DESCRIBE clientes;
```
ou
```sql
DESC clientes;
```

---

## 6. Ver tudo que tem na tabela

```sql
SELECT * FROM clientes;
```
Esse é o comando principal para ver os dados salvos.

---

## 7. Inserir um novo registro

```sql
INSERT INTO clientes (nome, email, telefone)
VALUES ('Marcos', 'marcos@email.com', '71999999999');
```

---

## 8. Buscar um registro específico

Por ID:
```sql
SELECT * FROM clientes WHERE id = 1;
```

Por nome:
```sql
SELECT * FROM clientes WHERE nome = 'Marcos';
```

---

## 9. Atualizar um registro

Exemplo: mudar o telefone do cliente de ID 1
```sql
UPDATE clientes
SET telefone = '71888888888'
WHERE id = 1;
```

---

## 10. Excluir um registro

```sql
DELETE FROM clientes WHERE id = 1;
```

---

## 11. Sair do banco

```bash
exit
```

---

## 12. Fluxo que você mais vai usar

Primeiro entrar no MySQL:
```bash
mysql -u root -h 127.0.0.1 -P 3306
```
Depois rodar:
```sql
SHOW DATABASES;
USE empresa;
SHOW TABLES;
SELECT * FROM clientes;
```

---

## 13. Comandos mais importantes para decorar

```sql
SHOW DATABASES;
USE empresa;
SHOW TABLES;
SELECT * FROM clientes;
INSERT INTO clientes (nome, email, telefone) VALUES ('Marcos', 'marcos@email.com', '71999999999');
UPDATE clientes SET telefone = '71888888888' WHERE id = 1;
DELETE FROM clientes WHERE id = 1;
exit
```

---

## 14. Ideia simples para lembrar

- `SHOW DATABASES;` mostra os bancos
- `USE empresa;` entra no banco
- `SHOW TABLES;` mostra as tabelas
- `SELECT * FROM clientes;` mostra os dados
- `INSERT` adiciona
- `UPDATE` altera
- `DELETE` apaga

---

## 15. Thunder Client básico

### Abrir o Thunder Client

No VS Code, instale a extensão Thunder Client.  
Depois clique no ícone dele na lateral e vá em **New Request**.

### Testar cadastro de cliente

- **Método:** `POST`
- **URL:**  
  ```
  http://localhost:4000/api/clientes
  ```
- **Body em JSON:**
  ```json
  {
    "nome": "Celso Barreto",
    "email": "sucelso@gmail.com",
    "telefone": "71999999999"
  }
  ```
- **Resposta esperada:**
  ```json
  {
    "mensagem": "Cliente cadastrado com sucesso",
    "idInserido": 1
  }
  ```

### Testar exclusão de cliente

- **Método:** `DELETE`
- **URL:**
  ```
  http://localhost:4000/api/clientes/1
  ```
- **Resposta esperada:**
  ```json
  {
    "mensagem": "Cliente excluído com sucesso"
  }
  ```

---

## 16. Ordem prática para usar no projeto

1. **Subir o banco**
   ```bash
   brew services start mysql
   ```

2. **Entrar no banco**
   ```bash
   mysql -u root -h 127.0.0.1 -P 3306
   ```

3. **Conferir os dados**
   ```sql
   USE empresa;
   SHOW TABLES;
   SELECT * FROM clientes;
   ```

4. **Subir o projeto Node**
   Na pasta do projeto:
   ```bash
   npm run dev
   ```
   Se estiver tudo certo, aparece algo como:
   ```
   Banco de dados conectado com sucesso!
   Servidor rodando na porta 4000
   ```

5. **Testar no Thunder Client**
   - **Cadastro:**
     ```
     POST http://localhost:4000/api/clientes
     ```
   - **Exclusão:**
     ```
     DELETE http://localhost:4000/api/clientes/1
     ```

---

## 17. Resumo final

Sempre pense assim:
1. Entrar no MySQL
2. Escolher o banco com `USE empresa;`
3. Ver as tabelas com `SHOW TABLES;`
4. Ver os dados com `SELECT * FROM clientes;`
5. Inserir, atualizar ou excluir se precisar
6. Subir o backend com `npm run dev`
7. Testar as rotas no Thunder Client
