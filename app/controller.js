'use strict';

function loadController() {
  console.log('load controllers');

  document.addEventListener('keydown', function(key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        console.log('keyup');

        arrowUpDown();
        break;
      case 40: // key ArrowDown
        // arrowDownDown();
        break;

      case 37: // key ArrowLeft
        // arrowLeftDown();
        break;

      case 39: // key ArrowRight
        // arrowRightDown();
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
        // arrowRightDown();
        break;
    }
  });
}

function arrowUpDown() {
  console.log('start jump');
  hero.movement = 'jump';
  hero.state = 'jumping';
}
