'use strict';

const libraryBooks = document.querySelector('#library-books');
const newBookForm = document.querySelector('#add-book-form');
const newBookButton = document.querySelector('#new-book-btn');

const checkBox = document.querySelector('#is-read');



let myLibrary = [];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render(myLibrary) {
  var tr, td;
  libraryBooks.innerHTML = '';
  for (var i = 0; i < myLibrary.length; i++) {
    tr = libraryBooks.insertRow();
    var index = tr.setAttribute("index", `${i}`);
    td = tr.insertCell();
    td.innerHTML = myLibrary[i].title;
    td = tr.insertCell();
    td.innerHTML = myLibrary[i].author;
    td = tr.insertCell();
    td.innerHTML = myLibrary[i].pages;
    td = tr.insertCell();
    td.innerHTML = myLibrary[i].isRead;
    td = tr.insertCell();
    td.innerHTML = `<button id="remove-book-btn">Remove</button>`;

    const removeBookButton = document.querySelector('#remove-book-btn');
    removeBookButton.addEventListener('click', removeBook);
    }
}

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
  }

  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  render(myLibrary);
  resetForm();
}

function showForm() {
  document.getElementById("new-book-form").style.display = "block";
}

function resetForm() {
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  document.getElementById("pages").value = '';
  document.getElementById("is-read").checked = false;
  hideForm();
}

function hideForm() {
  document.getElementById("new-book-form").style.display = "none";
}

function removeBook(event) {
  let index = event.target.parentElement.getAttribute("index");
  myLibrary.splice(index, 1);
  render(myLibrary);
}






newBookButton.addEventListener('click', showForm);

newBookForm.addEventListener('submit', addBookToLibrary);

newBookForm.addEventListener('reset', resetForm);
