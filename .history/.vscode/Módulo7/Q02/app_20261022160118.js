const contador = document.getElementById('contador');
const btnProduzir = document.getElementById('btnProduzir');

btnProduzir.addEventListener('click', () => {
    const valor = Number(contador.textContent);

    valor++;

    contador.textContent = valor;
})