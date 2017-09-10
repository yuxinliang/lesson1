var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var popScene_control = (function (_super) {
    __extends(popScene_control, _super);
    function popScene_control() {
        return _super.call(this) || this;
    }
    popScene_control.prototype.eventHandler = function (msg) {
        switch (msg) {
            case "goback": {
                mvc.gameManager.getInstance().closeScene(this);
                break;
            }
        }
    };
    return popScene_control;
}(mvc.popControl));
__reflect(popScene_control.prototype, "popScene_control");
//# sourceMappingURL=popScene_control.js.map