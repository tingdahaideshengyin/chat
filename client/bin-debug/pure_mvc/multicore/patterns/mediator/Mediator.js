//代码已经完整
//IMediator
//INotifier
//INotification
//Notifier
var puremvc;
(function (puremvc) {
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(mediatorName, viewComponent) {
            if (mediatorName === void 0) { mediatorName = null; }
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this);
            this.mediatorName = null;
            this.viewComponent = null;
            this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
            this.viewComponent = viewComponent;
        }
        var d = __define,c=Mediator,p=c.prototype;
        p.getMediatorName = function () {
            return this.mediatorName;
        };
        p.getViewComponent = function () {
            return this.viewComponent;
        };
        p.setViewComponent = function (viewComponent) {
            this.viewComponent = viewComponent;
        };
        p.listNotificationInterests = function () {
            return new Array();
        };
        p.handleNotification = function (notification) {
        };
        p.onRegister = function () {
        };
        p.onRemove = function () {
        };
        Mediator.NAME = "Mediator";
        return Mediator;
    }(puremvc.Notifier));
    puremvc.Mediator = Mediator;
    egret.registerClass(Mediator,'puremvc.Mediator',["puremvc.IMediator","puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Mediator.js.map