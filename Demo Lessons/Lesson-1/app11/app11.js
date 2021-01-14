var express=require("express");
var app=express();
var path=require("path");
app.set("port",3000);
app.get("/",function(req,res){
    console.log("GET received");
    // res.send("Received your GET request.");
    res.status(404).send("Received your GET request.")
});
app.get("/json",function(req,res){
    console.log("JSON request received");
    res.status(200).json({"jsonData":true});
})
app.get("/file",function(req,res){
    console.log("File request received");
    res.status(200).sendFile(path.join(__dirname,"app11.js"));
});
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
});