const prompt = require('prompt-sync')();
const insumos = ['Aço', 'Alumínio', 'Cobre'];

prompt(`Segundo insumo: ${insumos[1]}`);

insumos.push('Polímero');
insumos.shift();

prompt(`Quantidade total de insumos: ${insumos.length}`);

for (let i = 0; i < insumos.length; i++) {
    const element = array[i];
    
}