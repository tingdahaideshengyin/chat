//代码已完整
//IProxy
//INotifier
//Notifier
var puremvc;
(function (puremvc) {
    var Proxy = (function (_super) {
        __extends(Proxy, _super);
        function Proxy(proxyName, data) {
            if (proxyName === void 0) { proxyName = null; }
            if (data === void 0) { data = null; }
            _super.call(this);
            this.proxyName = null;
            this.data = null;
            this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;
            if (data != null) {
                this.setData(data);
            }
        }
        var d = __define,c=Proxy,p=c.prototype;
        p.getProxyName = function () {
            return this.proxyName;
        };
        p.setData = function (data) {
            this.data = data;
        };
        p.getData = function () {
            return this.data;
        };
        p.onRegister = function () {
        };
        p.onRemove = function () {
        };
        Proxy.NAME = "Proxy";
        return Proxy;
    }(puremvc.Notifier));
    puremvc.Proxy = Proxy;
    egret.registerClass(Proxy,'puremvc.Proxy',["puremvc.IProxy","puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Proxy.js.map