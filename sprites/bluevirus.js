var blueVirus = function(x,y,number) {
  x = x || 0;
  y = y || 0;

   console.log('spawning bluevirusSprite');

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



  var addMovement = function(virus){
	game.physics.arcade.enable(virus);
    virus.body.collideWorldBounds = true;
    virus.inputEnabled = true;
    virus.input.enableDrag(true);

    virus.events.onDragStart.add(startDrag, this);
    virus.events.onDragStop.add(stopDrag, this);

    virus.animations.add('walk', walkPNGs, 15, true);
    virus.animations.add('airwalk', walkPNGs, 45, true);
    virus.animations.play('walk');

    var tween = game.add.tween(virus).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);


	  function startDrag(virus){
	    virus.animations.play('airwalk');
	    virus.body.moves = false;
	    tween.pause();
	  }

	  function stopDrag(virus){
	      virus.body.moves = true;
	      virus.animations.play('walk');
	      tween = game.add.tween(virus).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
	  }
  }


  for(var i = 0; i < number; i++){
  	var blueViruses = game.add.group();
  	var blueVirus = blueViruses.create(0+x, 480+y, 'viruses', "blue/walk/01.png");
  	addMovement(blueVirus);
  }
  


  //var blueVirus = game.add.sprite(0+x, 480+y, 'viruses', "blue/walk/01.png");


  


  // blueVirus.animations.add('attack', attackPNGs, 15, true);
  // blueVirus.animations.play('attack');

  


};