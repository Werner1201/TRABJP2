function estilos(res) {
  res.write(`<style>`);
  res.write(`
  body {
    background-color: #2F4F4F;
    font-family: verdana;
  }
  
  header {
    border-bottom: 1px solid #000;
    margin-bottom: 15px;
  }
  
  div#container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  div#wrapper {
    background-color: #E0FFFF;
    border: #000 1px solid;
    padding: 10px;
    text-align: center;
  }
  
  img {
    max-width: 100%;
    border: 4px double #FFD700;
    border-radius: 10px;
  }
  
  fieldset {
    font-size: 10pt;
    text-align: left;
    border: #FFD700 3px ridge;
    border-radius: 10px;
  }
  
  legend.TituloField {
    font-weight: bold;
  }
  
  h1, h3.Titulo {
    font-family: Arial;
  }
  
  span.TituloSpan {
    text-decoration: underline;
  }
  
  p.paragrafo {
    font-size: 11pt;
  }
  
  footer.Rodape {
    border-top: 1px solid #000;
    text-align: center;
    font-weight: bold;
    font-size: 10pt;
    padding: 5px;
  }
  `);
  res.write(`</style>`)
}


function mudaPrecos(res, objeto) {
  res.write(`<script>`);
  res.write(`
  let c = new Array(0, 0, 0, 0, 0);
  
  
  
  function mudaValor(carac, valor){
      const valorSpan = document.getElementById('meuSpan');
      console.log(valorSpan);
      c[carac] = valor; 
      valorSpan.innerHTML = ${objeto.preco} + c[0] + c[1] + c[2] + c[3] + c[4];
  }

  `);
  res.write(`</script>`)
}

function criaPage(objeto, res) {
  console.log(objeto);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  //Cabeca
  res.write(`	<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js'></script>
  <title>Capotei o Corsa!</title>
  `);
  //funcao pra escrever os estilos;
  estilos(res);
  //funcao dos scripts
  mudaPrecos(res, objeto);
  res.write(`</head>`);
  //Corpo
  res.write(`	
    <body>
	  <div id="container">
		  <div id="wrapper">
		  	<header>
		  		<h1 class="Titulo">${objeto.desc}</h1>
			  </header>
  `);

  res.write(`
  <section>
  <img src="https://i.imgur.com/NxFfiWo.png" alt="${objeto.desc}"/>

  <p class="paragrafo"><span class="TituloSpan">Valor inicial do ${objeto.desc}: R$ ${objeto.preco}</span></p>
  
  <h3 class="Titulo">Características Adicionais</h3>

  <form id="caracteristicas" method="post" action="">

    <fieldset id="Jogos">
      <legend class="TituloField">Quantidade de Jogos</legend>

      <input type="radio" id="jogo1" name="jogos" value="0" onclick="mudaValor(${0}, ${0});"/>
      <label for="jogo1">0 - (R$ 0,00)</label><br/>
      <input type="radio" id="jogo2" name="jogos" value="2" onclick="mudaValor(${0}, ${100});"/>
      <label for="jogo2">1 - Horizon Zero Dawn(R$ 100,00)</label><br/>
      <input type="radio" id="jogo3" name="jogos" value="3" onclick="mudaValor(${0}, ${350});"/>
      <label for="jogo3">2 - Horizon Zero Dawn + God of War(R$ 350,00)</label>
    </fieldset>

    <fieldset id="Cors">
      <legend class="TituloField">Cor</legend>

      <input type="radio" id="Cor0" name="Cors" value="0" onclick="mudaValor(1, 0);"/>
      <label for="Cor0">Preto - (R$ 0,00)</label><br/>
      <input type="radio" id="Cor1" name="Cors" value="1" onclick="mudaValor(1, 400);"/>
      <label for="Cor1">Branca (R$ 400,00)</label><br/>
      <input type="radio" id="Cor2" name="Cors" value="2" onclick="mudaValor(1, 200);"/>
      <label for="Cor2">Skin God Of War (R$ 200,00)</label><br/>
    </fieldset>

    <fieldset id="qtdPro">
      <legend class="TituloField">Quantidade de Controles Pro</legend>

      <input type="radio" id="qtdPro0" name="qtdPro" value="0" onclick="mudaValor(2, 0);"/>
      <label for="qtdPro0">0 (R$ 0,00)</label><br/>
      <input type="radio" id="qtdPro1" name="qtdPro" value="1" onclick="mudaValor(2, 450);"/>
      <label for="qtdPro1">1 (R$ 450,00)</label><br/>
      <input type="radio" id="qtdPro2" name="qtdPro" value="2" onclick="mudaValor(2, 800);"/>
      <label for="qtdPro2">2 (R$ 800,00)</label>
    </fieldset>

    <fieldset id="qtdJoy">
      <legend class="TituloField">Quantidade de Controles</legend>

      <input type="radio" id="qtdJoy0" name="qtdJoy" value="0" onclick="mudaValor(3, 0);"/>
      <label for="qtdJoy0">1 (R$ 0,00)</label><br/>
      <input type="radio" id="qtdJoy1" name="qtdJoy" value="1" onclick="mudaValor(3, 200);"/>
      <label for="qtdJoy1">2 (R$ 200,00)</label><br/>
      <input type="radio" id="qtdJoy2" name="qtdJoy" value="2" onclick="mudaValor(3, 400);"/>
      <label for="qtdJoy2">3 (R$ 400,00)</label>
    </fieldset>

    <fieldset id="kit">
      <legend class="TituloField">Kits de acessório</legend>

      <input type="radio" id="kit0" name="kit" value="0" onclick="mudaValor(4, 0);"/>
      <label for="kit0">0 - Headset (R$ 0,00)</label><br/>
      <input type="radio" id="kit1" name="kit" value="1" onclick="mudaValor(4, 300);"/>
      <label for="kit1">1 - Headset + Camera (R$ 300,00)</label><br/>
      <input type="radio" id="kit2" name="kit" value="2" onclick="mudaValor(4, 1500);"/>
      <label for="kit2">2 -Headset + Oculos VR (R$ 1500,00)</label>
    </fieldset>

    <br /><p><span class="TituloSpan">Preço Final: R$ <span id="meuSpan" class="TituloSpan"></span></span></p>
  </form>
  `);
  res.write(`
  <footer class="Rodape">
				<p>Feito por: Gustavo Gomes, Leonardo Boa Morte, Matheus Cruz, Werner Romling</p>
			</footer>
			</section>
		</div>
	</div>
  `);


  res.write(`
	</body>
  `);
  res.end();
}

module.exports = criaPage;