function Injetora(id, capacidadeTonelada) {
    this.id = id;
    this.capacidadeTonelada = capacidadeTonelada;
}

Injetora.prototype.exibirCapacidade = function () {
    console.log(`Injetora ${this.id} possui capacidade de [capacidadeToneladas]T`);
    
}