'use strict';

function level1() {
  loadLevel(1, function(template) {
    loadStage(template);
  });

  loadChickensJson(1, function(json) {
    var chicken = JSON.parse(json);
    for (let index = 0; index < chicken.length; index++) {
      loadChicken(chicken[index]);
    }
  });
}
