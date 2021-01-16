var express= require("express");
var router= express.Router();
var controllerGames =require("../controllers/games.controllers.js");
router.route("/games").get(controllerGames.gamesGetAll);
router.route("/games/:gameId").get(controllerGames.gamesGetOne);
module.exports=router;