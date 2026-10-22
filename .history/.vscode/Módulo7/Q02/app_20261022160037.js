const contador = document.getElementById('contador');
const btnProduzir = document.getElementById('btnProduzir');

btnProduzir.addEventListener('click', () => {
    const valor = Numbercontador.textContent;

    valor++;

    contador.textContent = valor;
})