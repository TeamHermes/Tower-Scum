var menu = function(game){}

menu.prototype = {
  create: function(){
    //var menu = this.game.add.sprite(400,200,"menu");
    //menu.anchor.setTo(0.5,0.5);
    var playButton = this.game.add.button(400,400,"play",this.playTheGame,this);
    playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
  	console.log('Rendering menu...');
    this.game.state.start("TowerScum");
  }
}