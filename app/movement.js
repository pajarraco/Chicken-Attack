'use strict';

var viewPort = {
  width: window.innerWidth,
  height: window.innerHeight,
  top: 0,
  left: 0
};

function runMovement(person) {
  // create new position of the person
  var newPosition;
  // run when a new movement is place
  if (person.movement) {
    // select type of movement
    switch (person.movement) {
      case 'jump':
        console.log('move jump');
        newPosition = person;
        break;

      case 'right':
        console.log('move right');
        newPosition = movingRight(person);
        newPosition.movement = null;
        break;

      default:
        newPosition = person;
        break;
    }
    // run when not new movement is selected
  } else {
    // select type of movement by state
    switch (person.state) {
      case 'jumping':
        console.log('state jumping');
        newPosition = person;
        break;

      case 'movingRight':
        console.log('state moving right');
        newPosition = movingRight(person);
        break;

      default:
        // or still
        newPosition = person;
        break;
    }
  }
  return gravity(newPosition);
}

function movingRight(person) {
  if (person.left + person.width < viewPort.width) {
    person.left = person.left + 1;
  } else {
    person.movement = null;
    person.state = 'still';
  }
  return person;
}

function gravity(person) {
  if (person.top + person.height < viewPort.height - 10) {
    person.top = person.top + 1;
  }
  return person;
}
