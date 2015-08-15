var towerScum = function(game){}
var health = 128;

 var attack = function(virus){
 	console.log('attacking');
    virus.animations.play('attack');
    health--;
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
    redVirus(this, 0, 0, 3)
    this.outerbar = this.add.bitmapData(134, 13);
    this.outerbar.context.fillStyle = '#00685e';
    this.outerbar.fill()
    this.barProgress = 128;      
    this.bar = this.add.bitmapData(128, 10); //sets width and height for bar
    this.game.add.sprite(633, 298, this.outerbar); //outerbar
    this.game.add.sprite(700 - (this.bar.width * 0.5), 300, this.bar);//x and y coordinates of bar 700,300


  },





  update: function() {

  	this.game.physics.arcade.collide(blueViruses, ground, null, null, null);
  	this.game.physics.arcade.collide(blueViruses, collisionLine, attack, null, null);
  	
  	this.game.physics.arcade.collide(redViruses, ground, null, null, null);
  	this.game.physics.arcade.collide(redViruses, collisionLine, attack, null, null);


  	this.bar.context.clearRect(0, 0, this.bar.width, this.bar.height);
     
     //color changes based on 50% health and 25% health
    if (this.barProgress < 32) {
      this.bar.context.fillStyle = '#f00';   
    }
    
    else if (this.barProgress < 64) {
      this.bar.context.fillStyle = '#ff0';
    }
    
    else {
      this.bar.context.fillStyle = '#0f0';
    }
        
    this.bar.context.fillRect(0, 0, this.barProgress, 8);
    this.game.add.tween(this).to({barProgress: health}, 100, null, true, 0); //each hit health updates and bar shrinks

    this.bar.dirty = true; //apparently this line is important but I dont know why
  },

  render: function(){
  	this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");//shows fps on top left
  }
}

