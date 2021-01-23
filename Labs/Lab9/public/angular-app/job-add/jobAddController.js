angular.module("jobSearching").controller("jobAddController",jobAddController);
function jobAddController(jobDataFactory){
    var vm=this;
    vm.isSubmitted=false;
    vm.jobAdd=function(){
        var postData={
            title:vm.newJobTitle,
            salary:vm.newJobSalary,
            exprience:vm.newJobExprience,
            postDate:vm.newJobPostDate,
            description:vm.newJobDescription,
            skills:vm.newJobSkill
        }
        console.log(postData)
        if(vm.jobForm.$valid){
            jobDataFactory.addOneJob(postData).
            then(function(response){
                console.log("Job Saved");
            })
            .catch(function(error){
                console.log(error);
            })   
        }else{
            vm.isSubmitted=true;
        }
    }

}