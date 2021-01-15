var express=require("express");
require("./api/data/db.js");
var path=require("path");
var routes= require("./api/routes");
var app=express();
app.set("port",5000);
app.use("/api",routes);
app.use(express.static(path.join(__dirname, "public")));
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
})