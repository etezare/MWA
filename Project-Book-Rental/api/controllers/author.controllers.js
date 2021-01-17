var mongoose=require("mongoose");
var Book=mongoose.model("Book");


module.exports.authorGetAll=function(req,res){
  var bookId=req.params.bookId;
  console.log("GET All Authors");
  Book.findById(bookId).select("author").exec(function(err,book){
    var response={
      message:book,
      status:200
    }
    if(err){
      response.message=err;
      response.status=500;
    }else if(!book){
      response.message={message:"Book Not Found"};
      response.status=404;
    }
    else {  
      response.message = book.author ? book.author: [];
    }
    res.status(response.status).json(response.message);
 })
}


module.exports.authorGetOne=function(req,res){
  var bookId=req.params.bookId;
  var authorId=req.params.authorId;
  Book.findById(bookId).select("author").exec(function(err,book){
    var author=book.author.id(authorId);
    var response={
      message:book,
      status:200
    }
    if(err){
      response.message=err;
      response.status=500;
    }else if(!book){
      response.message={message:"Book Not Found"};
      response.status=404;
    }
    else {  
      response.message = author ? author: [];
    }
    res.status(response.status).json(response.message);
  })
}
