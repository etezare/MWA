angular.module("bookRental",["ngRoute","angular-jwt"]).config(config).run(run);
function config($routeProvider, $httpProvider, $locationProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
    $routeProvider
    .when("/", {
        templateUrl: "angular-app/welcome/welcome.html",
        access: { restricted: false },
      })
    .when("/books",{
        templateUrl:"/angular-app/book-list/books.html",
        controller:"booksController",
        controllerAs:"vm",
        access: { restricted: false },
    })
    .when("/book/:id",{
        templateUrl:"/angular-app/book-display/book.html",
        controller:"bookController",
        controllerAs:"vm",
        access: { restricted: false },
    }) 
    .when("/addbook",{
      templateUrl:"/angular-app/book-add/bookAdd.html",
      controller:"bookAddController",
      controllerAs:"vm"
  })
    .when("/book/delete/:id",{
        templateUrl:"/angular-app/book-delete/book-delete.html",
        controller:"bookDeleteController",
        controllerAs:"vm",
        access: { restricted: false },
    })
    .when("/profile", {
        templateUrl: "angular-app/profile/profile.html",
        controllerAs: "vm",
        access: { restricted: true },
      })
      .when("/register", {
        templateUrl: "angular-app/register/register.html",
        controller: "RegisterController",
        controllerAs: "vm",
      })
    .otherwise({ redirectTo: "/" });

}
function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on(
      "$routeChangeStart",
      function (event, nextRoute, currentRoute) {
        if (
          nextRoute.access !== undefined &&
          nextRoute.access.restricted &&
          !$window.sessionStorage.token &&
          !AuthFactory.isLoggedIn
        ) {
          event.preventDefault();
          $location.path("/"); 
        }
      }
    );
  }