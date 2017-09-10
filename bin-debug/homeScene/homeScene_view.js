var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var homeScene_view = (function (_super) {
    __extends(homeScene_view, _super);
    function homeScene_view() {
        var _this = _super.call(this) || this;
        _this.skinName = homeSceneSkin;
        return _this;
    }
    homeScene_view.prototype.create = function () {
        this.title.text = this._data.title;
        var self = this;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            self._control.eventHandler("changeScene");
        }, this);
        this.popBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            self._control.eventHandler("popScene");
        }, this);
    };
    return homeScene_view;
}(mvc.view));
__reflect(homeScene_view.prototype, "homeScene_view");
//# sourceMappingURL=homeScene_view.js.map