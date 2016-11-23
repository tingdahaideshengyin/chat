//代码已完整
//IView
//IObserver
//IMediator
//INotification
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
        var d = __define,c=View,p=c.prototype;
        p.initializeView = function () {
        };
        p.registerObserver = function (notificationName, observer) {
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
        p.removeObserver = function (notificationName, notifyContext) {
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
        p.notifyObservers = function (notification) {
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
        p.registerMediator = function (mediator) {
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
        p.retrieveMediator = function (mediatorName) {
            return this.mediatorMap[mediatorName] || null;
        };
        p.removeMediator = function (mediatorNmae) {
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
        p.hasMediator = function (mediatorName) {
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
        View.instanceMap = {};
        View.MULTITON_MSG = "View instance for this multiton key already constructed !";
        return View;
    }());
    puremvc.View = View;
    egret.registerClass(View,'puremvc.View',["puremvc.IView"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=View.js.map