'use strict';

var stage = {
  left: 0,
  middleLeft: 0,
  backLeft: 0,
  width: 0
};

var leftCount = 0;
var rightCount = 0;
var leftBackCount = 0;
var rightBackCount = 0;

function createStage() {
  var stageComponent = document.getElementById('stage');
  var bgBack = document.createElement('div');
  var bgMiddle = document.createElement('div');
  var front = document.createElement('div');

  bgBack.className = 'bg-back';
  bgMiddle.className = 'bg-middle';
  front.className = 'front';

  stageComponent.appendChild(bgBack);
  stageComponent.appendChild(bgMiddle);
  stageComponent.appendChild(front);

  stage.width = front.offsetWidth;
}

function loadStage() {
  createStage();
}

function moveStage(hero) {
  var documentWidth = window.innerWidth;
  var gap = documentWidth * 0.2;
  var endGap = documentWidth - gap;
  if (hero.left <= gap && stage.left < 0) {
    stage.left = stage.left + 1;
    leftCount = leftCount + 1;
    if (leftCount === 3) {
      stage.middleLeft = stage.middleLeft + 1;
      leftCount = 0;
    }
    leftBackCount = leftBackCount + 1;
    if (leftBackCount === 6) {
      stage.backLeft = stage.backLeft + 1;
      leftBackCount = 0;
    }
    hero.left = hero.left + 1;
  } else if (hero.left + hero.width >= endGap && documentWidth - stage.width < stage.left) {
    stage.left = stage.left - 1;
    rightCount = rightCount + 1;
    if (rightCount === 3) {
      stage.middleLeft = stage.middleLeft - 1;
      rightCount = 0;
    }
    rightBackCount = rightBackCount + 1;
    if (rightBackCount === 6) {
      stage.backLeft = stage.backLeft - 1;
      rightBackCount = 0;
    }
    hero.left = hero.left - 1;
  }
  applyMove();
  return hero;
}

function applyMove() {
  var front = document.getElementsByClassName('front')[0];
  var middle = document.getElementsByClassName('bg-middle')[0];
  var back = document.getElementsByClassName('bg-back')[0];
  front.style.left = stage.left + 'px';
  middle.style.left = stage.middleLeft + 'px';
  back.style.left = stage.backLeft + 'px';
}
