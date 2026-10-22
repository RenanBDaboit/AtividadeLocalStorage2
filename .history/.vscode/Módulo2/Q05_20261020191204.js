const maquinaInjetora = {
    producaoPlanejada: 85,
    producaoRealizada: 59,
    calcularEficiência: function () {
        return this.producaoRealizada / this.producaoPlanejada * 100;
    }
}

console.log()