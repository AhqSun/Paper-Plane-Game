var gameFloor = (function () {
    var floorLeftSmallUrl = "img/left_floor_1.png";
    var floorLeftBigUrl = "img/left_floor_1.png";
    var floorRightSmallUrl = "img/right_floor_1.png";
    var floorRightBigUrl = "img/right_floor_1.png";
    var smallH = 24;
    var bigH = 56;
    var w = 480;
    var os = 400;
    var floorLeft, floorLeftRepeat;
    var floorRight, floorRightRepeat;
    return {
        init: function (stage) {
            var txtureLeftSmall = new PIXI.Texture.fromImage(floorLeftSmallUrl);

            var txtureRightSmall = new PIXI.Texture.fromImage(floorRightSmallUrl);


            floorLeft = new PIXI.Sprite(txtureLeftSmall);
            floorLeft.setInteractive(false);
            floorLeft.x = -280;
            floorLeft.y = os;
            stage.addChild(floorLeft);

         
            floorLeftRepeat = new PIXI.Sprite(txtureLeftSmall);
            floorLeftRepeat.setInteractive(false);
            floorLeftRepeat.x = -280;
            floorLeftRepeat.y = 400+os;
            stage.addChild(floorLeftRepeat);


            floorRight = new PIXI.Sprite(txtureRightSmall);
            floorRight.setInteractive(false);
            floorRight.x = 270;
            floorRight.y = 200+os;
            stage.addChild(floorRight);

            floorRightRepeat = new PIXI.Sprite(txtureRightSmall);
            floorRightRepeat.setInteractive(false);
            floorRightRepeat.x = 270;
            floorRightRepeat.y = 600+os;
            stage.addChild(floorRightRepeat);

        },
        getFlorrPos: function (area) {
            var tmpFloor;
            if (!(floorLeft.y < area.min || floorLeft.y > area.max)) {
                tmpFloor = floorLeft;
            }

            if (!(floorRight.y < area.min || floorRight.y > area.max)) {
                tmpFloor = floorRight;
            }

            if (!(floorLeftRepeat.y < area.min || floorLeftRepeat.y > area.max)) {
                tmpFloor = floorLeftRepeat;
            }
            if (!(floorRightRepeat.y < area.min || floorRightRepeat.y > area.max)) {
                tmpFloor = floorRightRepeat;
            }
            if (tmpFloor) {
                return { x: tmpFloor.x, y: tmpFloor.y, w: tmpFloor.width, h: tmpFloor.height };
               
            }
            return { x: 0, y: 0, w: 0, h: 0 };
        },
        render: function (v) {
            floorLeft.y -= v.y;
            floorRight.y -= v.y;
            floorLeftRepeat.y -= v.y;
            floorRightRepeat.y -= v.y;

            if (floorLeft.y  < -smallH) {
                floorLeft.y = floorRightRepeat.y + 200;
            }
            else if (floorRight.y < -smallH) {
                floorRight.y = floorLeft.y + 200;
            }
            else if (floorLeftRepeat.y < -smallH) {
                floorLeftRepeat.y = floorRight.y + 200;
            }
            else if (floorRightRepeat.y < -smallH) {
                floorRightRepeat.y = floorLeftRepeat.y + 200;
            }
         }
    }
})();