//代码已经完整
//IMediator
//INotifier
//INotification
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Notifier
var puremvc;
(function (puremvc) {
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(mediatorName, viewComponent) {
            if (mediatorName === void 0) { mediatorName = null; }
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this) || this;
            _this.mediatorName = null;
            _this.viewComponent = null;
            _this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
            _this.viewComponent = viewComponent;
            return _this;
        }
        Mediator.prototype.getMediatorName = function () {
            return this.mediatorName;
        };
        Mediator.prototype.getViewComponent = function () {
            return this.viewComponent;
        };
        Mediator.prototype.setViewComponent = function (viewComponent) {
            this.viewComponent = viewComponent;
        };
        Mediator.prototype.listNotificationInterests = function () {
            return new Array();
        };
        Mediator.prototype.handleNotification = function (notification) {
        };
        Mediator.prototype.onRegister = function () {
        };
        Mediator.prototype.onRemove = function () {
        };
        return Mediator;
    }(puremvc.Notifier));
    Mediator.NAME = "Mediator";
    puremvc.Mediator = Mediator;
    __reflect(Mediator.prototype, "puremvc.Mediator", ["puremvc.IMediator"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Mediator.js.map