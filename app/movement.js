'use strict';

function runMovement(person) {
  // create new position of the person
  var newPerson;
  // run when a new movement is place
  if (person.movement) {
    // select type of movement
    switch (person.movement) {
      case 'jump':
        console.log('move jump');
        newPerson = person;
        break;

      default:
        newPerson = person;
        break;
    }
    // run when not new movement is selected
  } else {
    // select type of movement by state
    switch (person.state) {
      case 'jumping':
        console.log('state jumping');
        newPerson = person;
        break;

      default:
        // or still
        newPerson = person;
        break;
    }
  }
  return newPerson;
}
