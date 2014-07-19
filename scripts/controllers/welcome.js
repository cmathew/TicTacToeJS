ticTacToeApp.controller('WelcomeCtrl', function ($scope, gameService) {
	$scope.message = "hello";
	$scope.game = gameService.game;
});