var gamejs = require('gamejs');
var draw = require('gamejs/graphics');
var font = require('gamejs/font');

gamejs.preload([]);

function main() {

    var display = gamejs.display.getSurface();
    gamejs.display.setCaption("Example Draw");
    
    var canHeight = $('canvas').height();
    var canWidth = $('canvas').width();
    var greenBlockHeight = 50;
    

    // green rect
    draw.rect(display, '#46ac41', new gamejs.Rect([0, canHeight - greenBlockHeight], [canWidth, greenBlockHeight]), 0);
    

    gamejs.event.onEvent(function(event) {
        // event handling
    });
    // there are also more special functions
    // gamejs.event.onKeyUp, gamejs.event.onMouseMotion,...

    gamejs.onTick(function(msDuration) {
        // game loop
    });
};

gamejs.ready(main);