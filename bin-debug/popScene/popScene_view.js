var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var popScene_view = (function (_super) {
    __extends(popScene_view, _super);
    function popScene_view() {
        var _this = _super.call(this) || this;
        _this.skinName = popSceneSkin;
        return _this;
    }
    popScene_view.prototype.create = function () {
        var self = this;
        this.title.text = this._data.title;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            self._control.eventHandler("goback");
        }, this);
    };
    return popScene_view;
}(mvc.view));
__reflect(popScene_view.prototype, "popScene_view");
//# sourceMappingURL=popScene_view.js.map