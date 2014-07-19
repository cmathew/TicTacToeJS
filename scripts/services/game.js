ticTacToeApp.service('gameService', function(){
	//global game model
	this.size = 3;
	this.started = false;
	
	this.start = function() {
		this.started = true;
	};
});