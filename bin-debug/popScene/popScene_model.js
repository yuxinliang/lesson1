var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var popScene_model = (function (_super) {
    __extends(popScene_model, _super);
    function popScene_model() {
        return _super.call(this) || this;
    }
    return popScene_model;
}(mvc.model));
__reflect(popScene_model.prototype, "popScene_model");
//# sourceMappingURL=popScene_model.js.map