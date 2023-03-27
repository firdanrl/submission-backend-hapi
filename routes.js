const { addBook, getBookById, updateBook, deleteBook } = require("./handler");

const getbook = require("./getbook");

const routes = [
  { //method post kriteria 3
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  { // method get krit 4
    method: "GET",
    path: "/books",
    handler: getbook,
  },
  {// method get krit 5
    method: "GET",
    path: "/books/{id}",
    handler: getBookById,
  },
  { // method put krit 6
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBook,
  },
  {// method del krit 7
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBook,
  },
];

module.exports = routes;