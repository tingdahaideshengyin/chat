//代码已完整
//INotification
//IObserver
var puremvc;
(function (puremvc) {
    var Observer = (function () {
        function Observer(notifyMethod, notifyContext) {
            this.notify = null;
            this.context = null;
            //notifyMethod = Controller.executeCommand
            //notifyContext = Controller
            this.setNotifyMethod(notifyMethod);
            this.setNotifyContext(notifyContext);
        }
        var d = __define,c=Observer,p=c.prototype;
        p.getNotifyMethod = function () {
            return this.notify;
        };
        p.setNotifyMethod = function (notifyMethod) {
            this.notify = notifyMethod;
        };
        p.getNotifyContext = function () {
            return this.context;
        };
        p.setNotifyContext = function (notifyContext) {
            this.context = notifyContext;
        };
        p.notifyObserver = function (notification) {
            //this.getNotifyMethod() = Controller.executeCommand
            //notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
            //this.getNotifyContext() = Controller
            this.getNotifyMethod().call(this.getNotifyContext(), notification);
        };
        p.compareNotifyContext = function (object) {
            return object === this.context;
        };
        return Observer;
    }());
    puremvc.Observer = Observer;
    egret.registerClass(Observer,'puremvc.Observer',["puremvc.IObserver"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Observer.js.map