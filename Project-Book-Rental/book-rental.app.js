var express=require("express");
var bodyParser=require("body-parser");
require("./api/data/db.js");
var path=require("path");
var routes= require("./api/routes");
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.set("port",5000);
app.use("/api",routes);
app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules",express.static(path.join(__dirname, "node_modules")));
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
})