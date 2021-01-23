angular
  .module("jobSearching")
  .controller("jobDeleteController", jobDeleteController);

function jobDeleteController($routeParams, jobDataFactory) {
  var vm = this;
  var id = $routeParams.id;

  jobDataFactory.jobDeleteJob(id).then(function (response) {
    vm.deletedJob= response;
  });
}
