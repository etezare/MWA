var mongoose = require("mongoose");
var Game = mongoose.model("Game");
module.exports.gamesGetAll = function (req, res) {
  var offset = 0;
  var count = 3;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
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
      var response={
        message:games,
        status:200
      }
      if (err) {
        response.message=err;
        response.status=500;
      } 
        res.status(response.status).json(response.message);
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
