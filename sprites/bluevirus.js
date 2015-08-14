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

  // game.physics.startSystem(Phaser.Physics.ARCADE);
  // game.physics.arcade.gravity.y = 100;



  var blueVirus = game.add.sprite(0+x, 480+y, 'viruses', "blue/walk/01.png");
  
  game.physics.arcade.enable(blueVirus);
  blueVirus.body.collideWorldBounds = true;
  blueVirus.inputEnabled = true;
  blueVirus.input.enableDrag(true);

  blueVirus.events.onDragStart.add(startDrag, this);
  blueVirus.events.onDragStop.add(stopDrag, this);

  blueVirus.animations.add('walk', walkPNGs, 15, true);
  blueVirus.animations.play('walk');

  // blueVirus.animations.add('attack', attackPNGs, 15, true);
  // blueVirus.animations.play('attack');

  var tween = game.add.tween(blueVirus).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

  function startDrag(tween){
    blueVirus.animations.stop(null, true);
    blueVirus.body.moves = false;
    tween.pause();
  }

  function stopDrag(){
      blueVirus.body.moves = true;
  }

};