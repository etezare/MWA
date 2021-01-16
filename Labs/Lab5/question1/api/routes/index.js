const { response } = require("express");
var express= require("express");
var router= express.Router();

var controllerGames =require("../controllers/games.controllers.js");
router.route("/games").get(controllerGames.gamesGetAll).
post(controllerGames.gamesAddOne);
router.route("/games/:gameId").
get(controllerGames.gamesGetOne).
put(controllerGames.gamesUpdateOne).
delete(controllerGames.gamesDeleteOne);

module.exports=router;