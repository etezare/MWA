const { ObjectID } = require("mongodb");
var mongoose=require("mongoose");
const { title } = require("process");
var locationSchema=new mongoose.Schema({
    city:String,
    state:String,
    zipcode:Number,
    street:String
})


var jobSchema=mongoose.Schema({
    salary:Number,
    description:String,
    exprience:String,
    postDate:Date,
    title:{
        type:String,
    required:false
    },
    skills:Array,
    location:locationSchema,


   
})
mongoose.model("Job",jobSchema,"job");