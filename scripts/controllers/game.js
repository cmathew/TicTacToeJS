ticTacToeApp.controller('GameController', ['$scope', 'GameService', function ($scope, GameService) {
	$scope.gameSettings = GameService;
	$scope.currentPlayer = 'X';

	//we'll use a multidimensional array to make matching easier
	//convention is rows by columns
	var self = this;
	
	$scope.$watch('gameSettings.size', function(size) {
		$scope.rows = [];		
		for (var i = 0; i < size; i++) {
			$scope.rows.push([]);
			for (var j = 0; j < size; j++) {
				$scope.rows[i].push({row: i, column: j, player: null});
			}
		}	
	});
	
	this.setPlayerForSquare = function(row, column, player)  {
		$scope.rows[row][column].player = player;
	
		if (player){
			self._changeTurn();
		}
	};
		
	this._changeTurn = function () {
		if ($scope.currentPlayer === 'X') {
			$scope.currentPlayer = 'O';
		}
		else {
			$scope.currentPlayer = 'X';
		}
		
		self._checkVictoryCondition();
	};
	
	this._checkVictoryCondition = function() {	
		for (var i = 0, l = $scope.rows.length; i < l; i++){
			for (var j = 0; j < l; j++){
				//if space is filled, check neighbors for match
				var player = $scope.rows[i][j].player;
				if (player) {					
					//horizontal checks
					var tempCol = j - 1;
					var horizRow = 1;
					while(tempCol >= 0 && $scope.rows[i][tempCol].player == player) {
						horizRow++;
						tempCol--;
					}
					tempCol = j + 1;
					while(tempCol < $scope.rows[i].length && $scope.rows[i][tempCol].player == player) {
						horizRow++;
						tempCol++;
					}
					if (horizRow >= 3) {	
						self.destroy();
						GameService.end(player);
						return;
					}					
				}
			}
		}
	};
	
	this.destroy = function(){
		$scope.rows = [];
		$scope.currentPlayer = null;
	};
}]);