var dbConnection = require("../data/dbconnection");
var ObjectId = require("mongodb").ObjectId;
module.exports.gamesGetAll = function (req, res) {
  var db = dbConnection.get();
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
  var collection = db.collection("games");
  collection
    .find()
    .skip(offset)
    .limit(count)
    .toArray(function (err, docs) {
      console.log("Found games", docs);
      res.status(200).json(docs);
    });
};
module.exports.gamesGetOne = function (req, res) {
  var db = dbConnection.get();
  var collection = db.collection("games");
  var gameId = req.params.gameId;
  console.log(gameId);
  collection.findOne({ _id: ObjectId(gameId) }, function (err, doc) {
    console.log("Found Game", doc);
    res.status(200).json(doc);
  });
};
module.exports.gamesAddOne = function(req, res) {
  var db = dbConnection.get();
  var collection = db.collection("games");
  var newGame;
  if (req.body) {
    newGame = req.body;
    newGame.price = parseFloat(req.body.price);
    collection.insertOne(newGame, function (err, response) {
    console.log(response.ops);
    res.status(201).json(response.ops);
    });
  } else {
    console.log("Data missing from POST body");
    res.status(400).json({ error: "Required data missing fromPOST" });
  }
};
