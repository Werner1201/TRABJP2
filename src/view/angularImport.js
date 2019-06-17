const fs = require('fs');
function angular(res) {
  fs.readFileSync(__dirname + "/angular.min.js", function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    console.log('Aqui');
    res.write(`<script>${data}</script>`);
  });
}


module.exports = angular;