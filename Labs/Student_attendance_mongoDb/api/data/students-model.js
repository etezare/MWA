const { ObjectID } = require("mongodb");
var mongoose=require("mongoose");
var attendanceSchema=mongoose.Schema(({
    name:String,
    date:Date,
    attendance:Boolean
}))

var studentSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    studentId:Number,
    attendance:[attendanceSchema]
})
mongoose.model("Student",studentSchema,"student");