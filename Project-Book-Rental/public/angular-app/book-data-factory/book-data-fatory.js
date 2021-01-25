angular.module("bookRental").factory("bookDataFactory",bookControllerFactory);
function bookControllerFactory($http){
    return{
        getAllBooks:getAllBooks,
        getOneBook: getOneBook,
        addOneBook:addOneBook,
        deleteOneBook:deleteOneBook,
        registerUser:registerUser
    }
    function registerUser(user) {
        return $http.post("/api/users/register", user).then(complete).catch(failed);
      }
    function getAllBooks(){
        return $http.get("/api/books").then(complete).catch(failed);
    }

    function getOneBook(id){
        return $http.get("/api/books/"+id).then(complete).catch(failed);
    }
    function addOneBook(book){
        return $http.post("/api/books/",book).then(complete).catch(failed);
    }
    function deleteOneBook(id){
        return $http.delete("/api/books/"+id).then(complete).catch(failed);
    }
  
    function complete(response){
        return response.data;
    }
    function failed(error){
        return error.status.statustext;
    }
}