var mongoose = require("mongoose");
var Book = mongoose.model("Book");
module.exports.booksGetAll = function (req, res) {
  var offset = 0;
  var count = 3;
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
      if (err) {
        console.log("Found books", books.length);
        res.status(500).json(err);
      } else {
        console.log("Found books", books.length);
        res.json(books);
      }
    });
};
module.exports.bookGetOne = function (req, res) {
  var bookId = req.params.bookId;

  console.log(bookId);
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
