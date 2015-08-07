var redVirus = function(x,y){ //x and y coordinates for positioning
  x = x || 0;
  y = x || 0;

  console.log('spawning redvirusSprite');

  var walkPNGs = ['red/walk/01.png',
                  'red/walk/02.png',
                  'red/walk/03.png',
                  'red/walk/04.png',
                  'red/walk/05.png',
                  'red/walk/06.png',
                  'red/walk/07.png',
                  'red/walk/08.png'];

  var diePNGs = ['red/die/01.png',
                'red/die/02.png',
                'red/die/03.png'];

  var attackPNGs = ['red/attack/01.png',
                    'red/attack/02.png',
                    'red/attack/03.png',
                    'red/attack/04.png',
                    'red/attack/05.png'];

  var redvirus = game.add.sprite(0+x, 480+y, 'viruses', 'red/walk/01.png');
  redvirus.animations.add('walk', walkPNGs, 15, true);
  redvirus.animations.add('attack', attackPNGs, 15, true);
  redvirus.animations.add('die', diePNGs, 15, true);

  game.add.tween(redvirus).to({x:game.width}, 10000, Phaser.Easing.Linear.None, true);

  redvirus.animations.play('walk');

};