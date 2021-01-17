const { ObjectID } = require("mongodb");
var mongoose=require("mongoose");
var addressSchema=new mongoose.Schema({
     
    id :{
        type: ObjectID,
        required:false
    },
    street:String,
    city:String,
    state:{
        type:String,
        length:2
    },
    zipcode:{
        type:Number,
        length:5
    }
})



var studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gpa:{
        type:Number,
        min:0,
        max:4
    },
    addresses:[addressSchema]
   
})
mongoose.model("Student",studentSchema,"student");