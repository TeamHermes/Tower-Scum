var computerCollision = function(x,y){ //x and y coordinates for positioning
  x = x || 0;
  y = y || 0;

  console.log('spawning redvirusSprite');

  var collisionLine = game.add.group();
  for(var i = 0; i < 28; i++){
  	collisionLine.create(610+x+(3*i), 470+y+(i*1.5), 'computerCollision');
  }

  collisionLine.enableBody = true;
  //collisionLine.body.immovable = true;


};