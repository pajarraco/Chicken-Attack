'use strict';

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
}

function loadStage() {
  createStage();
}
