const ordensDeServico = [
    {
        idOS: 1,
        cliente: 'Renan',
        detalhes: {
            produto: 'Pedra',
            quantidade: 499
        }
    },
    {
        idOS: 2,
        cliente: 'Chorão',
        detalhes: {
            produto: 'Parafuso',
            quantidade: 4394
        }
    },
    {
        idOS: 3,
        cliente: 'Ozzy',
        detalhes: {
            produto: 'Trena',
            quantidade: 2
        }
    },
    {
        idOS: 4,
        cliente: 'Bruce',
        detalhes: {
            produto: 'Prego',
            quantidade: 3094
        }
    },
    {
        idOS: 5,
        cliente: 'Jorge',
        detalhes: {
            produto: 'Martelo',
            quantidade: 29
        }
    }
];

for (let i = 0; i < ordensDeServico.length; i++) {
    console.log(`idOS: ${ordensDeServico[i].idOS} | `);
}