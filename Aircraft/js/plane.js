/// <reference path="../jslib/pixi.dev.js" />
var plane = (function () {
    var planeUrl = "img/plane48x36.png";
    var plane;
    var lastDir;
    var w = 48;
    var h=36;
    return {
        render: function (dir,v) {
            plane.x += v.x;           
            if (plane.x < 0) {
                plane.x = 0;
                v.y = 16;
                dir = 3;
            }
            if (plane.x > 480-w) {
                plane.x = 480-w;
                v.y = 16;
                dir =3;
            }
            if (lastDir !== dir) {
                lastDir = dir;
                plane.texture.setFrame(new PIXI.Rectangle(dir * w, 0, w, h));
            }
        },
        getPlanePox: function () {
            return { x: plane.x+12, y: plane.y, w: w-12, h: h-12 };
        },
        getPlanePosYArea: function () {
            return { min: 80, max: 80 + h };
        },
        init: function (stage) {
            var baseTexture = PIXI.BaseTexture.fromImage(planeUrl);
            var texture = new PIXI.Texture(baseTexture);
            texture.baseTexture.width = 336;
            texture.baseTexture.height = 36;
            texture.setFrame(new PIXI.Rectangle(0, 0, 48, h));
            plane = new PIXI.Sprite(texture);
            
            plane.x = 480 / 2;
            plane.y = 80;
            stage.addChild(plane);


        }
    }
})();