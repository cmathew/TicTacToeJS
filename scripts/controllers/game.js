ticTacToeApp.controller('GameCtrl', function ($scope, gameService) {
	$scope.name = "foo";
	$scope.game = gameService.game;	
});