const form = document.querySelector('form');
const formBtn = document.querySelector('#formBtn');
const main = document.querySelector('main');
const cardsContainer = document.querySelector('.cards-container');
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
    if (titleField.checkValidity() && authorField.checkValidity() && pageField.checkValidity()) {
        addBookToLibrary();
        titleField.value = '';
        authorField.value = '';
        pageField.value = '';
        hasReadField.checked = false;
        form.classList.remove('show');
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
    libraryLoop();
}

function libraryLoop() {
    let indexNumber = 0;
    cardsContainer.textContent = '';
    myLibrary.forEach((book) => { 

        const card = document.createElement('div');
        const titleHeader = document.createElement('h2');
        const authorPara = document.createElement('p');
        const pagePara = document.createElement('p');
        const hasReadLabel = document.createElement('label');
        const hasReadInput = document.createElement('input')
        hasReadLabel.setAttribute('for', 'read')
        hasReadLabel.textContent = 'Read: ';
        hasReadInput.setAttribute('type', 'checkbox');
        hasReadInput.setAttribute('id', 'read');
        
        if (book.read === true) {
            hasReadInput.checked = true;
        }

        hasReadInput.addEventListener('input', e => {
            book.read = e.target.checked;
        });

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('type', 'button');
        removeBtn.setAttribute('data-index', indexNumber);
        indexNumber += 1;
        titleHeader.textContent = book.title;
        authorPara.textContent = 'Author: ' + book.author;
        pagePara.textContent = 'Number of pages: ' + book.pages;
        removeBtn.textContent = 'Remove';
        card.appendChild(titleHeader);
        card.appendChild(authorPara);
        card.appendChild(pagePara);
        card.appendChild(hasReadLabel);
        card.appendChild(hasReadInput);
        card.appendChild(removeBtn);
        cardsContainer.appendChild(card);

        requestAnimationFrame(() => {
        card.classList.add('appear');
    });
        removeBtn.addEventListener('click', e => {
            myLibrary.splice(e.target.dataset.index, 1);
            libraryLoop();
        })
    });
}