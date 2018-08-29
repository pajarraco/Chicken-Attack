"use strict";

var stage = {
  left: 0,
  width: 0
};

function createStage() {
  var stageComponent = document.getElementById("stage");
  var bgBack = document.createElement("div");
  var bgMiddle = document.createElement("div");
  var front = document.createElement("div");
  stage.width = front.width;

  bgBack.className = "bg-back";
  bgMiddle.className = "bg-middle";
  front.className = "front";

  stageComponent.appendChild(bgBack);
  stageComponent.appendChild(bgMiddle);
  stageComponent.appendChild(front);
}

function loadStage() {
  createStage();
}

function moveStage(hero) {
  console.log("moveStage");
  var documentWidth = window.innerWidth;
  var gap = documentWidth * 0.2;
  var endGap = documentWidth - gap;
  console.log(documentWidth, gap, endGap, hero.left, stage.left);
  if (hero.left <= gap && stage.left > 0) {
    stage.left = stage.left - 1;
    hero.left = hero.left + 1;
  } else if (
    hero.left + hero.width >= endGap &&
    documentWidth - stage.width < stage.left
  ) {
    stage.left = stage.left + 1;
    hero.left = hero.left - 1;
  }
  applyMove();
  return hero;
}
function applyMove() {
  var component = document.getElementsByClassName("front")[0];
  component.style.left = stage.left + "px";
}
