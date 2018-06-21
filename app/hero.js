'use strict';
var hero = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  movement: null,
  state: []
};

function loadHero() {
  var component = document.getElementById('hero');
  hero.top = component.offsetTop;
  hero.left = component.offsetLeft;
  hero.width = component.offsetWidth;
  hero.height = component.offsetHeight;
}

function setHero(_hero) {
  // console.log('new hero', _hero);

  var component = document.getElementById('hero');
  component.style.left = _hero.left + 'px';
  component.style.top = _hero.top + 'px';
  hero = _hero;
}
