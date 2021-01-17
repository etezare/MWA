const { response } = require("express");
var mongoose = require("mongoose");
var Book = mongoose.model("Book");

module.exports.authorGetAll = function (req, res) {
  var bookId = req.params.bookId;
  console.log("GET All Authors");
  Book.findById(bookId)
    .select("author")
    .exec(function (err, book) {
      var response = {
        message: book,
        status: 200,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!book) {
        response.message = { message: "Book Not Found" };
        response.status = 404;
      } else {
        response.message = book.author ? book.author : [];
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.authorGetOne = function (req, res) {
  var bookId = req.params.bookId;
  var authorId = req.params.authorId;
  Book.findById(bookId)
    .select("author")
    .exec(function (err, book) {
      var author = book.author.id(authorId);
      var response = {
        message: book,
        status: 200,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!book) {
        response.message = { message: "Book Not Found" };
        response.status = 404;
      } else {
        response.message = author ? author : [];
      }
      res.status(response.status).json(response.message);
    });
};

var _addAuthor = function (req, res, book) {
  let newAuthor = {
    name: req.body.name,
    yearbBorn: req.body.yearbBorn,
    sex: req.body.sex,
    numberOfBooks: req.body.numberOfBooks,
  };
  book.author.push(newAuthor);
  book.save(function (err, book) {
    var response = {
      message: book,
      status: 200,
    };
    if (err) {
      response.message = err;
      response.status = 500;
    } else {
      response.message = book.author;
      response.status = 201;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.authorAdd = function (req, res) {
  console.log("POST author");
  var bookId = req.params.bookId;
  Book.findById(bookId)
    .select("author")
    .exec(function (err, book) {
      var response = {
        message: book,
        status: 201,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!book) {
        response.message = { message: "Book not found" };
        response.status = 404;
      }
      if (book) {
        if (!book.author) {
          book.author = [];
        }
        _addAuthor(req, res, book);
      } else {
        res.status(response.status).json(response.message);
      }
    });
};

var _updateAuthor = function (req, res, book) {
  if (!book.author.id(req.params.authorId)) {
    var response = {
      message: book,
      status: 204,
    };
    response.message = { message: "Author not found" };
    response.status = 404;
    res.status(response.status).json(response.message);
  }else{
  var author = book.author.id(req.params.authorId);
  author.name = req.body.name;
  author.sex = req.body.sex;
  author.yearBorn = parseInt(req.body.yearBorn);
  author.numberOfBooks = parseInt(req.body.numberOfBooks);
  book.save(function (err, updatedBook) {
    var response = { status: 204 };
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
  }
};

module.exports.authorUpdate = function (req, res) {
  console.log("UPDATE author");
  var bookId = req.params.bookId;
  Book.findById(bookId)
    .select("author")
    .exec(function (err, book) {
      var response = {
        message: book,
        status: 204,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!book) {
        response.message = { message: "Book Not found" };
        response.status = 404;
      }
      if (book) {
        if (!book.author) {
          book.author = [];
        }
        _updateAuthor(req, res, book);
      } else {
        res.status(response.status).json(response.message);
      }
    });
};

var _deleteAuthor = function (req, res, book) {
  if (!book.author.id(req.params.authorId)) {
    var response = {
      message: book,
      status: 204,
    };
    response.message = { message: "Author not found" };
    response.status = 404;
    res.status(response.status).json(response.message);
  }else{
  var authorId = req.params.authorId;
  book.author.id(authorId).remove();
  book.save(function (err, book) {
    var response = {
      message: book,
      status: 204,
    };
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
}
};

module.exports.authorDelete = function (req, res) {
  console.log("DELETE author");
  var bookId = req.params.bookId;
  Book.findById(bookId)
    .select("author")
    .exec(function (err, book) {
      var response = {
        message: book,
        status: 204,
      };
      if (err) {
        response.message = err;
        response.status = 500;
      } else if (!book) {
        response.message = { message: "Book Not found" };
        response.status = 404;
      }
      if (book) {
      
          _deleteAuthor(req, res, book);
      }else{
      res.status(response.status).json(response.message);
      }
    });
};
