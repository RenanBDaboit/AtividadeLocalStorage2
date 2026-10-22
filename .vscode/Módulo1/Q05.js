const insumos = ['Aço', 'Alumínio', 'Cobre'];

console.log(`Segundo insumo: ${insumos[1]}`);

insumos.push('Polímero');
insumos.shift();

console.log(`Quantidade total de insumos: ${insumos.length}`);

for (let i = 0; i < insumos.length; i++) {
    console.log(`Insumo ${i + 1}: ${insumos[i]}`);
}

insumos.forEach(insumo => console.log(`Insumo pronto para uso: ${insumo}`));

const numsCaracteres = insumos.map(insumo => insumo.length);
console.log(`Número de caracteres para cada insumo: ${numsCaracteres}`);

const insumosMaiorQue5 = insumos.filter(insumo => insumo.length > 5);
console.log(`Insumos com mais de 5 caracteres: ${insumosMaiorQue5}`);
