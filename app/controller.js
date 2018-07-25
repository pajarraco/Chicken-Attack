'use strict';

function loadController(index) {
  // console.log('load controllers');

  var keyRightPress = false;
  var keyLeftPress = false;

  document.addEventListener('keydown', function (key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        // console.log('keyUp');
        arrowUpDown();
        break;

      case 40: // key ArrowDown
        // arrowDownDown();
        break;

      case 37: // key ArrowLeft
        if (!keyLeftPress) {
          // console.log('keyLeft');
          keyLeftPress = true;
          keyRightPress = false;
          arrowLeftDown();
        }
        break;

      case 39: // key ArrowRight
        if (!keyRightPress) {
          // console.log('keyRight');
          keyRightPress = true;
          keyLeftPress = false;
          arrowRightDown();
        }
        break;
    }
  });

  document.addEventListener('keyup', function (key) {
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


  function arrowUpDown() {
    store[index].movement = 'jump';
  }

  function arrowRightDown() {
    store[index].movement = 'right';
    store[index].state.push('movingRight');
    arrowLeftUp();
  }

  function arrowRightUp() {
    var i = store[index].state.indexOf('movingRight');
    if (i != -1) {
      store[index].state.splice(i, 1);
    }
  }

  function arrowLeftDown() {
    store[index].movement = 'left';
    store[index].state.push('movingLeft');
    arrowRightUp();
  }

  function arrowLeftUp() {
    var i = store[index].state.indexOf('movingLeft');
    if (i != -1) {
      store[index].state.splice(i, 1);
    }
  }
}