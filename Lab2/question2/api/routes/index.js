var express= require("express");
var router= express.Router();
var controllerSum =require("../controllers/sum.controllers.js");
router.route("/add/:number/sum").get(controllerSum.sumNumber);
module.exports=router;