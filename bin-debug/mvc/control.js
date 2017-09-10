var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mvc;
(function (mvc) {
    var control = (function () {
        function control() {
            this._vtype = 1;
        }
        control.prototype._create = function (modelName) {
            this._cname = modelName;
            var self = this;
            var stage = egret.MainContext.instance.stage;
            this._model = eval("new " + modelName + "_model();");
            this._model._create(modelName, function (data) {
                self._view = eval("new " + modelName + "_view();");
                self._view._create(data, self);
                stage.addChild(self._view);
            });
        };
        control.prototype.create = function () {
        };
        control.prototype.eventHandler = function (msg) {
        };
        control.prototype.release = function () {
            if (this._view && this._view.parent) {
                this._view.parent.removeChild(this._view);
            }
            this._model.release();
            this._view.release();
        };
        Object.defineProperty(control.prototype, "vtype", {
            get: function () {
                return this._vtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(control.prototype, "cname", {
            get: function () {
                return this._cname;
            },
            enumerable: true,
            configurable: true
        });
        return control;
    }());
    mvc.control = control;
    __reflect(control.prototype, "mvc.control");
})(mvc || (mvc = {}));
//# sourceMappingURL=control.js.map