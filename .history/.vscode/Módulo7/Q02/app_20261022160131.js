const contador = document.getElementById('contador');
const btnProduzir = document.getElementById('btnProduzir');

btnProduzir.addEventListener('click', () => {
    const valor = Number(contador.te);

    valor++;

    contador.textContent = valor;
});