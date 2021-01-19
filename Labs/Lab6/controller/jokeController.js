angular.module("myProperApp")
.controller("jokeController", jokeController); 
function jokeController($http) {
    var vm= this;
    $http.get("https://official-joke-api.appspot.com/jokes/ten")
     .then(function(response) {
    vm.jokes= response.data;
    });
    }