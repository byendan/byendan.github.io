var gamejs = require('gamejs');
var draw = require('gamejs/graphics');
var font = require('gamejs/font');




function main() {

    var display = gamejs.display.getSurface();
    var staticPanda = gamejs.image.load('img/mikos/static1.png');
    staticPanda.scale([20, 2]);
    
    var canHeight = $('canvas').height();
    var canWidth = $('canvas').width();
    var greenBlockHeight = 25;
    var score = 0;
    var alive = false;
    var start = false;
    var jumpUp = false;
    var jumpDown = false;
    var pandaHeight = 0;
    var pandaY = 0;
    
    

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
            if(!jumpUp && !jumpDown){
                jumpUp = true;
            }
           } else if (event.key === gamejs.event.K_p) {
            // Punch method   
           }
            
        });
    });
    // there are also more special functions
    // gamejs.event.onKeyUp, gamejs.event.onMouseMotion,...
    


    gamejs.onTick(function(msDuration) {
        display.fill('#ffffff');
        if(jumpUp && pandaHeight < 105) {
            pandaHeight += 7;
            if(pandaHeight === 105){
                jumpUp = false;
                jumpDown = true;
            }
        } else if(jumpDown && pandaHeight > 0){
            pandaHeight -= 7;
            if(pandaHeight === 0){
                jumpDown = false;   
            }
        }
        
        pandaY = canHeight - greenBlockHeight - staticPanda.getSize()[1] - pandaHeight;
        
        draw.rect(display, '#46ac41', new gamejs.Rect([0, canHeight - greenBlockHeight], [canWidth, greenBlockHeight]), 0);
        display.blit(staticPanda, [25, pandaY]);
    });
    
    
};

gamejs.preload(['img/mikos/hit1.png', 'img/mikos/hit2.png', 'img/mikos/jump1.png', 'img/mikos/jump2.png', 'img/mikos/jump3.png', 'img/mikos/portrait.png', 'img/mikos/static1.png', 'img/mikos/walk1.png', 'img/mikos/walk2.png', 'img/mikos/walk3.png', 'img/mikos/walk4.png']);
gamejs.ready(main);