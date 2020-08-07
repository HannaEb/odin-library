'use strict';

const libraryBooks = document.querySelector('#library-books');
const newBook = document.querySelector('#new-book');

let myLibrary = [{title: "Game of Thrones", author: "George R. R. Martin", pages: "894", isRead: "true"},
                 {title: "Assassin's Fate", author: "Robin Hobb", pages: "557", isRead: "true"},
                 {title: "The Dark Tower", author: "Stephen King", pages: "692", isRead: "true"}]

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

function showForm() {
  document.getElementById("newBookForm").style.display = "block";
};

function hideForm() {
  document.getElementById("newBookForm").style.display = "none";
};

// var book = new Book('Game of Thrones', 'George R. R. Martin', 651, true);
