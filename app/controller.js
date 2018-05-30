'use strict';

document.addEventListener('keydown', function (key) {
    switch (key.keyCode) {
        case 38: // key ArrowUp
            arrowUpDown();
            break;
        case 40: // key ArrowDown
            arrowDownDown();
            break;

        case 37: // key ArrowLeft
            arrowLeftDown();
            break;

        case 39: // key ArrowRight
            arrowRightDown();
            break;
    }
});

document.addEventListener('keyup', function (key) {
    switch (key.keyCode) {
        case 38: // key ArrowUp
            arrowUpDown();
            break;
        case 40: // key ArrowDown
            arrowDownDown();
            break;

        case 37: // key ArrowLeft
            arrowLeftDown();
            break;

        case 39: // key ArrowRight
            arrowRightDown();
            break;
    }
});
