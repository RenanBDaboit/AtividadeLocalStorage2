const receitaOriginal = {
    temperatura: 200,
    tempoMinutos: 45
}

const receitaAjustada = {
    ...receitaOriginal
}

receitaAjustada.temperatura = 220;

console.log(receitaOriginal);
console.log(receitaAjustada);
