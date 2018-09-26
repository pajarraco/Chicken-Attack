'use strict';

var store = [];
var runningLevel = 0;

function addPerson(person) {
  store.push(person);
  return store.length - 1;
}

function updatePerson(index, newPerson) {
  if (newPerson.type === 'hero') {
    newPerson = moveStage(newPerson);
  }

  store[index] = newPerson;
  var component = document.getElementById(newPerson.id);
  var img = component.children;
  img[0].src = newPerson.img;
  component.style.left = newPerson.left + 'px';
  component.style.top = newPerson.top + 'px';
}

function removePerson(index) {
  store.splice(index, 1);
}

function runLevel(level) {
  switch (level) {
    case 1:
      runningLevel = level;
      level1();
      break;

    default:
      break;
  }
}

function loadLevel(level, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'app/levels/level-' + level + '/stage.html', true);
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
    callback(this.responseText);
  };
  xhr.send();
}

function loadChickensJson(level, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'app/levels/level-' + level + '/chickens.json', true);
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
    callback(this.responseText);
  };
  xhr.send();
}
