//代码已完整
//INotifier
//IFacade
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//Facade
//相当于事件发送者，继承该类，即可发送Notification事件
//事件必须通过 Facade 实例对象来发送
var puremvc;
(function (puremvc) {
    var Notifier = (function () {
        function Notifier() {
            this.multitonKey = null;
        }
        Notifier.prototype.initializeNotifier = function (key) {
            this.multitonKey = key;
        };
        //？表示可选参数，可不填写
        Notifier.prototype.sendNotification = function (name, body, type) {
            if (this.facade()) {
                this.facade().sendNotification(name, body, type);
            }
        };
        Notifier.prototype.facade = function () {
            if (this.multitonKey == null) {
                throw Error(Notifier.MULTITON_MSG);
            }
            return puremvc.Facade.getInstance(this.multitonKey);
        };
        return Notifier;
    }());
    Notifier.MULTITON_MSG = "multitonKey for this INotifier not yet initialized !";
    puremvc.Notifier = Notifier;
    __reflect(Notifier.prototype, "puremvc.Notifier", ["puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Notifier.js.map