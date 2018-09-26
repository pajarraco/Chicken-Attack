'use strict';

var ticker = null;
var level = 0;

// run when all elements in documents are loaded
window.onload = function() {
  var mrWick = loadHero();

  loadController(mrWick);

  runLevel(level + 1);
  // run timer - this is the circle of the game
  ticker = setInterval(function() {
    // console.log(store);

    // run movement of hero
    for (let i = 0; i < store.length; i++) {
      updatePerson(i, runMovement(store[i]));
    }
    runAttacks(mrWick);
  }, 5); // time repeat in milliseconds
};
