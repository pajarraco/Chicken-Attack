'use strict';

function defaultHero() {
  return {
    id: 'mrwick',
    type: 'hero',
    movement: null,
    state: [],
    img: 'assets/hero-still.png',
    images: {
      base: 'assets/hero-still.png',
      left: 'assets/hero-left.png',
      up: '',
      down: ''
    }
  };
}

function createHero(id) {
  var peopleComponent = document.getElementById('people');
  var hero = document.createElement('div');
  var heroImg = document.createElement('img');
  hero.setAttribute('id', id);
  hero.className = 'hero';
  hero.appendChild(heroImg);
  peopleComponent.appendChild(hero);
}

function loadHero() {
  var hero = defaultHero();
  createHero(hero.id);
  var component = document.getElementById(hero.id);
  component.style.left = window.innerWidth / 2 - component.offsetWidth / 2 + 'px';
  var img = component.children;
  img[0].src = hero.img;
  hero.top = component.offsetTop;
  hero.left = component.offsetLeft;
  hero.width = component.offsetWidth;
  hero.height = component.offsetHeight;
  return addPerson(hero);
}
