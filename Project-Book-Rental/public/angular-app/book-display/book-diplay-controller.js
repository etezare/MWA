angular.module("bookRental").controller("bookController",bookController);
function bookController($routeParams,bookDataFactory){
    var vm=this;
    var id=$routeParams.id;
    bookDataFactory.getOneBook(id).then(function(response){
        vm.book=response;
    })
}