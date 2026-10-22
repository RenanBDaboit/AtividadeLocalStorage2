const sensor = {
    idSensor: 23,
    leituraAtual: 54,
    status: 'Normal',
    atualizarLeitura: function (leitura) {
        this.leituraAtual = leitura;
        if (this.leituraAtual > 75) {
            this.status = 'Alerta';
        } else {
            this.status = 'Normal';
        }
    }
}

console.log(sensor);

sensor.atualizarLeitura(88)