const form = document.querySelector('form');
const formBtn = document.querySelector('#formBtn');

formBtn.addEventListener('click', () => {
    form.classList.toggle('show');
})