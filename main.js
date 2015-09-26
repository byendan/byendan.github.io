var gamejs = require('gamejs');
var draw = require('gamejs/graphics');
var font = require('gamejs/font');

gamejs.preload([]);

function main() {

    var display = gamejs.display.getSurface();
    
    var canHeight = $('canvas').height();
    var canWidth = $('canvas').width();
    var greenBlockHeight = 50;
    var score = 0;
    var alive = false;
    var start = false;
    

    
    

    gamejs.event.onEvent(function(event) {
        // event handling
        gamejs.event.onDisplayResize(function() {
            var canHeight = $('#gjs-canvas').height();
            var canWidth = $('#gjs-canvas').width();
            draw.rect(display, '#46ac41', new gamejs.Rect([0, canHeight - greenBlockHeight], [canWidth, greenBlockHeight]), 0);
        });
        
        gamejs.event.onKeyDown(function(event) {
           if (event.key === gamejs.event.K_s){
               if(!start && !alive){
                    start = true;
                    alive = true;
               }
           } else if (event.key === gamejs.event.K_j) {
            // Jump method   
           } else if (event.key === gamejs.event.K_p) {
            // Punch method   
           }
            
        });
    });
    // there are also more special functions
    // gamejs.event.onKeyUp, gamejs.event.onMouseMotion,...
    


    gamejs.onTick(function(msDuration) {
        // game loop
        // green rect
    draw.rect(display, '#46ac41', new gamejs.Rect([0, canHeight - greenBlockHeight], [canWidth, greenBlockHeight]), 0);

    });
    
    
};

gamejs.ready(main);