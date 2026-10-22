const prompt = require('prompt-sync')();
const insumos = ['Aço', 'Alumínio', 'Cobre'];

prompt(`Segundo insumo: ${insumos[1]}`);

insumos.push('Polímero');
insumos.shift();

