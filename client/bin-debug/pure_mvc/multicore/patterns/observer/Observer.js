//代码已完整
//INotification
//IObserver
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var puremvc;
(function (puremvc) {
    var Observer = (function () {
        function Observer(notifyMethod, notifyContext) {
            //收到消息通知后，需要执行的函数
            this.notify = null;
            //收到消息通知后，需要执行notify函数 的对象
            this.context = null;
            //notifyMethod = Controller.executeCommand
            //notifyContext = Controller
            this.setNotifyMethod(notifyMethod);
            this.setNotifyContext(notifyContext);
        }
        /** 收到消息通知后，需要执行的函数 */
        Observer.prototype.getNotifyMethod = function () {
            return this.notify;
        };
        Observer.prototype.setNotifyMethod = function (notifyMethod) {
            this.notify = notifyMethod;
        };
        /** 收到消息通知后，需要执行该函数的对象 */
        Observer.prototype.getNotifyContext = function () {
            return this.context;
        };
        Observer.prototype.setNotifyContext = function (notifyContext) {
            this.context = notifyContext;
        };
        Observer.prototype.notifyObserver = function (notification) {
            //this.getNotifyMethod() = Controller.executeCommand
            //notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
            //this.getNotifyContext() = Controller
            this.getNotifyMethod().call(this.getNotifyContext(), notification);
        };
        Observer.prototype.compareNotifyContext = function (object) {
            return object === this.context;
        };
        return Observer;
    }());
    puremvc.Observer = Observer;
    __reflect(Observer.prototype, "puremvc.Observer", ["puremvc.IObserver"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Observer.js.map