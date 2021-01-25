var express= require("express");
var router= express.Router();
var controllerBook =require("../controllers/books.controllers.js");
var controllerAuthor =require("../controllers/author.controllers.js");
var controllerUsers = require("../controllers/users.controller.js");

router.route("/books")
.get(controllerUsers.authenticate,controllerBook.booksGetAll)
.post(controllerUsers.authenticate,controllerBook.bookAddOne);


router.route("/books/:bookId")
.get(controllerUsers.authenticate,controllerBook.bookGetOne)
.delete(controllerUsers.authenticate,controllerBook.bookDelete)
.put(controllerUsers.authenticate,controllerBook.bookUpdate);

router.route("/books/:bookId/authors/:authorId")
.get(controllerUsers.authenticate,controllerAuthor.authorGetOne)
.put(controllerUsers.authenticate,controllerAuthor.authorUpdate)
.delete(controllerUsers.authenticate,controllerAuthor.authorDelete);

router.route("/books/:bookId/authors")
.get(controllerUsers.authenticate,controllerAuthor.authorGetAll)
.post(controllerUsers.authenticate,controllerAuthor.authorAdd);


router.route("/users/register").post(controllerUsers.register);

router.route("/users/login").post(controllerUsers.login);
module.exports=router;