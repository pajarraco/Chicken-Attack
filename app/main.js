'use strict';

window.onload = function () {
  // console.log('ready');
  document.addEventListener('keydown', function (key) {
    // console.log('key', key);
    switch (key.keyCode) {
      case 38: // key ArrowUp
        arrowUp();
        break;

      case 40: // key ArrowDown
        arrowDown();
        break;
    }
  });
};

function arrowUp() {
  var hero = document.getElementById('hero');
  console.log('arrowUp', hero.offsetTop);
  hero.style.top = (hero.offsetTop - 3) + 'px';
}

function arrowDown() {
  var hero = document.getElementById('hero');
  console.log('arrowDown', hero.offsetTop);
  hero.style.top = (hero.offsetTop + 3) + 'px';
}

