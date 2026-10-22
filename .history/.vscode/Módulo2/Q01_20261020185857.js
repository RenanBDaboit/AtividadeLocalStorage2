const tornoCNC = {
    id: 4,
    modelo: 'Hyundai 4000',
    horasTrabalhadas: 945
}

console.log(`Modelo do torno: ${tornoCNC.modelo}`);

tornoCNC.horasTrabalhadas = 12;

tornoCNC.precisaManutencao = function () {return tornoCNC.horasTrabalhadas > 10};
tornoCNC.precisaManutencao;

tornoCNC.exibirRelatorio = function () {console.log(`Torno ${tornoCNC.modelo} | Horas trabalhadas: ${tornoCNC.horasTrabalhadas} | Precisa de manutenção: ${tornoCNC.precisaManutencao}`});
tornoCNC.exibirRelatorio;