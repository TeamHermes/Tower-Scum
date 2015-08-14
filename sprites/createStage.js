var createStage = function(that){

  	var bg = that.game.add.sprite(0,0,'background');
	bg.width = 800;
	bg.height = 600;

	ground = that.game.add.sprite(0,500, 'ground');
	ground.width = 800
	ground.height = 180

	that.game.physics.enable(ground, Phaser.Physics.ARCADE);
	ground.body.immovable = true;

}