var express=require("express");
var path=require("path");
var router=express.Router();
router.route("/json").get(function(req,res){
    console.log("JSON request received");
    res.status(200).json({"jsonData": true});
}).post(function(req,res){
    console.log("POST json route request received");
    res.status(200).json({"jsonData":true})
});

router.route("/file").get(function(req,res){
    console.log("File request received");
    res.status(200).sendFile(path.join(__dirname,"index.js"));
})


module.exports=router;