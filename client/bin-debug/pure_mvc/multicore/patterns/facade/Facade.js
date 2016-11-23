//代码已完整
//IFacade
//IModel
//IView
//IController
//IProxy
//IMediator
//INotification
//Controller
//Model
//View
//Notification
var puremvc;
(function (puremvc) {
    var Facade = (function () {
        function Facade(key) {
            this.model = null;
            this.view = null;
            this.controller = null;
            this.multitonKey = null;
            if (Facade.instanceMap[key]) {
                throw Error(Facade.MULTITON_MSG);
            }
            //multitonKey赋值
            this.initializeNotifier(key);
            //创建单例引用
            Facade.instanceMap[key] = this;
            this.initializeFacade();
        }
        var d = __define,c=Facade,p=c.prototype;
        p.initializeFacade = function () {
            this.initializeModel();
            this.initializeController();
            this.initializeView();
        };
        p.initializeModel = function () {
            if (!this.model) {
                this.model = puremvc.Model.getInstance(this.multitonKey);
            }
        };
        p.initializeController = function () {
            if (!this.controller) {
                this.controller = puremvc.Controller.getInstance(this.multitonKey);
            }
        };
        p.initializeView = function () {
            if (!this.view) {
                this.view = puremvc.View.getInstance(this.multitonKey);
            }
        };
        p.registerCommand = function (notificationName, commandClassRes) {
            //notificationName = AppFacade.STARTUP
            //commandClassRes = StartupCommand
            this.controller.registerCommand(notificationName, commandClassRes);
        };
        p.removeCommand = function (notificationName) {
            this.controller.removeCommand(notificationName);
        };
        p.hasCommand = function (notificationName) {
            return this.controller.hasCommand(notificationName);
        };
        p.registerProxy = function (proxy) {
            this.model.registerProxy(proxy);
        };
        p.retrieveProxy = function (proxyName) {
            return this.model.retrieveProxy(proxyName);
        };
        p.removeProxy = function (proxyName) {
            var proxy;
            if (this.model) {
                proxy = this.model.removeProxy(proxyName);
            }
            return proxy;
        };
        p.hasProxy = function (proxyName) {
            return this.model.hasProxy(proxyName);
        };
        p.registerMediator = function (mediator) {
            if (this.view) {
                this.view.registerMediator(mediator);
            }
        };
        p.retrieveMediator = function (mediatorName) {
            return this.view.retrieveMediator(mediatorName);
        };
        p.removeMediator = function (mediatorName) {
            var mediator;
            if (this.view) {
                mediator = this.view.removeMediator(mediatorName);
            }
            return mediator;
        };
        p.hasMediator = function (mediatorName) {
            return this.view.hasMediator(mediatorName);
        };
        p.notifyObservers = function (notification) {
            if (this.view) {
                this.view.notifyObservers(notification);
            }
        };
        p.sendNotification = function (name, body, type) {
            //name = AppFacade.STARTUP
            //body = GameLayerManager.gameLayer()
            this.notifyObservers(new puremvc.Notification(name, body, type));
        };
        p.initializeNotifier = function (key) {
            this.multitonKey = key;
        };
        Facade.getInstance = function (key) {
            if (!Facade.instanceMap[key]) {
                Facade.instanceMap[key] = new Facade(key);
            }
            return Facade.instanceMap[key];
        };
        Facade.hasCore = function (key) {
            return Facade.instanceMap[key] ? true : false;
        };
        Facade.removeCore = function (key) {
            if (!Facade.instanceMap[key]) {
                return;
            }
            puremvc.Model.removeModel(key);
            puremvc.View.removeView(key);
            puremvc.Controller.removeController(key);
            delete Facade.instanceMap[key];
        };
        Facade.instanceMap = {};
        Facade.MULTITON_MSG = "Facade instance for this multiton key already constructed !";
        return Facade;
    }());
    puremvc.Facade = Facade;
    egret.registerClass(Facade,'puremvc.Facade',["puremvc.IFacade","puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Facade.js.map