const contador = document.getElementById('contador');
const btnProduzir = document.getElementById('btnProduzir');

btnProduzir.addEventListener('click', () => {
    const valor = Number(contador.innerText);

    valor++;

    contador.textContent = valor;
});