var express=require("express");
var bodyParser=require("body-parser");
var routes= require("./api/routes");
var dbConnection=require("./api/data/dbconnection.js")
require("./api/data/dbconnection.js").open();
var app=express();
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.set("port",3000);
app.use("/api",routes);

var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
})