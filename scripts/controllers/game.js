ticTacToeApp.controller('GameCtrl', ['$scope', 'gameService', function ($scope, gameService) {
	$scope.name = "foo";
	$scope.game = gameService.game;	
}]);