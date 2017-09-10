var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var otherScene_control = (function (_super) {
    __extends(otherScene_control, _super);
    function otherScene_control() {
        return _super.call(this) || this;
    }
    otherScene_control.prototype.eventHandler = function (msg) {
        switch (msg) {
            case "gotoHome": {
                mvc.gameManager.getInstance().changeScene("homeScene");
                break;
            }
        }
    };
    return otherScene_control;
}(mvc.control));
__reflect(otherScene_control.prototype, "otherScene_control");
//# sourceMappingURL=otherScene_control.js.map