const receitaOriginal = {
    temperatura: 200,
    tempoMinutos: 45
}

const receitaAjustada = Object.create(...receitaOriginal);

receitaAjustada.temperatura = 220;

console.log(receitaOriginal);
console.log(re);
