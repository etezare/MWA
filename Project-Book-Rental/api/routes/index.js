var express= require("express");
var router= express.Router();
var controllerBook =require("../controllers/books.controllers.js");
// var controllerAddress=require("../controllers/address.controller.js");
router.route("/books").get(controllerBook.booksGetAll);
router.route("/books/:bookId").get(controllerBook.bookGetOne);
// router.route("/books/:bookId/addresses").get(controllerAddress.addressGetAll);
// router.route("/books/:bookId/addresses/:addressId").get(controllerAddress.addressGetOne);
module.exports=router;