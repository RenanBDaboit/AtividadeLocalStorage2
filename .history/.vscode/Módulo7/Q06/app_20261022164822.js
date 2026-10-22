const btnFiltro = document.getElementById('btnFiltro');
const filtroModulo = document.getElementById('filtroModulo');
const lista = document.getElementById('lista');

btnFiltro.addEventListener('click', () => {
    const itens = lista.querySelectorAll('.item');
    const filtro = filtroModulo.value;

    itens.forEach(item => {
        if(item.textContent != filtro) {
            item.classList.add('')
        }
    });
});