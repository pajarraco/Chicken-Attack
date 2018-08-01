'use strict';

// run when all elements in documents are loaded
window.onload = function() {
  var mrWick = loadHero();
  // load controller
  loadController(mrWick);

  loadChicken();
  setTimeout(function() {
    loadChicken();
  }, 1500);

  // run timer - this is the circle of the game
  setInterval(function() {
    // console.log(store);
    // check for movement of hero
    // if (hero.movement || hero.state !== 'still') {
    // run movement of hero

    for (let i = 0; i < store.length; i++) {
      updatePerson(i, runMovement(store[i]));
    }
    runAttacks(mrWick);
    // }
  }, 5); // time repeat in milliseconds
};
