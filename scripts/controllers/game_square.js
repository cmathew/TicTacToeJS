ticTacToeApp.controller('GameSquareController', ['$scope', 'GameService', function ($scope, GameService) {
	this.select = function(){
		//player fills square with their symbol
		if (!$scope.player){
			$scope.player = $scope.currentPlayer;
		}
		//allow undo
		else if ($scope.player == $scope.currentPlayer) {
			$scope.player = null;
		}
		
		$scope.gameCtrl.setPlayerForSquare($scope.row, $scope.column, $scope.player);
	};
}]);