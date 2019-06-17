const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "loja"
});


module.exports = conexao;