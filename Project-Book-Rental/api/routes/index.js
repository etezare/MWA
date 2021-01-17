var express= require("express");
var router= express.Router();
var controllerBook =require("../controllers/books.controllers.js");
var controllerAuthor =require("../controllers/author.controllers.js");

router.route("/books").get(controllerBook.booksGetAll)
.post(controllerBook.bookAddOne);


router.route("/books/:bookId")
.get(controllerBook.bookGetOne)
.delete(controllerBook.bookDelete)
.put(controllerBook.bookUpdate);

router.route("/books/:bookId/authors/:authorId")
.get(controllerAuthor.authorGetOne);

router.route("/books/:bookId/authors")
.get(controllerAuthor.authorGetAll);

module.exports=router;