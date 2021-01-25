angular.module("bookRental").controller("booksController", booksController);
function booksController(bookDataFactory) {
  var vm = this;
  vm.home = "Book Rental Online Home Page";
  vm.isSubmitted = false;
  bookDataFactory.getAllBooks().then(function (response) {
    vm.books = response;
  });
  
  //   vm.addBook=function(){
  //     window.location = "#!/addbook";
  // }
  vm.search = function () {
    var searchBook = vm.searchBook;

    bookDataFactory.getAllBooksByTitle(searchBook).then(function(response){
      vm.books=response;
    })
    // let books = vm.books;
    // if ((vm.searchBook = "")) {
    //   vm.books = books;
    // }
    // vm.books = vm.books.filter((book) => book.title == searchBook);
  };
}
