let imagemDoLocal;
let imagemAviao;
let imagemBarco1;

//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDaBala;
let somGameOver;

function preload() {
  imagemDoLocal = loadImage("imagens/marvertical.jpg");
  imagemAviao = loadImage("imagens/fighterjet.png");
  imagemBarco1 = loadImage("imagens/barco1-1.png");

  somDaTrilha = loadSound("sons/musicafundo.mp4");
  somDaColisao = loadSound("sons/collision.mp4");
  somDaBala = loadSound("sons/bullets.mp4");
  somGameOver = loadSound("sons/gameover1.mp3");
}
