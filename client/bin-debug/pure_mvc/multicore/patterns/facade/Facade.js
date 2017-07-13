//代码已完整
//IFacade
//IModel
//IView
//IController
//IProxy
//IMediator
//INotification
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
        Facade.prototype.initializeFacade = function () {
            this.initializeModel();
            this.initializeController();
            this.initializeView();
        };
        Facade.prototype.initializeModel = function () {
            if (!this.model) {
                this.model = puremvc.Model.getInstance(this.multitonKey);
            }
        };
        Facade.prototype.initializeController = function () {
            if (!this.controller) {
                this.controller = puremvc.Controller.getInstance(this.multitonKey);
            }
        };
        Facade.prototype.initializeView = function () {
            if (!this.view) {
                this.view = puremvc.View.getInstance(this.multitonKey);
            }
        };
        /**
         * 注册1个 Icommand 对象，该 Icommand 对象使用 IController 接口,
         * 收到 notificationName 消息后，由 commandClassRes 对象执行相关操作
         *
         * @param notificationName
         *        消息发送者，以及其包含的信息名字
         *
         * @param commandClassRes
         *        收到 notificationName 消息后，由 commandClassRes 对象执行相关操作
         */
        Facade.prototype.registerCommand = function (notificationName, commandClassRes) {
            //notificationName = AppFacade.STARTUP
            //commandClassRes = StartupCommand
            this.controller.registerCommand(notificationName, commandClassRes);
        };
        Facade.prototype.removeCommand = function (notificationName) {
            this.controller.removeCommand(notificationName);
        };
        Facade.prototype.hasCommand = function (notificationName) {
            return this.controller.hasCommand(notificationName);
        };
        Facade.prototype.registerProxy = function (proxy) {
            this.model.registerProxy(proxy);
        };
        Facade.prototype.retrieveProxy = function (proxyName) {
            return this.model.retrieveProxy(proxyName);
        };
        Facade.prototype.removeProxy = function (proxyName) {
            var proxy;
            if (this.model) {
                proxy = this.model.removeProxy(proxyName);
            }
            return proxy;
        };
        Facade.prototype.hasProxy = function (proxyName) {
            return this.model.hasProxy(proxyName);
        };
        Facade.prototype.registerMediator = function (mediator) {
            if (this.view) {
                this.view.registerMediator(mediator);
            }
        };
        Facade.prototype.retrieveMediator = function (mediatorName) {
            return this.view.retrieveMediator(mediatorName);
        };
        Facade.prototype.removeMediator = function (mediatorName) {
            var mediator;
            if (this.view) {
                mediator = this.view.removeMediator(mediatorName);
            }
            return mediator;
        };
        Facade.prototype.hasMediator = function (mediatorName) {
            return this.view.hasMediator(mediatorName);
        };
        /**
         * 将消息通知给view对象中得观察者
         */
        Facade.prototype.notifyObservers = function (notification) {
            if (this.view) {
                this.view.notifyObservers(notification);
            }
        };
        /**
         * 发送消息，所有的消息都是直接或者间接通过facade发送，将消息通知给view对象中得观察者。
         *
         * name 消息名字 body 消息内容 type 消息类型
         */
        Facade.prototype.sendNotification = function (name, body, type) {
            //name = AppFacade.STARTUP
            //body = GameLayerManager.gameLayer()
            this.notifyObservers(new puremvc.Notification(name, body, type));
        };
        Facade.prototype.initializeNotifier = function (key) {
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
        return Facade;
    }());
    Facade.instanceMap = {};
    Facade.MULTITON_MSG = "Facade instance for this multiton key already constructed !";
    puremvc.Facade = Facade;
    __reflect(Facade.prototype, "puremvc.Facade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Facade.js.map