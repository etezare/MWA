var mongoose = require("mongoose");
var Game = mongoose.model("Game");

const objectId=require("mongodb").objectId;

var runGeoQuery=function(res,req){
  const lat=parseFloat(req.query.lat);  
  const lng=parseFloat(req.query.lng);
  const point={
    type:"Point",
    coordinates:[lng,lat]
  };
  Game.aggregate([
    {
      "$geoNear":{
        "near":point,
        "spherical":true,
        "distanceField":"distance",
        "maxDistance":750000,
        "num":5
      }
    }
  ],function(err,results){
    console.log("Geo results ",results);
    console.log("Geo error",err);
    res.status(200).json(results);
  })
}

module.exports.gamesGetAll = function (req, res) {
  var offset = 0;
  var count = 3;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if(req.query && req.query.lat && req.query.lng){
    runGeoQuery(req,res);
    return;
  }
  if (count > 7) {
    count = 7;
  }
  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ message: "QueryString Offset and Count shoulb be numbers" });
    return;
  }

  Game.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, games) {
      if (err) {
        console.log("Found Games", games.length);
        res.status(500).json(err);
      } else {
        console.log("Found games", games.length);
        res.json(games);
      }
    });
};
module.exports.gamesGetOne = function (req, res) {
  var gameId = req.params.gameId;

  console.log(gameId);
  Game.findById(gameId).exec(function (err, game) {
    var response = {
      status: 200,
      message: game,
    };
    if (err) {
      console.log("Error finding game");
      response.status = 500;
      response.message = err;
    } else if (!game) {
      response.status = 404;
      response.message = { message: "Game ID not foud" };
    }
    res.status(response.status).json(response.message);
  });
};
