'use strict';

function defaultChicken() {
  return {
    id: '',
    type: 'chicken',
    movement: null,
    state: ['movingLeft'],
    img: 'assets/guard-left.png',
    images: {
      base: 'assets/guard-still.png',
      left: 'assets/guard-left.png',
      up: '',
      down: ''
    }
  };
}

function createChicken(id) {
  var peopleComponent = document.getElementById('people');
  var chicken = document.createElement('div');
  var chickenImg = document.createElement('img');

  chicken.setAttribute('id', id);
  chicken.className = 'chicken';
  chicken.appendChild(chickenImg);
  peopleComponent.appendChild(chicken);
}

function loadChicken() {
  var chicken = defaultChicken();
  chicken.id = createID();
  createChicken(chicken.id);
  var component = document.getElementById(chicken.id);
  component.style.left = window.innerWidth + 'px';
  var img = component.children;
  img[0].scr = chicken.img;
  chicken.top = component.offsetTop;
  chicken.left = component.offsetLeft;
  chicken.width = component.offsetWidth;
  chicken.height = component.offsetHeight;
  return addPerson(chicken);
}

function chickenMomevement(chicken) {
  if (chicken.left <= 0) {
    var i = chicken.state.indexOf('movingLeft');
    chicken.state.splice(i, 1);
    chicken.state.push('movingRight');
  } else if (chicken.left + chicken.width >= window.innerWidth) {
    var i = chicken.state.indexOf('movingRight');
    chicken.state.splice(i, 1);
    chicken.state.push('movingLeft');
  }
  return chicken;
}

function createID() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
