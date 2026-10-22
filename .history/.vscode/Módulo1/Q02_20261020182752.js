const prompt = require('prompt-sync')();
const dimensoes = [86, 8, 72, 49, 7, 1, 501, 24, 8, 59, 28];
const dimensaoMax = 53;

function verificarDimensao(dimensoes, dimensaoMax) {
    
    const acimaTolerancia = dimensoes.filter(dimensao => dimensao > dimensaoMax);

    return acimaTolerancia;
}

prompt(`Peças acima da tolerância: ${verificarDimensao}`)