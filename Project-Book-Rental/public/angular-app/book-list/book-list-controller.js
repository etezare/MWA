angular.module("bookRental").controller("booksController",booksController);
function booksController(bookDataFactory){
    var vm=this;
    vm.home="Book Rental Online Home Page";
    vm.isSubmitted=false;
    bookDataFactory.getAllBooks().then(function(response){
        vm.books=response;
    })
    vm.addBook=function(){
      window.location = "#!/addbook";
  }
    
    
    }
    