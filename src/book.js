'use strict';

const libraryBooks = document.querySelector('#library-books');
const newBookForm = document.querySelector('#add-book-form');
const newBookButton = document.querySelector('#new-book-btn');
const checkBox = document.querySelector('#is-read')

let myLibrary = [];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
};

function render(myLibrary) {
  libraryBooks.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    libraryBooks.innerHTML +=
      `<tr index="${i}">
        <td>${myLibrary[i].title}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].isRead}</td>
      </tr>`;
  };
};

function addBookToLibrary(event) {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = parseInt(document.querySelector("#pages").value);
  let isRead = document.querySelector("#is-read").value;

  if (checkBox.checked == true) {
    isRead = 'Yes';
  }  else {
    isRead = 'No';
  };

  let book = new Book(title, author, pages, isRead)
  myLibrary.push(book);
  render(myLibrary)
  resetForm()
};

function showForm() {
  document.getElementById("new-book-form").style.display = "block";
};

function resetForm() {
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
  document.getElementById("is-read").checked = false;
  hideForm()
}

function hideForm() {
  document.getElementById("new-book-form").style.display = "none";
};

document.addEventListener('DOMContentLoaded', render(myLibrary));

newBookButton.addEventListener('click', showForm);

newBookForm.addEventListener('submit', addBookToLibrary);

newBookForm.addEventListener('reset', resetForm)
