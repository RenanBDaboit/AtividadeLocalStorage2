const gerador = {
    id: 48,
    anoInstalacao: 2008
}

gerador.calcularAnosEmUso = function () {
    const anosEmUso = 2026 - this.anoInstalacao;
    return 'O gerador [id] está em operação há
[anos] anos.'
}