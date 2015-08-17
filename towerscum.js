var towerScum = function(game){}
var health = 128;

var score = 0;
var scoreString = '';
var scoreText;

var redViruses = {};
var blueViruses = {};
var yellowViruses = {};
var swordyViruses = {};
var goldswordyViruses = {};

var roundText;
var roundString;

var currentRound;
var currentRoundText;
var roundNumber = 1;

var popup;
var attack = function(virus){
    virus.animations.play('attack');
    health -= .25;
    virus.y = virus.y - 25;
};

towerScum.prototype = {
  ratio: function(number){
    var result = number + (number * 0.5 );
    return result;
  },
  endRound: function(){
    if(redViruses.hasOwnProperty('children')){
      var totalLeft = blueViruses.children.length + redViruses.children.length;
    }else{

      var totalLeft = blueViruses.children.length;
      // console.log('total left: ', totalLeft)
    }

    if(!totalLeft ){
      console.log('round ended')
      tween = this.game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
      popup.alpha = 1;

    }
   },
  nextRound: function(){
    this.roundStarted = false;

  roundNumber++;
  this.rounds[roundNumber](this);
  popup.alpha = 0;
  tween = this.game.add.tween(popup.scale).to( { x: .1, y: .1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },
   rounds : {
  1: function(context){
  	  goldSwordy(context, 0, 0, 2)
      swordy(context, 0, 0, 5)
      blueVirus(context, 0, 0, 5)
    },
  2: function(context){
      blueVirus(context, 0, 0, 7)
  },
  3: function(context){
      blueVirus(context, 0, 0, 10)
      redVirus(context, 0, 0, 1)
  },
  4: function(context){
      blueVirus(context, 0, 0, 15)
      redVirus(context, 0, 0, 3)
      yellowVirus(context, 0, 0, 1);
    },
  5: function(context){
      blueVirus(context, 0, 0, 15)
      redVirus(context, 0, 0, 5)
    },
  6: function(context){
      blueVirus(context, 0, 0, 20)
      redVirus(context, 0, 0, 5)
    },
  7: function(context){
      blueVirus(context, 0, 0, 25)
      redVirus(context, 0, 0, 5)
    },
  8: function(context){
      blueVirus(context, 0, 0, 25)
      redVirus(context, 0, 0, 10)
    },
  9: function(context){
      blueVirus(context, 0, 0, 30)
      redVirus(context, 0, 0, 10)
    },
  10: function(context){
      blueVirus(context, 0, 0, 35)
      redVirus(context, 0, 0, 15)
    },
  11: function(context){
      blueVirus(context, 0, 0, 40)
      redVirus(context, 0, 0, 20)
    },
  12: function(context){
      blueVirus(context, 0, 0, 45)
      redVirus(context, 0, 0, 20)
    },
  13: function(context){
      blueVirus(context, 0, 0, 50)
      redVirus(context, 0, 0, 25)
    },
  context: function(context){
    console.log(context);
  }


},
  round: 1,


  create: function() {
    console.log('Creating game...');

    createStage(this);

    compSprite(this); //takes x and y coordinates for positioning
    weapon(this);
    computerCollision(this);

    //blueVirus(this, 0, 0, 5)
    //redVirus(this, 0, 0, 3)

    this.rounds[roundNumber](this);


    //health bar
    this.outerbar = this.add.bitmapData(134, 13);
    this.outerbar.context.fillStyle = '#00685e';
    this.outerbar.fill();
    this.barProgress = 128;      
    this.bar = this.add.bitmapData(128, 10); //sets width and height for bar
    this.game.add.sprite(633, 298, this.outerbar); //outerbar
    this.game.add.sprite(700 - (this.bar.width * 0.5), 300, this.bar);//x and y coordinates of bar 700,300


    //score related functions

    scoreString = 'Score : ';
    scoreText = this.game.add.text(10, 10, scoreString + score, { font: '28px Calibri', fill: '#fff' });


    //Current Round:
    currentRound = 'Round : ';
    currentRoundText = this.game.add.text(660, 10, currentRound + roundNumber, { font: '28px Calibri', fill: '#fff' });

    //Round End Popup box
    popup = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'popup');
    popup.alpha = 0.0;
    popup.anchor.set(0.5);
    popup.inputEnabled = false;


    var pw = (popup.width/2) - 260;
    var ph = (popup.height / 2) - 8;

    //  And click the close button to close it down again
    var okayButton = this.game.make.sprite(pw, -ph, 'okay');
    okayButton.inputEnabled = true;
    okayButton.input.priorityID = 1;
    okayButton.input.useHandCursor = true;
    okayButton.events.onInputDown.add(this.nextRound, this);

    roundString = 'ROUND CLEARED!';
    roundText = this.game.make.text(pw+60, -ph+50, roundString,  { font: '16px Calibri', fill: '#fff' })

    popup.addChild(roundText);
    popup.addChild(okayButton);

    popup.scale.set(0.1);
  },





  update: function() {

    this.game.physics.arcade.collide(blueViruses, ground, null, null, null);
    this.game.physics.arcade.collide(blueViruses, collisionLine, attack, null, null);

    this.game.physics.arcade.collide(redViruses, ground, null, null, null);
    this.game.physics.arcade.collide(redViruses, collisionLine, attack, null, null);

    this.game.physics.arcade.collide(yellowViruses, ground, null, null, null);
    this.game.physics.arcade.collide(yellowViruses, collisionLine, attack, null, null);

    this.game.physics.arcade.collide(swordyViruses, ground, null, null, null);
    this.game.physics.arcade.collide(swordyViruses, collisionLine, attack, null, null);

    this.game.physics.arcade.collide(goldswordyViruses, ground, null, null, null);
    this.game.physics.arcade.collide(goldswordyViruses, collisionLine, attack, null, null);


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

    if(blueViruses.children.length){
      this.roundStarted = true;
    }

    // console.log(this.barProgress);

    if(this.roundStarted){
      this.endRound();
    }

    if(this.barProgress <= 0){
      console.log("You have lost!");
      var brokenComp = this.game.add.sprite(560, 310, 'brokenComp');
      brokenComp.width = ratio(165);
      brokenComp.height = ratio(142);
      mainComp.kill();
      controlPanel.kill();
      this.game.state.start("GameOver",true,false,score);	
      this.roundStarted = false;
    }

  },

  render: function(){
    this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");//shows fps on top left
  }
};

