'use strict';

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function() {
    return(title + ' by ' + author)
  };
};

var book = new Book('Game of Thrones', 'George R. R. Martin', 651, true);
