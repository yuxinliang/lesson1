var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mvc;
(function (mvc) {
    var gameManager = (function () {
        function gameManager() {
            this.ctlStack = [];
        }
        gameManager.getInstance = function () {
            if (!gameManager.gmanager) {
                gameManager.gmanager = new gameManager();
            }
            return gameManager.gmanager;
        };
        gameManager.prototype.open = function (modulelName) {
            var ctl = eval("new " + modulelName + "_control();");
            ctl._create(modulelName);
            if (ctl.vtype == 1 && gameManager.currentControl) {
                gameManager.currentControl.release();
                gameManager.currentControl = ctl;
                for (var i = 0; i < this.ctlStack.length; i++) {
                    this.ctlStack[i].release();
                }
                this.ctlStack.length = 0;
            }
            else {
                //放到一个堆里
                this.ctlStack.push(ctl);
            }
        };
        gameManager.prototype.closeScene = function (ctl) {
            if (ctl.vtype != 1) {
                var len = this.ctlStack.length;
                for (var i = 0; i < len; i++) {
                    if (this.ctlStack[i].cname == ctl.cname) {
                        ctl.release();
                        this.ctlStack.splice(i, 1);
                        break;
                    }
                }
            }
        };
        gameManager.prototype.changeScene = function (modulelName) {
            if (gameManager.currentControl) {
                gameManager.currentControl.release();
            }
            var ctl = eval("new " + modulelName + "_control();");
            ctl._create(modulelName);
            gameManager.currentControl = ctl;
        };
        return gameManager;
    }());
    mvc.gameManager = gameManager;
    __reflect(gameManager.prototype, "mvc.gameManager");
})(mvc || (mvc = {}));
//# sourceMappingURL=gameManager.js.map