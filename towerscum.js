var towerScum = function(game){}

 var attack = function(virus){
 	console.log('attacking');
  	virus.animations.play('attack');
  	virus.y = virus.y - 25;
  }

towerScum.prototype = {
  ratio: function(number){
    var result = number + (number * 0.5 );
    return result;
  },

  create: function() {
  	console.log('Creating game...');

  	createStage(this);


    compSprite(this); //takes x and y coordinates for positioning
    computerCollision(this);

    blueVirus(this, 0, 0, 5)





  },





  update: function() {

  	this.game.physics.arcade.collide(blueViruses, ground, null, null, null);
  	this.game.physics.arcade.collide(blueViruses, collisionLine, attack, null, null);
  }
}

