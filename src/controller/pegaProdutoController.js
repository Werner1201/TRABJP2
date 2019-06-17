

function ppController(produto, campos) {
  let realProd = produto[0];
  console.log(realProd.id);

  return { id: realProd.id, desc: realProd.descricao, preco: realProd.precoinicial };
}

module.exports = ppController;