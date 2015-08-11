var computerCollision = function(x,y){ //x and y coordinates for positioning
  x = x || 610;
  y = y || 470;

  console.log('spawning redvirusSprite');

  var collisionLine = game.add.group();
  for(var i = 0; i < 28; i++){
  	collisionLine.create(x+(3*i), y+(i*1.5), 'computerCollision');
  }



};