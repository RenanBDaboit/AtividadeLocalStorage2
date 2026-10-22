const tornoCNC = {
    id: 4,
    modelo: 'Hyundai 4000',
    horasTrabalhadas: 945
}

console.log(`Modelo do torno: ${tornoCNC.modelo}`);

tornoCNC.horasTrabalhadas = 12;

tornoCNC.precisaManutencao = () => tornoCNC.horasTrabalhadas > 10;

tornoCNC.exibirRelatorio = () => console.log(`Torno ${tornoCNC.modelo} | Horas trabalhadas: ${}`);
