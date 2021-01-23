angular.module("jobSearching").controller("jobsController",jobsController);
function jobsController(jobDataFactory){
    var vm=this;
    vm.home="Job Searching Home Page";
    jobDataFactory.getAllJobs().then(function(response){
        vm.jobs=response;
    })

    vm.addJob=function(){
        window.location = "#!/job/add";
    }
    vm.deleteJob=function(id){
        window.location="#!/job/delete/"+id;
    }
}