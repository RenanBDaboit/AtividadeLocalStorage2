const tempInput = document.getElementById('inputTemp');
const btnInput = document.getElementById('btnInput');
const tempMsg = document.getElementById('mensagemTemp');

btnInput.addEventListener('click', () => {
    if (tempInput.value > 80) {
        tempMsg.classList.remove('normal');
        tempMsg.classList.add('alerta');
        tempMsg.textContent = 'Alerta de Superaquecimento!';
    } else {
        tempMsg.classList.remove('alerta');
        tempMsg.classList.add('normal');
        tempMsg.textContent = 'Temperatura Normal';
    }
});