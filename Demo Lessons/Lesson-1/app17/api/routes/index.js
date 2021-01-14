var express=require("express");
var path=require("path");
var router=express.Router();
var controllerGames=require("../controllers/games.controllers.js");

router.route("/games").get(controllerGames.gamesGetAll);
router.route("games/new").post(controllerGames.AddOne)
router.route("/games/:gameId").get(controllerGames.GetOne)
module.exports=router;