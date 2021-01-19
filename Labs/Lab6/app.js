angular.module("myProperApp", ["ngRoute"]).config(config);
function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "template/main.html",
      controller: "mainController",
      controllerAs: "mainCtrl",
    })
    .when("/cat", {
      templateUrl: "template/cat.html",
      controller: "catController",
      controllerAs: "catCtrl",
    })
    .when("/about", {
      templateUrl: "template/about.html",
      controller: "aboutController",
      controllerAs: "aboutCtrl",
    })
    .when("/joke", {
      templateUrl: "template/joke.html",
      controller: "jokeController",
      controllerAs: "jokeCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
}
