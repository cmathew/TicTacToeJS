ticTacToeApp.directive('boardSquare', function() {
	return {
		restrict: 'E',		
		templateUrl: 'partials/_board_square.html',
		link: function(scope, element, attrs){
			scope.player = attrs.player;
			scope.row = attrs.row;
			scope.column = attrs.column;
		}
    };
  });