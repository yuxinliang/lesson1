var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mvc;
(function (mvc) {
    var model = (function () {
        function model() {
        }
        model.prototype._create = function (mname, callback) {
            this._name = mname;
            var self = this;
            mySocket.requestData(mname, function (data) {
                self._data = data;
                callback(data);
            });
        };
        model.prototype.create = function () {
        };
        model.prototype.getRequestData = function (data, callback) {
            var self = this;
            mySocket.requestData(data, function (redata) {
                self._data = redata;
                callback(redata);
            });
        };
        model.prototype.release = function () {
        };
        return model;
    }());
    mvc.model = model;
    __reflect(model.prototype, "mvc.model");
})(mvc || (mvc = {}));
//# sourceMappingURL=model.js.map