var express= require("express");
var router= express.Router();
var controllerGames =require("../controllers/games.controllers.js");
router.route("/games").get(controllerGames.gamesGetAll);
module.exports=router;