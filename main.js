var gamejs = require('gamejs');
var draw = require('gamejs/graphics');
var font = require('gamejs/font');




function main() {

    var display = gamejs.display.getSurface();
    var staticPanda = gamejs.image.load('img/mikos/static1.png');
    staticPanda.scale([20, 2]);
    
    var instructionFont = new gamejs.font.Font('30px monospace');
    
    var canHeight = $('canvas').height();
    var canWidth = $('canvas').width();
    var ballHeight = canHeight - 50;
    var ballWidth = 15;
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
    
    var segmentTime = 250;
    var totalTime = 0;
    
    
    

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
        
        // Set the panda x and y for this draw
        pandaY = canHeight - greenBlockHeight - staticPanda.getSize()[1] - pandaHeight;
        pandaX = 25 + pandaLunge;
        
        
        // Draw Ground and panda
        draw.rect(display, '#46ac41', new gamejs.Rect([0, canHeight - greenBlockHeight], [canWidth, greenBlockHeight]), 0);
        display.blit(staticPanda, [pandaX, pandaY]);
        
        // Calculate and make new enemies
        totalTime++;
        if((totalTime % segmentTime) === 0){
            
            segmentTime = segmentTime - 20;
            var enemy = new draw.circle(display, "#333333", [canWidth, canHeight - 50], 15, 0); 
            var ball = {entity: enemy, x: canWidth, y: ballHeight, };
            balls.push(ball);
            
            
        }
        
        // Move enemies and draw them
        var i;
        for(i = 0; i < balls.length; i++){
            balls[i].x -= 5;
            //balls[i].entity.blit(display, [balls[i].x, balls[i].y]);
            draw.circle(display, "#333333", [balls[i].x, ballHeight], ballWidth, 0); 
        }
        
    });
    
    
    
    
};

gamejs.preload(['img/mikos/hit1.png', 'img/mikos/hit2.png', 'img/mikos/jump1.png', 'img/mikos/jump2.png', 'img/mikos/jump3.png', 'img/mikos/portrait.png', 'img/mikos/static1.png', 'img/mikos/walk1.png', 'img/mikos/walk2.png', 'img/mikos/walk3.png', 'img/mikos/walk4.png']);
gamejs.ready(main);