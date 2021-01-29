var mongoose=require("mongoose");
var attendanceSchema=mongoose.Schema(({
    date:Date,
    attendance:{
        type:Boolean,
        default:false
    }
}))

var studentSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    studentId:String,
    attendance:[attendanceSchema]
})
mongoose.model("Student",studentSchema,"student");