'use strict';
var hero = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  movement: null,
  state: [],
  img: 'assets/hero-still.png'
};

function createHero(name) {
  var peopleComponent = document.getElementById('people');
  var people = document.createElement('div');
  var peopleImg = document.createElement('img');

  var title = document.createElement('h1');
  var text = document.createTextNode('Chicken Attack');

  var body = document.getElementsByTagName('body');
  title.appendChild(text);
  body[0].insertBefore(title, body[0].firstChild);

  people.setAttribute('id', name);
  people.className = 'hero';

  people.appendChild(peopleImg);
  peopleComponent.appendChild(people);
}

function loadHero(name) {
  createHero(name);
  var component = document.getElementById(name);
  component.style.left = window.innerWidth / 2 + (Math.floor(Math.random() * 30) + 1) + 'px';
  var img = component.children;
  img[0].src = hero.img;
  hero.top = component.offsetTop;
  hero.left = component.offsetLeft;
  hero.width = component.offsetWidth;
  hero.height = component.offsetHeight;
}

function setHero(_hero) {
  console.log('new hero', _hero);

  var component = document.getElementById('hero');
  var img = component.children;

  img[0].src = _hero.img;
  component.style.left = _hero.left + 'px';
  component.style.top = _hero.top + 'px';
  hero = _hero;
}
