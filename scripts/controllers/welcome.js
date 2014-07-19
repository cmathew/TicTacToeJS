ticTacToeApp.controller('WelcomeCtrl', ['$scope', 'gameService', function ($scope, gameService) {
	$scope.message = "hello";
	$scope.gameSettings = gameService;
	
	this.startGame = function(){
		gameService.start();
	}
}]);