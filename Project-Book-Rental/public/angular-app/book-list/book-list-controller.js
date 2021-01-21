angular.module("bookRental").controller("booksController",booksController);
function booksController(bookDataFactory){
    var vm=this;
    vm.home="Book Rental Online Home Page";
    vm.isSubmitted=false;
    bookDataFactory.getAllBooks().then(function(response){
        vm.books=response;
    })
   vm.addBook=function(){
       var postData={
        // author: vm.newBookAuthor,
        price: vm.newBookPrice,
        link: vm.newBookCountry,
        // imageLink: vm.newBookLink,
        country:vm.newBookCountry,
        language: vm.newBookLanguage,
        pages: vm.newBookPages,
        title: vm.newBookTitle,
        year: vm.newBookYear,
       }
       console.log(postData);
       if (vm.bookForm.$valid) {
        bookDataFactory.addOneBook(postData)
          .then(function (response) {
            console.log("Book saved");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        vm.isSubmitted = true;
      }
    }
    
    
    }
    