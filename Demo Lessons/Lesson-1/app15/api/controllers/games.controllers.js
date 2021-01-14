var gamesData=require("../data/games-data.json");
module.exports.gamesGetAll=function(req,res){
    console.log("JSON request received");
    res.status(200).json(gamesData);
}
module.exports.GetOne=function(req,res){
    var gameId=req.params.gameId;
    var theGame=gamesData[gameId];
    console.log("GET game with gameId ",gameId);
    res.status(200).json(gamesData);
}