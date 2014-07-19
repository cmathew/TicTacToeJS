ticTacToeApp.directive('boardSquare', function() {
	return {
		restrict: 'E',		
		templateUrl: 'partials/_board_square.html',
		link: function(scope, element, attrs){
			scope.player = attrs.player;
		}
    };
  });