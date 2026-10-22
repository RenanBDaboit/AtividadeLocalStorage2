const contador = document.getElementById('contador');
const btnProduzir = document.getElementById('btnProduzir');

btnProduzir.addEventListener('click', () => {
    let valor = Number(contador.innerText);

    valor++;

    contador.textContent = valor;
});