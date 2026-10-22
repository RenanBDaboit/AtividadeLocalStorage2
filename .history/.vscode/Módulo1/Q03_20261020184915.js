const codigos = [27, 97, 27, 8, 43, 9, 78, 50, 9, 27];
const codigoFalha = 27;

function contagemFalhas(codigos, codigoFalha) {
    let contagem = 0;

    codigos.forEach(codigo => {
        if (codigo == codigoFalha) {
            contagem++;
        }
    });

    return contagem;
}

console.log(`Quantidade de falhas: ${contagemFalhas(codigos, codigoFalha)}`);