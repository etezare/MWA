var mongoose=require("mongoose");
const { title } = require("process");
var bookSchema=mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    country:String,
    imageLink:String,
    language:String,
    pages:Number,
    title:{
        type:String,
    required:true
    },
    year:{
        type:Number,
        length:4
    }
   
})
mongoose.model("Book",bookSchema,"book");