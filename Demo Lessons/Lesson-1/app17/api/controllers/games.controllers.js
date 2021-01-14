var gamesData=require("../data/games-data.json");
module.exports.gamesGetAll=function(req,res){
    console.log("GET the games");
    console.log(req.query);
    var offset=0;
    var count=5;
    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset,10);
    }
    if(req.query && req.query.count){
        count=parseInt(req.query.count,10);
    }
    var pageGames=gamesData.slice(offset,offset+count);
    res.status(200).json(pageGames);
}
module.exports.GetOne=function(req,res){
    var gameId=req.params.gameId;
    var theGame=gamesData[gameId];
    console.log("GET game with gameId ",gameId);
    res.status(200).json(theGame);
}

module.exports.AddOne=function(req,res){
 console.log("POST new game");
 console.log(req.body);
 res.status(200).json(req.body);
}