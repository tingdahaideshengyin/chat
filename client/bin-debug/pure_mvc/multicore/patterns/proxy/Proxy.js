//代码已完整
//IProxy
//INotifier
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Notifier
var puremvc;
(function (puremvc) {
    var Proxy = (function (_super) {
        __extends(Proxy, _super);
        function Proxy(proxyName, data) {
            if (proxyName === void 0) { proxyName = null; }
            if (data === void 0) { data = null; }
            var _this = _super.call(this) || this;
            _this.proxyName = null;
            _this.data = null;
            _this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;
            if (data != null) {
                _this.setData(data);
            }
            return _this;
        }
        Proxy.prototype.getProxyName = function () {
            return this.proxyName;
        };
        Proxy.prototype.setData = function (data) {
            this.data = data;
        };
        Proxy.prototype.getData = function () {
            return this.data;
        };
        Proxy.prototype.onRegister = function () {
        };
        Proxy.prototype.onRemove = function () {
        };
        return Proxy;
    }(puremvc.Notifier));
    Proxy.NAME = "Proxy";
    puremvc.Proxy = Proxy;
    __reflect(Proxy.prototype, "puremvc.Proxy", ["puremvc.IProxy"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Proxy.js.map