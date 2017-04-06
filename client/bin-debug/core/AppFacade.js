var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade(key) {
            return _super.call(this, key) || this;
        }
        AppFacade.getInstance = function () {
            if (this.instanceMap[this._multitonKey] == null) {
                this.instanceMap[this._multitonKey] = new AppFacade(this._multitonKey);
            }
            return (this.instanceMap[this._multitonKey]);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        /**
         * 启动PureMvc 在用用程序中调用此方法，并传递应用程序本身的引用
         * @param rootView
         * 		PureMvc应用程序的根视图root，包含其他所有的View Compont
         */
        AppFacade.prototype.startUp = function (rootView) {
            this.sendNotification(AppFacade.STARTUP, rootView);
            //PureMvc初始化完成，注销STARTUP命令
            this.removeCommand(AppFacade.STARTUP);
        };
        return AppFacade;
    }(puremvc.Facade));
    /** 多核识别标识 */
    AppFacade._multitonKey = "mainGame";
    AppFacade.STARTUP = "startup";
    game.AppFacade = AppFacade;
    __reflect(AppFacade.prototype, "game.AppFacade");
})(game || (game = {}));
//# sourceMappingURL=AppFacade.js.map