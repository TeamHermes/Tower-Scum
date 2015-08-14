var towerScum = function(game){}

towerScum.prototype = {
  ratio: function(number){
    var result = number + (number * 0.5 );
    return result;
  },

  create: function() {
  	console.log('Creating game...');
  	var bg = this.game.add.sprite(0,0,'background');
	bg.width = 800;
	bg.height = 600;
    compSprite(this); //takes x and y coordinates for positioning
    computerCollision(this);

    blueVirus(this, 0, 0, 5)


  },


  update: function() {}
}
