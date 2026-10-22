const prompt = require('prompt-sync')();
const codigos = [27, 97, 27, 8, 43, 9, 78, 50, 9, 27];
const codigoFalha = 27;

function contagemFalhas(codigos, codigoFalha) {
    const contagem = 0;

    codigos.reduce(codigo => {
        if (codigo === codigoFalha) {
            contagem++;
        }
    });

    return contagem;
}

prompt(``)