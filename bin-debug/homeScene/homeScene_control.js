var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var homeScene_control = (function (_super) {
    __extends(homeScene_control, _super);
    function homeScene_control() {
        return _super.call(this) || this;
    }
    homeScene_control.prototype.eventHandler = function (msg) {
        switch (msg) {
            case "changeScene": {
                mvc.gameManager.getInstance().changeScene("otherScene");
                break;
            }
            case "popScene": {
                mvc.gameManager.getInstance().open("popScene");
                break;
            }
        }
    };
    return homeScene_control;
}(mvc.control));
__reflect(homeScene_control.prototype, "homeScene_control");
//# sourceMappingURL=homeScene_control.js.map