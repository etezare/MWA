var path=require("path");

dispatchPages=function(pageName, res) {
    var response={
        status:200,
        message:"index Page"
    }

    res.sendFile(path.join(__dirname,"..","..","public","template",pageName+".html"));
};

module.exports.facultyIndex=function(req,res){
    dispatchPages("faculty/faculty",res);
}
module.exports.facultyQrCode=function(req,res){
    dispatchPages("faculty/qr-code",res);
}

module.exports.facultyAttendance=function(req,res){
    dispatchPages("faculty/attendance",res);
}


