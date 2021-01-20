angular.module("meanGames").controller("GameController", GameController);

function _getStarRating(stars){  
    return new Array(parseInt(stars));
}

function GameController($routeParams, GameDataFactory){
    var vm = this;
    var id = $routeParams.id;

    GameDataFactory.getOneGame(id)
        .then(function(response){
            vm.game = response;
            vm.rating = _getStarRating(response.rate);
    
    });
}