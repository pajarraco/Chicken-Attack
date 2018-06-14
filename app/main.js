'use strict';

// run when all elements in documents are loaded
window.onload = function() {
  // load variable for hero
  loadHero();
  // load controller
  loadController();

  // run timer - this is the circle of the game
  setInterval(function() {
    console.log(hero);
    // check for movement of hero
    // if (hero.movement || hero.state !== 'still') {
    // run movement of hero
    setHero(runMovement(hero));
    // }
  }, 5000); // time repeat in milliseconds
};

// var keyUpIsPress = false;
// var keyDownIsPress = false;
// var keyLeftIsPress = false;
// var keyRightIsPress = false;

// var isJumping = null;
// var isCrouching = null;
// var isMovingLeft = null;
// var isMovingRight = null;

// var floor = window.innerHeight - hero.offsetHeight - 100;
// var _gravity = 0.02;

// startGravity();

// document.addEventListener('keydown', function(key) {
//   switch (key.keyCode) {
//     case 38: // key ArrowUp
//       arrowUpDown();
//       break;

//     case 40: // key ArrowDown
//       arrowDownDown();
//       break;

//     case 37: // key ArrowLeft
//       arrowLeftDown();
//       break;

//     case 39: // key ArrowRight
//       arrowRightDown();
//       break;
//   }
// });

// document.addEventListener('keyup', function(key) {
//   switch (key.keyCode) {
//     case 38: // key ArrowUp
//       break;

//     case 40: // key ArrowDown
//       arrowDownUp();
//       break;

//     case 37: // key ArrowLeft
//       arrowLeftUp();
//       break;

//     case 39: // key ArrowRight
//       arrowRightUp();
//       break;
//   }
// });

// // key actions
// function arrowUpDown() {
//   if (!keyUpIsPress) {
//     console.log('start jump');
//     moveJump();
//     keyUpIsPress = true;
//   }
// }

// function arrowDownDown() {
//   if (!keyDownIsPress) {
//     console.log('start crouch');
//     moveCrouch();
//     keyDownIsPress = true;
//   }
// }

// function arrowLeftDown() {
//   if (!keyLeftIsPress) {
//     console.log('start left');
//     moveLeft();
//     keyLeftIsPress = true;
//   }
// }

// function arrowRightDown() {
//   if (!keyRightIsPress) {
//     console.log('start right');
//     moveRight();
//     keyRightIsPress = true;
//   }
// }

// function arrowDownUp() {
//   if (keyDownIsPress) {
//     console.log('stop crouch');
//     stopCrouch();
//     keyDownIsPress = false;
//   }
// }

// function arrowLeftUp() {
//   if (keyLeftIsPress) {
//     console.log('stop left');
//     stopMoveLeft();
//     keyLeftIsPress = false;
//   }
// }

// function arrowRightUp() {
//   if (keyRightIsPress) {
//     console.log('stop right');
//     stopMoveRight();
//     keyRightIsPress = false;
//   }
// }

// // movements
// function moveJump() {
//   var maxTop = 150;
//   var vy = -maxTop;
//   var position = hero.offsetTop;
//   console.log('position', position);
//   isJumping = setInterval(function() {
//     if (hero.offsetTop <= floor) {
//       vy += 1;
//       var _move = vy < 0 ? maxTop + vy : maxTop - vy;
//       var _top = position - Math.round(_move);
//       console.log('top', _top, _move, maxTop, vy);
//       hero.style.top = _top + 'px';
//     } else {
//       hero.style.top = floor + 'px';
//       clearInterval(isJumping);
//       keyUpIsPress = false;
//     }
//   }, 2);
// }

// function moveCrouch() {
//   isCrouching = setInterval(function() {
//     if (hero.offsetTop < window.innerHeight - hero.offsetHeight) {
//       hero.style.top = hero.offsetTop + 1 + 'px';
//     } else {
//       clearInterval(isCrouching);
//     }
//   }, 5);
// }

// function moveLeft() {
//   isMovingLeft = setInterval(function() {
//     if (hero.offsetLeft > 0) {
//       hero.style.left = hero.offsetLeft - 1 + 'px';
//     } else {
//       clearInterval(isMovingLeft);
//     }
//   }, 5);
// }

// function moveRight() {
//   isMovingRight = setInterval(function() {
//     if (hero.offsetLeft < window.innerWidth - hero.offsetWidth) {
//       hero.style.left = hero.offsetLeft + 1 + 'px';
//     } else {
//       clearInterval(isMovingRight);
//     }
//   }, 5);
// }

// function stopJump() {
//   clearInterval(isJumping);
// }

// function stopCrouch() {
//   clearInterval(isCrouching);
// }

// function stopMoveLeft() {
//   clearInterval(isMovingLeft);
// }

// function stopMoveRight() {
//   clearInterval(isMovingRight);
// }

// function startGravity() {
//   var vx = 0;
//   var vy = 0;
//   var runGravity = setInterval(function() {
//     if (hero.offsetTop < floor) {
//       hero.style.top = gravity(hero.offsetTop) + 'px';
//     } else {
//       clearInterval(runGravity);
//     }
//   }, 10);

//   function gravity(position) {
//     vy -= _gravity;
//     return position - vy;
//   }
// }
