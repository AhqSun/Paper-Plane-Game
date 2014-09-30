/// <reference path="../jslib/pixi.dev.js" />
var gameBg = (function () {
    var block, blockRepeat, blockRepeat1;
    var sky, skyRepeat, skyRepeat1, skyRepeat2;
    var blackUrl = "img/wall480x512_black.png";
    var readUrl = "img/wall480x512_red.png";
    var skyUrl = "img/sky.jpg";
    var w = 480;
    var h = 512;
    var h1_5 = -h * 1.5;
    var skyW = 384;
    var skyH = 212;
    var skyH1_5 = -skyH * 1.5;
    return {
        render: function (v) {
            block.y -= v.y;
            blockRepeat.y -= v.y;
            blockRepeat1.y -= v.y;

            if (block.y < h1_5) {
                block.y = h + blockRepeat1.y;
            } else if (blockRepeat.y < h1_5) {
                blockRepeat.y = h + block.y;
            }
            else if (blockRepeat1.y < h1_5) {
                blockRepeat1.y = h + blockRepeat.y;
            }
          
            sky.y -= 1;
            skyRepeat.y -= 1;
            skyRepeat1.y -= 1;
            skyRepeat2.y -= 1;
            if (sky.y < skyH1_5) {
                sky.y = skyH + skyRepeat2.y;
            }
            else if (skyRepeat.y < skyH1_5) {
                skyRepeat.y = skyH + sky.y;
            }
            else if (skyRepeat1.y < skyH1_5) {
                skyRepeat1.y = skyH + skyRepeat.y;
            }
            else if (skyRepeat2.y < skyH1_5) {
                skyRepeat2.y = skyH + skyRepeat1.y;
            }  /**/
        },
        init: function (stage) {

            var textureSky = new PIXI.Texture.fromImage(skyUrl);
            sky = new PIXI.Sprite(textureSky);
            sky.setInteractive(false);
            sky.x = 48;
            stage.addChild(sky);

            skyRepeat = new PIXI.Sprite(textureSky);
            skyRepeat.setInteractive(false);
            skyRepeat.x = 48;
            skyRepeat.y = 212;
            stage.addChild(skyRepeat);

            skyRepeat1 = new PIXI.Sprite(textureSky);
            skyRepeat1.setInteractive(false);
            skyRepeat1.x = 48;
            skyRepeat1.y = 212 * 2;
            stage.addChild(skyRepeat1);

            skyRepeat2 = new PIXI.Sprite(textureSky);
            skyRepeat2.setInteractive(false);
            skyRepeat2.x = 48;
            skyRepeat2.y = 212 * 3;
            stage.addChild(skyRepeat2);


            var texture = new PIXI.Texture.fromImage(blackUrl);
            block = new PIXI.Sprite(texture);
            block.setInteractive(false);
            stage.addChild(block);

            blockRepeat = new PIXI.Sprite(texture);
            blockRepeat.setInteractive(false);
            blockRepeat.y = h;
            stage.addChild(blockRepeat);

            blockRepeat1 = new PIXI.Sprite(texture);
            blockRepeat1.setInteractive(false);
            blockRepeat1.y = 2 * h;
            stage.addChild(blockRepeat1);
        }
    }
})();