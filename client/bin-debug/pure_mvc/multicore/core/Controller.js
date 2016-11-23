//已完整
//IController
//IView
//INotification
//ICommand
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
        var d = __define,c=Controller,p=c.prototype;
        p.initializeController = function () {
            this.view = puremvc.View.getInstance(this.multitonKey);
        };
        p.executeCommand = function (notification) {
            var commandClassRef = this.commandMap[notification.getName()];
            //notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
            //commandClassRef = game.StartupCommand
            if (commandClassRef) {
                var command = new commandClassRef();
                command.initializeNotifier(this.multitonKey);
                command.execute(notification);
            }
        };
        p.registerCommand = function (notificationName, commandCkassRef) {
            //notificationName = AppFacade.STARTUP
            //commandCkassRef = game.StartupCommand
            if (!this.commandMap[notificationName]) {
                this.view.registerObserver(notificationName, new puremvc.Observer(this.executeCommand, this));
                this.commandMap[notificationName] = commandCkassRef;
            }
        };
        p.hasCommand = function (notificationName) {
            return this.commandMap[notificationName] != null;
        };
        p.removeCommand = function (notificationName) {
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
        Controller.instanceMap = {}; //多核版本
        Controller.MULTITON_MSG = "Controller instance for this multiton key already constructed !";
        return Controller;
    }());
    puremvc.Controller = Controller;
    egret.registerClass(Controller,'puremvc.Controller',["puremvc.IController"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Controller.js.map