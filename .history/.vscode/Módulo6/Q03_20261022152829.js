function RoboGantry(posicaoX, posicaoY) {
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
}

RoboGantry.prototype.moverOrigem = function () {
    this.posicaoX = 0;
    this.posicaoY = 0;
}

const robo1 = new RoboGantry(2,6);
const robo2 = new RoboGantry(8,3);

console.log(robo1);
