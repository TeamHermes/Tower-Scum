var boot = function(game){

};
  
boot.prototype = {
  preload: function(){
    this.game.load.image("loading","assets/loading.png"); 
  },
  create: function(){
  	console.log('Booting...');
    this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    this.scale.pageAlignHorizontally = true;
    this.scale.updateLayout();
    this.game.state.start("Preload");
  }
}