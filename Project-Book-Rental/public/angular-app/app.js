angular.module("bookRental",["ngRoute"]).config(config);
function config($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"/angular-app/book-list/books.html",
        controller:"booksController",
        controllerAs:"booksCtrl"
    })
    .when("/book/:id",{
        templateUrl:"/angular-app/book-display/book.html",
        controller:"bookController",
        controllerAs:"bookCtrl"
    }) 
    .when("/book/delete/:id",{
        templateUrl:"/angular-app/book-delete/book-delete.html",
        controller:"bookDeleteController",
        controllerAs:"vm"
    })
}