function Injetora(id, capacidadeTonelada) {
    this.id = id;
    this.capacidadeTonelada = capacidadeTonelada;
}

Injetora.prototype.exibirCapacidade = function () {
    console.log(`Injetora ${this.id} possui capacidade de ${this.capacidadeTonelada}T`);
}

const injetora01 = new Injetora('INJ-01', 250);

injetora01.exibirCapacidade()