var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var otherScene_view = (function (_super) {
    __extends(otherScene_view, _super);
    function otherScene_view() {
        var _this = _super.call(this) || this;
        _this.skinName = otherSceneSkin;
        return _this;
    }
    otherScene_view.prototype.create = function () {
        var self = this;
        this.title.text = this._data.title;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            self._control.eventHandler("gotoHome");
        }, this);
    };
    return otherScene_view;
}(mvc.view));
__reflect(otherScene_view.prototype, "otherScene_view");
//# sourceMappingURL=otherScene_view.js.map