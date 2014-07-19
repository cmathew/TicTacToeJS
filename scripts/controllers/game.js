ticTacToeApp.controller('GameCtrl', ['$scope', 'gameService', function ($scope, gameService) {
	$scope.gameSettings = gameService;
	$scope.game = this.game = {};	

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
}]);