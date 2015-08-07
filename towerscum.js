var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
console.log('Loading Phaser Game Window...');

function preload() {
  
  game.load.image('computer','assets/computer.gif');
}

function create() {
  var computer = game.add.sprite(500,200, 'computer');
  computer.width = 250;
  computer.height = 250;


}


function update() {
}

