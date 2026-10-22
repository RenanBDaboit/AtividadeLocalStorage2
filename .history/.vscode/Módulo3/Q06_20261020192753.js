const peca = {
    nome:  'Engrenagem Helicoidal',
    custoProducao: 45.00,
    etapas: ['Fundição', 'Usinagem', 'Tratamento Térmico']
}

console.log(`A peça ${peca.nome} tem custo de produção de ${peca.custoProducao}`);

peca.custoProducao = 48.50;

peca.revisada = true;

con