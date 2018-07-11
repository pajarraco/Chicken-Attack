'use strict';

function loadController() {
  console.log('load controllers');

  var keyRightPress = false;
  var keyLeftPress = false;

  for (let i = 0; i < store.length; i++) {
    if (store[i].id === 'mrwick') {
      var hero = store[i];
    }

  }

  document.addEventListener('keydown', function (key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        console.log('keyUp');
        arrowUpDown(hero);
        break;

      case 40: // key ArrowDown
        // arrowDownDown();
        break;

      case 37: // key ArrowLeft
        if (!keyLeftPress) {
          console.log('keyLeft');
          keyLeftPress = true;
          keyRightPress = false;
          arrowLeftDown(hero);
        }
        break;

      case 39: // key ArrowRight
        if (!keyRightPress) {
          console.log('keyRight');
          keyRightPress = true;
          keyLeftPress = false;
          arrowRightDown(hero);
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
          arrowLeftUp(hero);
        }
        break;

      case 39: // key ArrowRight
        keyRightPress = false;
        if (!keyLeftPress) {
          arrowRightUp(hero);
        }
        break;
    }
  });
}

function arrowUpDown(hero) {
  hero.movement = 'jump';
}

function arrowRightDown(hero) {
  hero.movement = 'right';
  hero.state.push('movingRight');
  arrowLeftUp(hero);
}

function arrowRightUp(hero) {
  var i = hero.state.indexOf('movingRight');
  if (i != -1) {
    hero.state.splice(i, 1);
  }
}

function arrowLeftDown(hero) {
  hero.movement = 'left';
  hero.state.push('movingLeft');
  arrowRightUp(hero);
}

function arrowLeftUp(hero) {
  var i = hero.state.indexOf('movingLeft');
  if (i != -1) {
    hero.state.splice(i, 1);
  }
}
