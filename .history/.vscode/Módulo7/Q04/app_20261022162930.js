const tempInput = document.getElementById('inputTemp');
const btnInput = document.getElementById('btnInput');
const tempMsg = document.getElementById('mensagemTemp');

btnInput.addEventListener('click', () => {
    if (tempInput.value > 80) {
        tempInput.classList.remove('normal');
        tempMsg.classList.add('alerta');
        tempMsg.textContent = 'Alerta de Superaquecimento!';
    } else {
        tempInput.classList.remove('alerta');
        tempInput.classList.add('normal');
        tempMsg.textContent = 'Temperatura Normal';
    }
});