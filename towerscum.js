var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
console.log('Loading Phaser Game Window...');

var ratio = function(number){
  var result = number + (number * 0.5 );
  return result;
};

function preload() {
  game.load.atlas('maincomp','assets/maincomp/maincomp.png', 'assets/maincomp/maincomp.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.atlas('viruses','assets/viruses/viruses.png', 'assets/viruses/viruses.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  game.load.script('loadSprites.js', 'sprites/loadSprites.js');
  game.load.spritesheet('computerCollision', 'assets/collision_p.png', 3, 3);
  // game.load.image('computer','assets/computer.gif');
}

function create() {
  compSprite(); //takes x and y coordinates for positioning
  computerCollision();
}


function update() {

}

