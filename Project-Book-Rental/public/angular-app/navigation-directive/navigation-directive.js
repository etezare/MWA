angular.module("bookRental").directive("booksNavigation", BooksNavigation);
function BooksNavigation() {
  return {
    restrict: "E",
    templateUrl: "angular-app/navigation-directive/navigation-directive.html",
  };
}
