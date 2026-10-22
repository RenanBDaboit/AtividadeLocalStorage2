const tempInput = document.getElementById('inputTemp');
const btnInput = document.getElementById('btnInput');
const tempMsg = document.getElementById('mensagemTemp');

btnInput.addEventListener('click', () => {
    if (tempInput.value > 80) {
        tempInput.classList.add()
        tempMsg.textContent = 'Alerta de Superaquecimento!';
    }
});