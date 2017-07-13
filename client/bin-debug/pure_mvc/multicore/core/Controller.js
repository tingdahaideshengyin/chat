//已完整
//IController
//IView
//INotification
//ICommand
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//Observer
//View
var puremvc;
(function (puremvc) {
    var Controller = (function () {
        function Controller(key) {
            this.view = null;
            this.commandMap = null;
            this.multitonKey = null;
            if (Controller.instanceMap[key]) {
                throw Error(Controller.MULTITON_MSG);
            }
            Controller.instanceMap[key] = this;
            this.multitonKey = key;
            this.commandMap = {};
            this.initializeController();
        }
        Controller.prototype.initializeController = function () {
            this.view = puremvc.View.getInstance(this.multitonKey);
        };
        Controller.prototype.executeCommand = function (notification) {
            var commandClassRef = this.commandMap[notification.getName()];
            //notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
            //commandClassRef = game.StartupCommand
            if (commandClassRef) {
                var command = new commandClassRef();
                command.initializeNotifier(this.multitonKey);
                command.execute(notification);
            }
        };
        /**
         * 注册1个command控制器，通1个notificationName 只会注册1次，且不会覆盖
         *
         * 收到 notificationName 消息后，会创建1个 commandCkassRef 对象，再由commandCkassRef执行
         *
         * @param notificationName
         *        消息发送者，以及其包含的信息名字
         *
         * @param commandClassRes
         *        收到 notificationName 消息后，由 commandClassRes 对象执行相关操作
         */
        Controller.prototype.registerCommand = function (notificationName, commandCkassRef) {
            //notificationName = AppFacade.STARTUP
            //commandCkassRef = game.StartupCommand
            if (!this.commandMap[notificationName]) {
                this.view.registerObserver(notificationName, new puremvc.Observer(this.executeCommand, this));
                this.commandMap[notificationName] = commandCkassRef;
            }
        };
        Controller.prototype.hasCommand = function (notificationName) {
            return this.commandMap[notificationName] != null;
        };
        Controller.prototype.removeCommand = function (notificationName) {
            if (this.hasCommand(notificationName)) {
                this.view.removeObserver(notificationName, this);
                delete this.commandMap[notificationName];
            }
        };
        Controller.getInstance = function (key) {
            if (!Controller.instanceMap[key]) {
                Controller.instanceMap[key] = new Controller(key);
            }
            return Controller.instanceMap[key];
        };
        Controller.removeController = function (key) {
            delete Controller.instanceMap[key];
        };
        return Controller;
    }());
    Controller.instanceMap = {}; //多核版本
    Controller.MULTITON_MSG = "Controller instance for this multiton key already constructed !";
    puremvc.Controller = Controller;
    __reflect(Controller.prototype, "puremvc.Controller", ["puremvc.IController"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Controller.js.map