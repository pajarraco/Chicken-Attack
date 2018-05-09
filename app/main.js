'use strict';

window.onload = function() {
  var keyUpIsPress = false;
  var keyDownIsPress = false;
  var keyLeftIsPress = false;
  var keyRightIsPress = false;

  var isJumping = null;
  var isCrouching = null;
  var isMovingLeft = null;
  var isMovingRight = null;

  var hero = document.getElementById('hero');

  document.addEventListener('keydown', function(key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        arrowUpDown();
        break;

      case 40: // key ArrowDown
        arrowDownDown();
        break;

      case 37: // key Arrowleft
        arrowLeftDown();
        break;

      case 39: // key ArrowRight
        arrowRightDown();
        break;
    }
  });

  document.addEventListener('keyup', function(key) {
    switch (key.keyCode) {
      case 38: // key ArrowUp
        arrowUpUp();
        break;

      case 40: // key ArrowDown
        arrowDownUp();
        break;

      case 37: // key Arrowleft
        arrowLeftUp();
        break;

      case 39: // key ArrowRight
        arrowRightUp();
        break;
    }
  });

  // key actions
  function arrowUpDown() {
    if (!keyUpIsPress) {
      console.log('start jump');

      moveJump();
      keyUpIsPress = true;
    }
  }

  function arrowDownDown() {
    if (!keyDownIsPress) {
      console.log('start crouch');
      moveCrouch();
      keyDownIsPress = true;
    }
  }

  function arrowLeftDown() {
    if (!keyLeftIsPress) {
      console.log('start left');
      moveLeft();
      keyLeftIsPress = true;
    }
  }

  function arrowRightDown() {
    if (!keyRightIsPress) {
      console.log('start right');
      moveRight();
      keyRightIsPress = true;
    }
  }

  function arrowUpUp() {
    if (keyUpIsPress) {
      console.log('stop jump');
      stopJump();
      keyUpIsPress = false;
    }
  }

  function arrowDownUp() {
    if (keyDownIsPress) {
      console.log('stop crouch');
      stopCrouch();
      keyDownIsPress = false;
    }
  }

  function arrowLeftUp() {
    if (keyLeftIsPress) {
      console.log('stop left');
      keyLeftIsPress = false;
    }
  }

  function arrowRightUp() {
    if (keyRightIsPress) {
      console.log('stop right');
      keyRightIsPress = false;
    }
  }

  // movements
  function moveJump() {
    isJumping = setInterval(function() {
      if (hero.offsetTop > 0) {
        hero.style.top = hero.offsetTop - 1 + 'px';
      } else {
        clearInterval(isJumping);
      }
    }, 5);
  }

  function moveCrouch() {
    isCrouching = setInterval(function() {
      if (hero.offsetTop < window.innerHeight - hero.offsetHeight) {
        hero.style.top = hero.offsetTop + 1 + 'px';
      } else {
        clearInterval(isCrouching);
      }
    }, 5);
  }

  function moveLeft() {
    hero.style.left = hero.offsetLeft - 1 + 'px';
  }

  function moveRight() {
    hero.style.left = hero.offsetLeft + 1 + 'px';
  }

  function stopJump() {
    clearInterval(isJumping);
  }

  function stopCrouch() {
    clearInterval(isCrouching);
  }

  function stopMoveLeft() {}

  function stopMoveRight() {}
};
