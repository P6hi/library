const form = document.querySelector('form');
const formBtn = document.querySelector('#formBtn');
const confirmBtn = document.querySelector('button[type="submit"]');
const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const pageField = document.querySelector('#pages');
const hasReadField = document.querySelector('#hasRead');

formBtn.addEventListener('click', () => {
    form.classList.toggle('show');
})

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleField.value !== '' && authorField.value !== '' && pageField.value !== '') {
        addBookToLibrary();
    }
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(titleField.value, authorField.value, pageField.value, hasReadField.checked);
    myLibrary.push(newBook);
};