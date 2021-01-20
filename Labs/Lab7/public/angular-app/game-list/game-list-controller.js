angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GameDataFactory){
    var vm = this;
    vm.title = "MEAN Games Home Page";
    GameDataFactory.getAllGames()
        .then(function(response){
            vm.games = response;
        });
}