// Função de intervalo de tempo para execução
window.onload = function () {
  setInterval(executar, 1000 / 60);
};

// define variável do id do canvas no html
var folhaDesenho = document.getElementById("folha");
var areaDesenho = folhaDesenho.getContext("2d");

var larguraCampo = 600;
var alturaCampo = 500;
var espessuraRede = 5;

var diametroBola = 10;

var alturaRaquete = 100;
var espessuraRaquete = 11;

var efeitoRaquete = 0.3;
var velocidedaJogador2 = 5;

//   definindo as raquetes dos jogadores
var posicaoJogador1 = (posicaoJogador2 = 10);
//   Posição inicial da bola
var posicaoBolaX = (posicaoBolaY = 10);
//   definindo a velocidade da bola
var velocidadeBolaPosicaoX = (velocidadeBolaPosicaoY = 1);
//   Pontuação dos jogadores
var pontuacaoJogador1 = (pontuacaoJogador2 = 0);
//   Define a posição da raquete com o mouse
folhaDesenho.addEventListener("mousemove", function (e) {
  posicaoJogador1 = e.clientY - alturaRaquete / 2;
});

function executar() {
  // define dimensão do campo
  areaDesenho.fillStyle = "#286047";
  areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

  // define linha do centro
  areaDesenho.fillStyle = "#fff";
  areaDesenho.fillRect(
    larguraCampo / 2 - espessuraRede / 2,
    0,
    espessuraRede,
    alturaCampo
  );

  // define a bola do ping pong
  areaDesenho.fillRect(
    posicaoBolaX - diametroBola / 2,
    posicaoBolaY - diametroBola / 2,
    diametroBola,
    diametroBola
  );

  // define a raquete player 1
  areaDesenho.fillRect(0, posicaoJogador1, espessuraRaquete, alturaRaquete);
  areaDesenho.fillRect(
    larguraCampo - espessuraRaquete,
    posicaoJogador2,
    espessuraRaquete,
    alturaRaquete,
  );

//   // define a raquete player 2
//   areaDesenho.fillRect(
//     larguraCampo - larguraLinha,
//     30,
//     larguraLinha,
//     alturaRaquete
//   );

  


  // Escrever a pontuação dos jogadores
  areaDesenho.fillText("Humano - " + pontuacaoJogador1 + " pontos.", 100, 100);
  areaDesenho.fillText("Computador - " + pontuacaoJogador2 + " pontos.", larguraCampo - 200,100);

  
  posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
  posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;

  // Verifica lateral superior da campo
  if (posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0) {
    velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
  }

  // Verifica a lateral inferior do campo
  if (posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0) {
    velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
  }

  // Verifica se o Jogador 2 fez um ponto
  if (posicaoBolaX < 0) {
    if (
      posicaoBolaY > posicaoJogador1 &&
      posicaoBolaY < posicaoJogador1 + alturaRaquete
    );
    // Rebater a bola
    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

    // Efeito da bola na rebatida
    var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
    velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
  } else {
    // Pontos jogador 2
    pontuacaoJogador2 = pontuacaoJogador2 + 1;

    // Colocar a bola no centro
  }

  // Verifica se o Jogador 1 fez um ponto
  if (posicaoBolaX > larguraCampo) {
    if (
      posicaoBolaY > posicaoJogador2 &&
      posicaoBolaY < posicaoJogador2 + alturaRaquete
    );
    // Rebater a bola
    velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

    var diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
    velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
  } else {
    // Pontos jogador 1
    pontuacaoJogador1 = pontuacaoJogador1 + 1;
  }
}
