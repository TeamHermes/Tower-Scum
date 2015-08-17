var gameOver = function(game){}

gameOver.prototype = {
	init: function(score){
		alert("You scored: "+score)
	},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(400,200,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(400,300,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
	this.barProgress = 128;
	health = 128;
  this.game.state.start("TowerScum");
  roundNumber = 1;
	 }
}