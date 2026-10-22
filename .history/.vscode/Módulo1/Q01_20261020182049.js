const prompt = require('prompt-sync')();
const temperaturas = [34, 5, 6, 3, 287, 65, 92, 47];

function calcularTemperaturaMedia(array) {
    const soma = array.reduce((temperatura, total) => total += temperatura);

    return soma / array.length();
}

prompt(`Temperatura média dos fornos: ${calcularTemperaturaMedia(temperaturas)}°C`);