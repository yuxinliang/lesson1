var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mySocket = (function () {
    function mySocket() {
    }
    mySocket.requestData = function (str, callback) {
        callback({ title: str });
    };
    return mySocket;
}());
__reflect(mySocket.prototype, "mySocket");
//# sourceMappingURL=mySocket.js.map