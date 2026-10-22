const prompt = require('prompt-sync')();
const totalLotes = 85;
const filaSequencial = [];

function sequenciamento(totalLotes, filaSequencial) {
    for (let i = 0; i < totalLotes; i++) {
        filaSequencial.push(i + 1);
    }

    return filaSequencial;
}

prompt('Fila ')