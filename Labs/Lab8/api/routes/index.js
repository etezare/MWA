const { response } = require("express");
var express= require("express");
var router= express.Router();

var controllerGames =require("../controllers/games.controllers.js");
var controllerPublisher =require("../controllers/publisher.controllers.js");
var controllerReview =require("../controllers/reviews.controllers.js");

router.route("/games").get(controllerGames.gamesGetAll).
post(controllerGames.gamesAddOne);
router.route("/games/:gameId").
get(controllerGames.gamesGetOne).
put(controllerGames.gamesUpdateOne).
delete(controllerGames.gamesDeleteOne);

router.route("/games/:gameId/publisher")
.get(controllerPublisher.publisherGet)
.post(controllerPublisher.publisherAdd)
.put(controllerPublisher.publisherUpdate)
.delete(controllerPublisher.publisherDelete);

router.route("/games/:gameId/reviews")
.get(controllerReview.reviewsGetAll)
.post(controllerReview.reviewAdd);
router.route("/games/:gameId/reviews/:reviewId")
.get(controllerReview.reviewGetOne)
.put(controllerReview.reviewUpdate)
.delete(controllerReview.reviewDelete);



module.exports=router;