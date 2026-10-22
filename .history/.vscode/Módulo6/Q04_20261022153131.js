const gerador = {
    id: 48,
    anoInstalacao: 2008
}

gerador.calcularAnosEmUso = function () {
    const anosEmUso = 2026 - this.anoInstalacao;
    return `O gerador ${this.id} está em operação há ${anosEmUso} anos.`
}

con