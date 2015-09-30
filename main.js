var gamejs = require('gamejs');
var draw = require('gamejs/graphics');
var font = require('gamejs/font');




function main() {

    var display = gamejs.display.getSurface();
    var staticPanda = gamejs.image.load('img/mikos/static1.png');
    var pandaWalk1 = gamejs.image.load('img/mikos/walk1.png');
    var pandaWalk2 = gamejs.image.load('img/mikos/walk2.png');
    var pandaWalk3 = gamejs.image.load('img/mikos/walk3.png');
    var pandaWalk4 = gamejs.image.load('img/mikos/walk4.png');
    staticPanda.scale([20, 2]);
    
    var instructionFont = new gamejs.font.Font('30px monospace');
    
    var canHeight = $('canvas').height();
    var canWidth = $('canvas').width();
    var ballHeight = canHeight - 50;
    var ballWidth = 15;
    var blockHeight = canHeight - 50;
    var blockWidth = 25;
    var greenBlockHeight = 25;
    var score = 0;
    var alive = false;
    var start = false;
    var jumpUp = false;
    var jumpDown = false;
    var punchRight = false;
    var punchLeft = false;
    var pandaLunge = 0;
    var pandaHeight = 0;
    var pandaY = 0;
    var pandaX = 0;
    
    var blocks = [];
    var balls = [];
    
    var segmentTime = 50;
    var totalTime = 0;
    var cycle = 0;
    var walker = 0;
    
    
    

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
            if(!punchLeft && !punchRight){
                punchRight = true;   
            }
           }
            
        });
    });
    // there are also more special functions
    // gamejs.event.onKeyUp, gamejs.event.onMouseMotion,...
    


    gamejs.onTick(function(msDuration) {
        
        // Gets the screen Ready
        display.fill('#ffffff');
        display.blit(instructionFont.render('j to jump, p to punch', '#000000'), [20, 5]); 
        
        // Moves panda up and down
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
        
        // Moves panda left and right
        if(punchRight && pandaLunge < 50){
            pandaLunge += 10;
            if(pandaLunge === 50){
                punchRight = false;
                punchLeft = true;
            }
        } else if(punchLeft && pandaLunge > 0){
            pandaLunge -= 10;
            if(pandaLunge === 0){
                punchLeft = false;   
            }
        }
        
        totalTime++;
        // Set the panda x and y for this draw
        pandaY = canHeight - greenBlockHeight - staticPanda.getSize()[1] - pandaHeight;
        pandaX = 25 + pandaLunge;
        
        
        // Draw Ground and panda
        draw.rect(display, '#46ac41', new gamejs.Rect([0, canHeight - greenBlockHeight], [canWidth, greenBlockHeight]), 0);
        
        
        if(walker <= 8){
            walker++;
            display.blit(pandaWalk1, [pandaX, pandaY]);
        } else if(walker <= 16) {
            walker++;
            display.blit(pandaWalk2, [pandaX, pandaY]);
        } else if(walker <= 24) {
            walker++;
            display.blit(pandaWalk3, [pandaX, pandaY]);
        } else  {
            walker++;
            if(walker === 32){
                walker = 0;
            }
            display.blit(pandaWalk4, [pandaX, pandaY]);
        }
        
        // Calculate and make new enemies
        
        if((totalTime % segmentTime) === 0){
            if(cycle < 15){
                cycle++;   
            }

            var firstNum = Math.random();
            if(firstNum < 0.34){
                if(Math.random() < 0.5) {
                    var ball = { x: canWidth + 15, y: ballHeight - 60};   
                } else {
                    var ball = { x: canWidth, y: ballHeight };
                }
                balls.push(ball);
            } else if(firstNum < 0.67){
                var block = { x: canWidth, y: blockHeight };
                blocks.push(block);  
            } else {
                var ball = { x: canWidth + 15, y: ballHeight - 60};
                var block = {x:canWidth, y: blockHeight };
                balls.push(ball);
                blocks.push(block);
            }
            
            
        }
        
        // Move enemies and draw them
        var i;
        for(i = 0; i < balls.length; i++){
            balls[i].x -= (5 + cycle);
            draw.circle(display, "#811d1d", [balls[i].x, balls[i].y], ballWidth, 0); 
             
        }
        var j;
        for(j = 0; j < blocks.length; j++){
            blocks[j].x -= (5 + cycle);
            draw.rect(display, "#536215", new gamejs.Rect([blocks[j].x,blocks[j].y],[blockWidth, blockWidth]), 0);
        }
        
    });
    
    
    
    
};

gamejs.preload(['img/mikos/hit1.png', 'img/mikos/hit2.png', 'img/mikos/jump1.png', 'img/mikos/jump2.png', 'img/mikos/jump3.png', 'img/mikos/portrait.png', 'img/mikos/static1.png', 'img/mikos/walk1.png', 'img/mikos/walk2.png', 'img/mikos/walk3.png', 'img/mikos/walk4.png']);
gamejs.ready(main);