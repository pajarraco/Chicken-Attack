'use strict';

var hero = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  movement: null,
  state: null
};

window.onload = function() {
  var component = document.getElementById('hero');
  hero.top = component.offsetTop;
  hero.left = component.offsetLeft;
  hero.width = component.offsetLeft;
  hero.height = component.offsetTop;
};
