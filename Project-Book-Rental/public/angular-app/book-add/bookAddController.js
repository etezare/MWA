angular.module("bookRental").controller("bookAddController",bookAddController);
function bookAddController(bookDataFactory){
    var vm=this;
    vm.isSubmitted=false;
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