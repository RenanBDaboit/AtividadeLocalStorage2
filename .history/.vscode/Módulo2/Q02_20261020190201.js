const balanca = {
    pesoAtual: 857,
    cargaMax: 5000,
    pesar: function(massa) {
        balanca.pesoAtual = massa;
    },
    zerar: function() {
        balanca.pesoAtual = 0;
    },
    verificarSobrecarga =
}