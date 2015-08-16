var createStage = function(that){

  bg = that.game.add.sprite(0,0,'background');
  bg.width = 800;
  bg.height = 502;

  gameCanvas = that.game.add.sprite(0, 0, 'background');
  gameCanvas.width = 800;
  gameCanvas.height = 502;

  ground = that.game.add.sprite(0,500, 'ground');
  ground.width = 800;
  ground.height = 178;

  that.game.physics.enable(ground, Phaser.Physics.ARCADE);

  that.game.physics.enable(gameCanvas, Phaser.Physics.ARCADE);

  ground.body.immovable = true;
  
  gameCanvas.body.immovable = true;

}