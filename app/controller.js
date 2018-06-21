'use strict';

function loadController() {
  console.log('load controllers');

  var keyRightPress = false;
  var keyLeftPress = false;

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
        if (!keyLeftPress) {
          console.log('keyLeft');
          keyLeftPress = true;
          keyRightPress = false;
          arrowLeftDown();
        }
        break;

      case 39: // key ArrowRight
        if (!keyRightPress) {
          console.log('keyRight');
          keyRightPress = true;
          keyLeftPress = false;
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
        keyLeftPress = false;
        if (!keyRightPress) {
          arrowLeftUp();
        }
        break;

      case 39: // key ArrowRight
        keyRightPress = false;
        if (!keyLeftPress) {
          arrowRightUp();
        }
        break;
    }
  });
}

function arrowUpDown() {
  hero.movement = 'jump';
}

function arrowRightDown() {
  hero.movement = 'right';
  hero.state.push('movingRight');
  arrowLeftUp();
}

function arrowRightUp() {
  var i = hero.state.indexOf('movingRight');
  hero.state.splice(i, 1);
}

function arrowLeftDown() {
  hero.movement = 'left';
  hero.state.push('movingLeft');
  arrowRightUp();
}

function arrowLeftUp() {
  var i = hero.state.indexOf('movingLeft');
  hero.state.splice(i, 1);
}
