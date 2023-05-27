let balas = [];
let enemies = [];
let score = 0;
let comprimentoOponente = 100;
let alturaOponente = 100;

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();

  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, 370),
      y: random(-1000, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(imagemDoLocal);
  mostraAtor();

  for (let bala of balas) {
    bala.y -= 10;
    fill(color(255, 0, 0));
    circle(bala.x, bala.y, 10);
  }

  for (let enemy of enemies) {
    enemy.y += 3.2;
    image(imagemBarco1, enemy.x, enemy.y, comprimentoOponente, alturaOponente);
    if (enemy.y > 400) {
      textAlign(CENTER);
      text("GAME OVER!!!", width / 2, height / 2);
      somGameOver.play();
      noLoop();
    }
  }

  for (let enemy of enemies) {
    for (let bala of balas) {
      if (dist(enemy.x, enemy.y, bala.x, bala.y) < 55) {
        enemies.splice(enemies.indexOf(enemy), 1);
        balas.splice(balas.indexOf(bala), 1);
        somDaColisao.play();
        let newEnemy = {
          x: random(0, 350),
          y: random(-1000, 0),
        };
        enemies.push(newEnemy);
        score += 1;
      }
    }
  }

  textSize(30);
  text(score, 30, 25);
}

function mousePressed() {
  let bala = {
    x: mouseX + 30,
    y: height - 80,
  };
  somDaBala.play();
  balas.push(bala);
}
