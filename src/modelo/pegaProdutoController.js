function ppModelo(produto, campos) {
  let realProd = produto[0];

  return { id: realProd.id, desc: realProd.descricao, preco: realProd.precoinicial, link: realProd.linkimg };
}

module.exports = ppModelo;