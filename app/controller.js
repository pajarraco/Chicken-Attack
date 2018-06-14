'use strict';

function loadController() {
  console.log('load controllers');

  var keyRightPress = false;

  document.addEventListener('keydown', function(key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        console.log('keyUp');
        arrowUpDown();
        break;
      case 40: // key ArrowDown
        // arrowDownDown();
        break;

      case 37: // key ArrowLeft
        // arrowLeftDown();
        break;

      case 39: // key ArrowRight
        if (!keyRightPress) {
          console.log('keyRight');
          keyRightPress = true;
          arrowRightDown();
        }
        break;
    }
  });

  document.addEventListener('keyup', function(key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        // arrowUpDown();
        break;
      case 40: // key ArrowDown
        // arrowDownDown();
        break;

      case 37: // key ArrowLeft
        // arrowLeftDown();
        break;

      case 39: // key ArrowRight
        keyRightPress = false;
        arrowRightUp();
        break;
    }
  });
}

function arrowUpDown() {
  hero.movement = 'jump';
  hero.state = 'jumping';
}

function arrowRightDown() {
  hero.movement = 'right';
  hero.state = 'movingRight';
}

function arrowRightUp() {
  hero.state = 'still';
}
