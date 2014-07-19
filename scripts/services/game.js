ticTacToeApp.service('GameService', function(){
	//global game settings
	this.size = 3;
	this.started = false;
	
	this.start = function() {
		this.started = true;
	};
	
	this.end = function(player) {
		alert('Player ' + player + ' Wins!');
		this.started = false;
	};	
});