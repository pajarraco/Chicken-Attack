'use strict';

var viewPort = {
  width: window.innerWidth,
  height: window.innerHeight,
  top: 0,
  left: 0
};

var maxJump = 100;
var stateJump = JSON.stringify(JSON.parse(maxJump));
var floor = 100;
var GRAVITY = 8;
var acceleration = GRAVITY / stateJump;

function runMovement(person) {
  // create new position of the person
  var newPosition;
  // run when a new movement is place
  if (person.movement) {
    // select type of movement
    switch (person.movement) {
      case 'jump':
        newPosition = jump(person);
        break;

      case 'right':
        console.log('move right');
        newPosition = movingRight(person);
        break;

      case 'left':
        console.log('move left');
        newPosition = movingLeft(person);
        break;

      default:
        newPosition = person;
        break;
    }
    newPosition.movement = null;
    // run when not new movement is selected
  } else {
    // select type of movement by state
    // console.log('state', person.state);

    if (person.state.length === 0) {
      newPosition = person;
    } else {
      for (var i = 0; i < person.state.length; i++) {
        switch (person.state[i]) {
          case 'jumping':
            console.log('state jumping');
            newPosition = jumping(person);
            break;

          case 'movingRight':
            console.log('state moving right');
            newPosition = movingRight(person);
            break;

          case 'movingLeft':
            console.log('state moving left');
            newPosition = movingLeft(person);
            break;
        }
      }
    }
  }
  return gravity(newPosition);
}

function movingRight(person) {
  person.img = person.images.base;
  if (person.left + person.width < viewPort.width) {
    person.left = person.left + 1;
  } else {
    person.movement = null;
    var i = person.state.indexOf('movingRight');
    person.state.splice(i, 1);
  }
  return person;
}

function movingLeft(person) {
  person.img = person.images.left;
  if (person.left > viewPort.left) {
    person.left = person.left - 1;
  } else {
    person.movement = null;
    var i = person.state.indexOf('movingLeft');
    person.state.splice(i, 1);
  }
  return person;
}

function jump(person) {
  if (person.state.indexOf('jumping') === -1) {
    if (person.top + person.height === viewPort.height - floor) {
      stateJump = 0;
      person.state.push('jumping');
    } else {
      stateJump = JSON.stringify(JSON.parse(maxJump));
    }
  }
  return person;
}

function jumping(person) {
  if (stateJump < maxJump) {
    person.top = person.top - 3;
    stateJump = stateJump + 1;
  } else {
    person.movement = null;
    var i = person.state.indexOf('jumping');
    person.state.splice(i, 1);
  }
  return person;
}

function gravity(person) {
  if (person.state.indexOf('jumping') === -1) {
    if (person.top + person.height < viewPort.height - floor) {
      person.top = person.top + 2;
    }
  }
  return person;
}
