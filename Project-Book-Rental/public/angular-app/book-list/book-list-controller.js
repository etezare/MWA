angular.module("bookRental").controller("booksController",booksController);
function booksController(bookDataFactory){
    var vm=this;
    vm.home="Book Rental Online Home Page";
    bookDataFactory.getAllBooks().then(function(response){
        vm.books=response;
    })
   

}