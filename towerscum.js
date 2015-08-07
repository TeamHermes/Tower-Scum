var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
console.log('Loading Phaser Game Window...');

var ratio = function(number){
  var result = number + (number * 0.5 );
  return result;
};

function preload() {
  game.load.atlas('maincomp','assets/maincomp/maincomp.png', 'assets/maincomp/maincomp.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
  // game.load.image('computer','assets/computer.gif');
}

function create() {
  // var computer = game.add.sprite(500,200, 'computer');
  // computer.width = 250;
  // computer.height = 250;

  var wheels = game.add.sprite( 700, 485, 'maincomp', 'wheels/wheels_01.png');
  wheels.animations.add('spin', ['wheels/wheels_01.png','wheels/wheels_02.png','wheels/wheels_03.png','wheels/wheels_04.png','wheels/wheels_05.png'], 10, true);
  wheels.animations.play('spin');
  console.log(wheels.width);
  console.log(wheels.height);
  wheels.width = ratio(74);
  wheels.height = ratio(32);


  var mainComp = game.add.sprite( 610, 300, 'maincomp', 'computer/computer_01.png');
  mainComp.animations.add('computer', ['computer/computer_01.png','computer/computer_02.png','computer/computer_03.png','computer/computer_04.png','computer/computer_05.png'], 10, true);
  mainComp.animations.play('computer');
  //original size: 142 x 150 - +50% size: 
  mainComp.width = ratio(142);
  mainComp.height = ratio(150);

  var controlPanel = game.add.sprite(610, 431, 'maincomp', 'computer_control/computer_control_01.png');
  controlPanel.animations.add('blink', ['computer_control/computer_control_01.png', 'computer_control/computer_control_02.png', 'computer_control/computer_control_03.png', 'computer_control/computer_control_04.png', 'computer_control/computer_control_05.png'], 10, true);
  controlPanel.animations.play('blink');
  controlPanel.width = ratio(72);
  controlPanel.height = ratio(46);

}


function update() {
}

