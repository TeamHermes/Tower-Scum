console.log('loading computer sprite');

var ratio = function(number){
  var result = number + (number * 0.5 );
  return result;
};

var compSprite = function(that,x,y){ //x and y coordinates for positioning

  x = x || 0;
  y = x || 0;

  var wheels = that.game.add.sprite(700+x, 485+y, 'maincomp', 'wheels_01.png');
  wheels.animations.add('spin', ['wheels_01.png','wheels_02.png','wheels_03.png','wheels_04.png','wheels_05.png'], 15, true);
  wheels.animations.play('spin');
  console.log(wheels.width);
  console.log(wheels.height);
  wheels.width = ratio(74);
  wheels.height = ratio(32);


  var mainComp = that.game.add.sprite( 610+x, 300+y, 'maincomp', 'computer_01.png');
  mainComp.animations.add('computer', ['computer_01.png','computer_02.png','computer_03.png','computer_04.png','computer_05.png'], 15, true);
  mainComp.animations.play('computer');
  //original size: 142 x 150 - +50% size: 
  mainComp.width = ratio(142);
  mainComp.height = ratio(150);

  var controlPanel = that.game.add.sprite(610+x, 429+y, 'maincomp', 'control_center_04.png');
  controlPanel.animations.add('blink', ['control_center_01.png', 'control_center_02.png', 'control_center_03.png', 'control_center_04.png', 'control_center_05.png'], 15, true);
  controlPanel.animations.play('blink');
  controlPanel.width = ratio(72);
  controlPanel.height = ratio(48);
};