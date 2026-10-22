const equipamento = {
    alimentacaoEletrica: '380V'
}

const compressor = Object.create(equipamento);
compressor.pressaoMaxBar = 10;

console.log(compressor);
