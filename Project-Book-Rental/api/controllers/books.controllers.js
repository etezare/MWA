var mongoose = require("mongoose");
var Book = mongoose.model("Book");
module.exports.booksGetAll = function (req, res) {
  var offset = 0;
  var count = 7;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (count > 7) {
    count = 7;
  }
  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: "QueryString Offset and Count shoulb be numbers" });
    return;
  }

  Book.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, books) {
      var response = {
        status: 200,
        message: books,
      };
      if (err) {
        response.status=500;
        response.message=err;
      } 
        res.status(response.status).json(response.message);
     
    });
};
module.exports.bookGetOne = function (req, res) {
  var bookId = req.params.bookId;
  Book.findById(bookId).exec(function (err, book) {
    var response = {
      status: 200,
      message: book,
    };
    if (err) {
      console.log("Error finding book");
      response.status = 500;
      response.message = err;
    } else if (!book) {
      response.status = 404;
      response.message = { message: "Book ID not foud" };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.bookAddOne = function (req, res) {
  console.log("Post Book");
  if (req.body) {
    Book.create(
      {
        author: req.body.author,
        price: req.body.price,
        country: req.body.country,
        imageLink: req.body.imageLink,
        language: req.body.language,
        pages: req.body.pages,
        title: req.body.title,
        year: req.body.year,
        link: req.body.link
      },
      function (err, book) {
        const response = {
          message: book,
          status: 201,
        };
        if (err) {
          response.status = 500;
          response.message = err;
        } else {
          console.log("Book Created ");
          res.status(response.status).json(response.message);
        }
      }
    );
  } else {
    res.status(400).json({ error: "Body missing data " });
  }
};

module.exports.bookDelete = function (req, res) {
  var bookId = req.params.bookId;
  Book.findByIdAndRemove(bookId).exec(function (err, book) {
    var response = {
      message: book,
      status: 200,
    };
    if (err) {
      (response.message = err), (response.status = 500);
    } else if (!book) {
      response.status = 404;
      response.message = { message: "Book ID not foud" };
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.bookUpdate = function (req, res) {
  var bookId = req.params.bookId;
  Book.findById(bookId).exec(function (err, book) {
    var response = {
      message: book,
      status: 204,
    };
    if (err) {
      response.message = err;
      response.status = 500;
    } else if (!book) {
      response.message = { message: "Book Not Found" };
      response.status = 404;
    }
    if(response.status!==204){
      res.status(response.status).json(response.message);
    } 
    else {
      book.title = req.body.title;
      book.author = req.body.author;
      book.price = parseFloat(req.body.price);
      book.imageLink = req.body.imageLink;
      book.link=req.body.link;
      book.country = req.body.country;
      book.pages = parseInt(req.body.pages);
      book.language = req.body.language;
      book.year = parseInt(req.body.year);
      book.save(function (err, book) {
        var response = {
          message: book,
          status: 204,
        };
        if (err) {
          response.message = err;
          response.status = 500;
        } 
        else{ 
            res.status(response.status).json(response.message);
        }
      });
    }

  });
};
