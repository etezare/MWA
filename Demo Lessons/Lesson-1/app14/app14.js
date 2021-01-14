var express=require("express");
var path=require("path");
var routes=require("./routes");
var app=express();
app.set("port",3000);
app.use("/CSS",function(req,res,next){
    console.log(req.method,req.url);
    next();
})
app.use(express.static(path.join(__dirname,"public")));
// app.get("/",function(req,res){
//     console.log("GET received.");
//     res.status(200).sendFile(path.join(__dirname,"public","index.html"));
// });
app.use("/api",routes);
// app.get("/file",function(req,res){
//     console.log("File request received");
//     res.status(200).sendFile(path.join(__dirname,"app13.js"));
// })

// app.get("/json",function(req,res){
//     console.log("GET received.");
//     res.status(200).sendFile(path.join(__dirname,"public","index.html"));
// });
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
});