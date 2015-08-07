var blueVirus = function(x,y) {
  x = x || 0;
  y = y || 0;

  var walkPNGs = [
  "blue/walk/01.png", 
  "blue/walk/02.png", 
  "blue/walk/03.png",
  "blue/walk/04.png", 
  "blue/walk/05.png", 
  "blue/walk/06.png",
  "blue/walk/07.png", 
  "blue/walk/08.png"
  ];
  var attackPNGs = [
  "blue/attack/01.png", 
  "blue/attack/02.png", 
  "blue/attack/03.png",
  "blue/attack/04.png", 
  "blue/attack/05.png"
  ];

  var diePNGs = [
  "blue/die/01.png",
  "blue/die/02.png", 
  "blue/die/03.png"
  ];

  var blueVirus = game.add.sprite(0+x, 480+y, 'viruses', "blue/walk/01.png");
  
  blueVirus.animations.add('walk', walkPNGs, 15, true);
  blueVirus.animations.play('walk');

  blueVirus.animations.add('attack', attackPNGs, 15, true);
  blueVirus.animations.play('attack');

  game.add.tween(blueVirus).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
}