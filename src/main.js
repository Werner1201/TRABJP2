const http = require('http');
const pegaProd = require('./controle/produtos');
const url = require('url');
const pegaUrl = require('./controle/pegaUrl');
const ppModelo = require("./modelo/pegaProdutoController");
const criaPageProd = require("./view/roetadorView");


http.createServer((req, res) => {
  let id = pegaUrl(url, req);
  pegaProd(id, res, (result) => {
    criaPageProd(ppModelo(result, 0), res);
  });
}).listen(8080);

console.log("Servidor iniciado na porta 8080, para Fechar pressione Ctrl + C");