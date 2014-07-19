ticTacToeApp.controller('WelcomeCtrl', ['$scope', 'GameService', function ($scope, GameService) {
	$scope.message = "hello";
	$scope.gameSettings = GameService;
	
	this.startGame = function(){
		GameService.start();
	}
}]);