'use strict';

function runAttacks(heroIndex) {
  var hero = store[heroIndex];
  for (let i = 0; i < store.length; i++) {
    var chicken = store[i];
    // console.log(hero, chicken);
    var heroLeft = hero.left;
    var heroRight = hero.left + hero.width;
    var heroTop = hero.top;
    var heroBottom = hero.top + hero.height;
    var chickenLeft = chicken.left;
    var chickenRight = chicken.left + chicken.width;
    var chickenTop = chicken.top;
    var chickenBottom = chicken.top + chicken.height;

    if (heroBottom === chickenTop && heroLeft <= chickenRight && heroRight >= chickenLeft) {
      console.log('kill chicken');
      chicken.movement = 'kill';
      chicken.state = ['dying'];
      updatePerson(i, chicken);
    } else {
      if (
        ((heroLeft === chickenRight || heroRight === chickenLeft) &&
          (heroTop <= chickenBottom && heroBottom >= chickenTop)) ||
        (heroTop === chickenBottom && heroLeft <= chickenRight && heroRight >= chickenLeft)
      ) {
        console.log('kill hero');
        hero.movement = 'kill';
        hero.state = ['dying'];
        updatePerson(i, hero);
      }
    }
  }
}
