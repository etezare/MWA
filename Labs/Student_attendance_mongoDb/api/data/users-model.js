var mongoose=require("mongoose");
var userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    name:String,
    password:{
        type:String,
        required:true
    },
    role:String
})

mongoose.model("User",userSchema);