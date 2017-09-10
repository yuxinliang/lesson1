var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mvc;
(function (mvc) {
    var view = (function (_super) {
        __extends(view, _super);
        function view() {
            return _super.call(this) || this;
        }
        //框架创建调用
        view.prototype._create = function (data, control) {
            this._data = data;
            this._control = control;
            this.create();
        };
        //留给子类继承
        view.prototype.create = function () {
        };
        view.prototype.release = function () {
        };
        return view;
    }(eui.Component));
    mvc.view = view;
    __reflect(view.prototype, "mvc.view");
})(mvc || (mvc = {}));
//# sourceMappingURL=view.js.map