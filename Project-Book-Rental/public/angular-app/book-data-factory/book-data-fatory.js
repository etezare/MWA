angular.module("bookRental").factory("bookDataFactory",bookControllerFactory);
function bookControllerFactory($http){
    return{
        getAllBooks:getAllBooks,
        getOneBook: getOneBook
    }
    function getAllBooks(){
        return $http.get("/api/books").then(complete).catch(failed);
    }
    function getOneBook(id){
        return $http.get("/api/books/"+id).then(complete).catch(failed);
    }
    function complete(response){
        return response.data;
    }
    function failed(error){
        return error.status.statustext;
    }
}