var createStage = function(that){

  bg = that.game.add.sprite(0,0,'background');
  bg.width = 800;
  bg.height = 600;

  gameCanvas = that.game.add.sprite(0,-5, 'ground');
  gameCanvas.width = 800;
  gameCanvas.height = 500;

	ground = that.game.add.sprite(0,500, 'ground');
	ground.width = 800;
	ground.height = 180;

	that.game.physics.enable(ground, Phaser.Physics.ARCADE);

  that.game.physics.enable(gameCanvas, Phaser.Physics.ARCADE);

	ground.body.immovable = true;
  
  gameCanvas.body.immovable = true;

}