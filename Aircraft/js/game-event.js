var gameEvent = (function () {
    var leftPress = false;
    var rightPress = false;
    var e;
    var self;
    return {
        doEvent: function (event) {
            if (leftPress && event.dir < 6) {
                event.dir += 1;
            }
            if (rightPress && event.dir > 0) {
                event.dir -= 1;
            }
        },
        tick: function () {
            self.doEvent(e);
            setTimeout(function () {
                self.tick();
            }, 55);
        },
        init: function (event) {
            self = this;
            e = event;
            this.tick();           
            document.onkeyup = function (e) {
                if (e.keyCode === 37) {
                    leftPress = false;
                }
                else if (e.keyCode === 39) {
                    rightPress = false;
                }
            }
            document.onkeydown = function (e) {
                if (e.keyCode === 37) {//left arrow
                    leftPress = true;
                }
                else if (e.keyCode === 39) {//right arrow
                    rightPress = true;
                }
            };
        }
    }
})();