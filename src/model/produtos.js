const conexao = require("../../conectaDB");
const ppController = require("../controller/pegaProdutoController");
const criaPage = require("../view/roetadorView");

function pegaProduto(idProd, res) {
  let operacao = `SELECT * FROM produtos WHERE id=${idProd}`;
  conexao.query(operacao, (err2, result, fields) => {
    if (err2) throw err2;
    return criaPage(ppController(result, fields), res);
  });
}

module.exports = pegaProduto;