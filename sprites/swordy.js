console.log('loading swordy sprite');
var swordy = function(that, x, y, number){ //x and y coordinates for positioning
  x = x || 0;
  y = x || 0;

<<<<<<< HEAD
=======
  var drop = 0;

>>>>>>> origin/master
  console.log('spawning swordy');

  var walkPNGs = ['swordy/walk/01.png',
                  'swordy/walk/02.png',
                  'swordy/walk/03.png',
                  'swordy/walk/04.png',
                  'swordy/walk/05.png',
                  'swordy/walk/06.png'];

  var diePNGs = ['swordy/die/01.png',
                 'swordy/die/02.png',
                 'swordy/die/03.png',
                 'swordy/die/04.png',
                 'swordy/die/05.png',
                 'swordy/die/06.png'];

<<<<<<< HEAD
  var attackPNGs = [
=======
  var attackPNGs = ['swordy/attack/01.png',
                    'swordy/attack/02.png',
                    'swordy/attack/03.png',
                    'swordy/attack/04.png',
                    'swordy/attack/05.png',
>>>>>>> origin/master
                    'swordy/attack/06.png',
                    'swordy/attack/07.png',
                    'swordy/attack/08.png',
                    'swordy/attack/09.png',
                    'swordy/attack/10.png'];
<<<<<<< HEAD
  var waitPNGs = [
                    'swordy/attack/01.png',
                    'swordy/attack/02.png',
                    'swordy/attack/03.png',
                    'swordy/attack/04.png',
                    'swordy/attack/05.png'];
=======
>>>>>>> origin/master

  var addMovement = function(virus){

  	var startDrag = function(virus){
	    virus.animations.play('airwalk');
	    virus.body.moves = false;
<<<<<<< HEAD
	    console.log('startDrag on swordy');
=======
	    tween.pause();
	    console.log('startDrag on redVirus');
>>>>>>> origin/master
    }

  var stopDrag = function(virus){
        virus.body.moves = true;
        virus.animations.play('walk');
<<<<<<< HEAD
        virus.body.velocity.x = 100
  
        if (virus.y < 200){ // top of map = -10 or something bottom is like 590?
=======
        virus.body.velocity.x = 100;
        virus.body.velocity.x += 25;
        drop += 1;
        console.log(virus.y)
  
        if (virus.y < 200 && drop === 2){ // top of map = -10 or something bottom is like 590?
>>>>>>> origin/master
          virus.animations.stop('walk');
          setTimeout(function(){
            virus.animations.play('die');
          }, 2000);
          setTimeout(function(){
            virus.kill();

            score += 20;
            scoreText.text = scoreString + score; //score displayed
            
            swordyViruses.remove(virus);
          }, 2150);
          virus.body.velocity.x = 50;
          virus.body.velocity.y = 0;
        }
        //tween = that.game.add.tween(virus).to({ x: that.game.width }, 10000, Phaser.Easing.Linear.None, true);
    }

  that.game.physics.arcade.enable(virus);
    virus.body.collideWorldBounds = true;
    virus.inputEnabled = true;
    virus.input.enableDrag(true);

    virus.events.onDragStart.add(startDrag, this);
    virus.events.onDragStop.add(stopDrag, this);

    virus.animations.add('walk', walkPNGs, 15, true);
<<<<<<< HEAD
    virus.animations.add('attack', attackPNGs, 10, true);
    // virus.animations.add('wait', waitPNGs, 10, true);
    virus.animations.add('die', diePNGs, 13, true);
=======
    virus.animations.add('attack', attackPNGs, 15, true);
    virus.animations.add('die', diePNGs, 15, true);
>>>>>>> origin/master
    virus.animations.add('airwalk', walkPNGs, 45, true);
    virus.animations.play('walk');

    //var tween = that.game.add.tween(virus).to({ x: that.game.width }, 10000, Phaser.Easing.Linear.None, true);
    virus.enableBody = true;
    virus.body.gravity.y = 300
    virus.body.velocity.x = 100
	
  }


  swordyViruses = that.game.add.group();
  swordyViruses.enableBody = true;
  swordyViruses.physicsBodyType = Phaser.Physics.ARCADE;
  for(var i = 0; i < number; i++){
  	setTimeout(function(){
<<<<<<< HEAD
  		var swordy = swordyViruses.create(0+x, 440+y, 'viruses', "swordy/walk/01.png");
  		addMovement(swordy);
  	}, (i*1000)+500)
=======
  		var swordy = swordyViruses.create(0+x, 480+y, 'viruses', "swordy/walk/01.png");
  		addMovement(swordyVirus);
  	}, (i*1000)+250)
>>>>>>> origin/master
  	
  }

};