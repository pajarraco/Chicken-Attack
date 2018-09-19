'use strict';

var ticker = null;

// run when all elements in documents are loaded
window.onload = function() {
  var mrWick = loadHero();
  loadStage();

  loadController(mrWick);

  // load chickens
  loadChicken();

  setTimeout(function() {
    loadChicken();
  }, 2000);

  setTimeout(function() {
    loadChicken();
  }, 3000);

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
