angular.module("jobSearching").controller("jobController",jobController);

function jobController(jobDataFactory,$routeParams){
    var vm=this;
    var id=$routeParams.id;
    jobDataFactory.getOneJob(id).then(function(response){
        vm.job=response;
        console.log(vm.job.date)
    })
}