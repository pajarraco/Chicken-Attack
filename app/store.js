'use strict';

var store = [];

function addPerson(person) {
  store.push(person);
}



function removePerson(personId) {
  for (let i = 0; i < store.length; i++) {
    if (store[i].id === personId) {
      store.splice(i, 1);
    }
  }
}