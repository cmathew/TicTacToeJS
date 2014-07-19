ticTacToeApp.controller('WelcomeCtrl', ['$scope', 'gameService', function ($scope, gameService) {
	$scope.message = "hello";
	$scope.game = gameService.game;
	
	this.startGame = function(){
		gameService.game.started = true;
	}
}]);