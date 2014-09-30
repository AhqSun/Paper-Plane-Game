/// <reference path="game-floor.js" />
/// <reference path="game-bg.js" />
/// <reference path="plane.js" />
/// <reference path="game-event.js" />
var main = (function () {
    var w = 480;
    var h = 512;
    var stage = new PIXI.Stage(0x66FF99);
    var render = PIXI.autoDetectRenderer(w, h, null, false);
    var dir = 3;/*[0,1,2,3,4,5,6];*/   
    var speed = {
        0: { x: 5, y: 1 },
        1: { x: 3, y: 3 },
        2: { x: 1, y: 6 },
        3: { x: 0, y: 12 },
        4: { x: -1, y: 6 },
        5: { x: -3, y: 3 },
        6: { x: -5, y: 1 }
    };
    var event = {dir:0,gameOver:false};

    document.getElementById("main").appendChild(render.view);  
    gameBg.init(stage);
    plane.init(stage);
    gameEvent.init(event);
    gameFloor.init(stage);
    function anim() {
        if (!event.gameOver) {
            var ov = speed[event.dir];
            var v = { x: ov.x, y: ov.y };
            render.render(stage);
            requestAnimFrame(anim);
            plane.render(event.dir, v);
            gameBg.render(v);
            gameFloor.render(v);

            if (crashTest(plane.getPlanePox(), gameFloor.getFlorrPos(plane.getPlanePosYArea()))) {
                event.gameOver = true;
            }
        }
    }
    anim();
    function crashTest(r1, r2) {
        return !(r2.x > (r1.x + r1.w) ||
                   (r2.x + r2.w) < r1.x ||
                   r2.y > (r1.y + r1.h) ||
                   (r2.y + r2.h) < r1.y);
    }
    return {
       
    };
})();