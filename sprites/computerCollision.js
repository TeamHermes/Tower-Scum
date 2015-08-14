var computerCollision = function(that,x,y){ //x and y coordinates for positioning
  x = x || 610;
  y = y || 470;

  console.log('spawning redvirusSprite');

  collisionLine = that.game.add.group();

  that.game.physics.startSystem(Phaser.Physics.ARCADE);
  collisionLine.enableBody = true;
  for(var i = 0; i < 28; i++){
  	var line = collisionLine.create(x+(3*i), y+(i*1.5), 'computerCollision');
  	line.body.immovable = true;
  }
  
  


};