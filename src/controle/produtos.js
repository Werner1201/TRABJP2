const conexao = require("../../conectaDB");


function pegaProduto(idProd, res, callback) {
  let operacao = `SELECT * FROM produtos WHERE id= ?`;

  conexao.getConnection(function (err, connection) {
    if (err) throw err; // not connected!
    conexao.query(operacao, idProd, (err2, result, fields) => {
      callback(result);
      connection.release();
      if (err2) throw err2;
    });
  });
}

module.exports = pegaProduto;