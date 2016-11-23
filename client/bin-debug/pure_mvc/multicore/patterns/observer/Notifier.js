//代码已完整
//INotifier
//IFacade
//Facade
//相当于事件发送者，继承该类，即可发送Notification事件
//事件必须通过 Facade 实例对象来发送
var puremvc;
(function (puremvc) {
    var Notifier = (function () {
        function Notifier() {
            this.multitonKey = null;
        }
        var d = __define,c=Notifier,p=c.prototype;
        p.initializeNotifier = function (key) {
            this.multitonKey = key;
        };
        //？表示可选参数，可不填写
        p.sendNotification = function (name, body, type) {
            if (this.facade()) {
                this.facade().sendNotification(name, body, type);
            }
        };
        p.facade = function () {
            if (this.multitonKey == null) {
                throw Error(Notifier.MULTITON_MSG);
            }
            return puremvc.Facade.getInstance(this.multitonKey);
        };
        Notifier.MULTITON_MSG = "multitonKey for this INotifier not yet initialized !";
        return Notifier;
    }());
    puremvc.Notifier = Notifier;
    egret.registerClass(Notifier,'puremvc.Notifier',["puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Notifier.js.map