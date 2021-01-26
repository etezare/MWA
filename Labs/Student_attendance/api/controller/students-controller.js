var path=require("path");

dispatchPages=function(pageName, res) {
    var response={
        status:200,
        message:"index Page"
    }

    res.sendFile(path.join(__dirname,"..","..","public",pageName+".html"));
};

module.exports.studentsIndex=function(req,res){
    dispatchPages("student/student",res);
}

module.exports.studentsQrCode=function(req,res){
    dispatchPages("student/qr-code",res);
}

module.exports.addStudent=function(req,res){
    dispatchPages("student/addStudent",res);
}

module.exports.editStudent=function(req,res){
    dispatchPages("student/editStudent",res);
}

module.exports.studentProfile=function(req,res){
    dispatchPages("profile/profile",res);
}
module.exports.studentRegister=function(req,res){
    dispatchPages("register/register",res);
}

