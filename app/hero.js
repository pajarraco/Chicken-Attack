'use strict';

function defaultHero() {
  return {
    id: 'mrwick',
    movement: null,
    state: [],
    img: 'assets/hero-still.png',
    images: {
      base: 'assets/hero-still.png',
      left: 'assets/hero-left.png',
      up: '',
      down: ''
    }
  }
}

function createHero() {
  var peopleComponent = document.getElementById('people');
  var hero = document.createElement('div');
  var heroImg = document.createElement('img');
  hero.setAttribute('id', 'hero');
  hero.className = 'hero';
  hero.appendChild(heroImg);
  peopleComponent.appendChild(hero);
}

function loadHero() {
  createHero();
  var component = document.getElementById('hero');
  component.style.left = window.innerWidth / 2 + 'px';
  var hero = defaultHero();
  var img = component.children;
  img[0].src = hero.img;
  hero.top = component.offsetTop;
  hero.left = component.offsetLeft;
  hero.width = component.offsetWidth;
  hero.height = component.offsetHeight;
  addPerson(hero);
}

function setHero(_hero) {
  var component = document.getElementById('hero');
  var img = component.children;

  img[0].src = _hero.img;
  component.style.left = _hero.left + 'px';
  component.style.top = _hero.top + 'px';
  _hero;

  for (let i = 0; i < store.length; i++) {
    if (store[i].id === _hero.id) {
      store[i] = _hero;
    }
  }
}
