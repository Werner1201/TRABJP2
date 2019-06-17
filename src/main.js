const http = require('http');
const pegaProd = require('./model/produtos');

http.createServer((req, res) => {

  pegaProd(1, res);


}).listen(8080);

console.log("Servidor iniciado na porta 8080, para Fechar pressione Ctrl + C");