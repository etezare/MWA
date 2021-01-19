angular.module("myProperApp").controller("catController", catController);
function catController($http) {
  var vm = this;
  $http.get("https://aws.random.cat/meow").then(function (response) {
    vm.cat = response.data;
  });
}
