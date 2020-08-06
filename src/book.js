'use strict';

const libraryBooks = document.querySelector('#library-books');

let myLibrary = []

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function() {
    return(title + ' by ' + author)
  };
};

function addBookToLibrary() {
  var title = prompt("Title:");
  var author = prompt("Author:");
  var pages = prompt("Number of pages:");
  var isRead = prompt("Have you read this book? Enter true or false:");
  let book = new Book(title, author, pages, isRead)
  return myLibrary.push(book);
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
  }
}

// var book = new Book('Game of Thrones', 'George R. R. Martin', 651, true);
