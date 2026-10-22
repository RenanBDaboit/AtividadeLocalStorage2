function RoboGantry(posicaoX, posicaoY) {
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
}

RoboGantry.prototype.moverOrigem = function () {
    this.posicaoX = 0;
    this.posicaoY = 0;
}

const robo1