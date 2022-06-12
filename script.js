const form = document.querySelector('form');
const formBtn = document.querySelector('#formBtn');
const confirmBtn = document.querySelector('button[type="submit"]');

formBtn.addEventListener('click', () => {
    form.classList.toggle('show');
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary();