'use strict';

var store = [];

function addPerson(person) {
  store.push(person);
  return store.length - 1;
}

function updatePerson(index, newPerson) {
  store[index] = newPerson;
  var component = document.getElementById(newPerson.id)
  var img = component.children;
  img[0].src = newPerson.img;
  component.style.left = newPerson.left + 'px';
  component.style.top = newPerson.top + 'px';
}

function removePerson(index) {
  store.splice(index, 1);
}