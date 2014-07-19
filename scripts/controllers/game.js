ticTacToeApp.controller('GameController', ['$scope', 'GameService', function ($scope, GameService) {
	$scope.gameSettings = GameService;
	$scope.game = this.game = {};
	$scope.currentPlayer = 'X';

	//we'll use a multidimensional array to make matching easier
	//convention is rows by columns
	var self = this;
	$scope.$watch('gameSettings.size', function(size) {
		self.game.rows = [];		
		for (var i = 0; i < size; i++) {
			self.game.rows.push([]);
			for (var j = 0; j < size; j++) {
				self.game.rows[i].push({});
			}
		}	
	});
	
	this.changeTurn = function () {
		if ($scope.currentPlayer === 'X') {
			$scope.currentPlayer = 'O';
		}
		else {
			$scope.currentPlayer = 'X';
		}
	}
}]);