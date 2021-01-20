const { ObjectID } = require("mongodb");
var mongoose=require("mongoose");
const { title } = require("process");
var authorSchema=mongoose.Schema({
 
    id :{
        type: ObjectID,
        required:false
    },
    name:String,
    yearbBorn:{
        type:Number,
        length:4
    },
    sex:{
        type:String,
        length:1
    },
    numberOfBooks:Number
})


var bookSchema=mongoose.Schema({
    // author:{
    //     type:String,
    //     required:false
    // },
    author:[authorSchema],
    price:Number,
    country:String,
    imageLink:String,
    link:String,
    language:String,
    pages:Number,
    title:{
        type:String,
    required:false
    },
    year:{
        type:Number,
        length:4
    }
   
})
mongoose.model("Book",bookSchema,"book");