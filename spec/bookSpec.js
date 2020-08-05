'use strict';

describe('Book', function() {

  var book;

  beforeEach(function() {
    book = new Book('Game of Thrones', 'George R. R. Martin', 672, true);
  });

  it('has a title', function() {
    expect(book.title).toEqual('Game of Thrones');
  });

  it('has an author', function() {
    expect(book.author).toEqual('George R. R. Martin');
  });

  it('has a certain number of pages', function() {
    expect(book.pages).toEqual(672);
  });

  it('knows if it has been read', function() {
    expect(book.isRead).toBe(true);
  });
});
