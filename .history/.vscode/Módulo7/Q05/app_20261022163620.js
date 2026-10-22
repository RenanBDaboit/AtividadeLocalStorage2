const btnConcluir = document.getElementById('btnConcluir');
const checklist = document.getElementById('checklist');

btnConcluir.addEventListener('click', () => {
    const item = document.querySelectorAll('item');
    item.classList.add('concluido');
});