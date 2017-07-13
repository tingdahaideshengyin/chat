//代码已完整
//IView
//IObserver
//IMediator
//INotification
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var puremvc;
(function (puremvc) {
    var View = (function () {
        function View(key) {
            /**
             * Mapping of <code>Medittor</code> names to <code>Medittor</code> instances.
             *
             * @protected
             */
            this.mediatorMap = null;
            /**
             * Mapping of <code>NOtification</code> names to <code>Observers</code> lists.
             *
             * @protected
             */
            this.observerMap = null;
            /**
             * Multiton key for this <code>View</code> instance.
             *
             * @protected
             */
            this.multitonKey = null;
            if (View.instanceMap[key]) {
                throw Error(View.MULTITON_MSG);
            }
            View.instanceMap[key] = this;
            this.multitonKey = key;
            this.mediatorMap = {};
            this.observerMap = {};
            this.initializeView();
        }
        View.prototype.initializeView = function () {
        };
        /**
         * 注册1个观察者对象 notificationName 消息名字  observer 观察泽对象
         *
         * @param notificationName
         * 			消息名字
         *
         * @param observer
         * 			观察泽对象
         */
        View.prototype.registerObserver = function (notificationName, observer) {
            //notificationName = AppFacade.STARTUP
            //observer = new Observer(Controller.executeCommand,Controller)
            var obervers = this.observerMap[notificationName];
            if (obervers) {
                obervers.push(observer);
            }
            else {
                this.observerMap[notificationName] = [observer];
            }
        };
        View.prototype.removeObserver = function (notificationName, notifyContext) {
            var observers = this.observerMap[notificationName];
            var i = observers.length;
            while (i--) {
                var observer = observers[i];
                if (observer.compareNotifyContext(notifyContext)) {
                    observers.splice(i, 1);
                    break;
                }
            }
            if (observers.length == 0) {
                delete this.observerMap[notificationName];
            }
        };
        /**
         * 将消息，通知给观察者 Observers 对象
         */
        View.prototype.notifyObservers = function (notification) {
            var notificationName = notification.getName();
            var observersRef = this.observerMap[notificationName];
            //notificationName = AppFacade.STARTUP
            //observersRef = new Observer(Controller.executeCommand,Controller)
            if (observersRef) {
                var observers = observersRef.slice(0);
                var len = observers.length;
                for (var i = 0; i < len; i++) {
                    var observer = observers[i];
                    observer.notifyObserver(notification);
                }
            }
        };
        View.prototype.registerMediator = function (mediator) {
            var name = mediator.getMediatorName();
            if (this.mediatorMap[name]) {
                return;
            }
            mediator.initializeNotifier(this.multitonKey);
            this.mediatorMap[name] = mediator;
            var interests = mediator.listNotificationInterests();
            var len = interests.length;
            if (len > 0) {
                var observer = new puremvc.Observer(mediator.handleNotification, mediator);
                for (var i = 0; i < len; i++) {
                    this.registerObserver(interests[i], observer);
                }
            }
            mediator.onRegister();
        };
        View.prototype.retrieveMediator = function (mediatorName) {
            return this.mediatorMap[mediatorName] || null;
        };
        View.prototype.removeMediator = function (mediatorNmae) {
            var mediator = this.mediatorMap[mediatorNmae];
            if (mediator) {
                return null;
            }
            var interests = mediator.listNotificationInterests();
            var i = interests.length;
            while (i--) {
                this.removeObserver(interests[i], mediator);
            }
            delete this.mediatorMap[mediatorNmae];
            mediator.onRemove();
            return mediator;
        };
        View.prototype.hasMediator = function (mediatorName) {
            return this.mediatorMap[mediatorName] != null;
        };
        View.getInstance = function (key) {
            if (!View.instanceMap[key]) {
                View.instanceMap[key] = new View(key);
            }
            return View.instanceMap[key];
        };
        View.removeView = function (key) {
            delete View.instanceMap[key];
        };
        return View;
    }());
    View.instanceMap = {};
    View.MULTITON_MSG = "View instance for this multiton key already constructed !";
    puremvc.View = View;
    __reflect(View.prototype, "puremvc.View", ["puremvc.IView"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=View.js.map