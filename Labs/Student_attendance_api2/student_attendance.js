const cors=require("cors")
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
require("./api/data/db.js");
const path=require("path");
var routes= require("./api/routes");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());


app.set("port",8080);
app.use("/api",routes);
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
app.use(express.static(path.join(__dirname,"public")));
var server=app.listen(app.get("port"),function(){
    var port=server.address().port;
    console.log("Listening to port "+port);
})