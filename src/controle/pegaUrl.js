
function pegaUrl(url, req) {
  let dados = url.parse(req.url, true).query;
  return dados.id;
}

module.exports = pegaUrl;