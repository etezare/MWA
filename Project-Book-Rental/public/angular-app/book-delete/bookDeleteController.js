angular
  .module("bookRental")
  .controller("bookDeleteController", bookDeleteController);

function bookDeleteController($routeParams, bookDataFactory) {
  var vm = this;
  var id = $routeParams.id;

  bookDataFactory.deleteOneBook(id).then(function (response) {
    vm.deletedBook= response;
  });
}
