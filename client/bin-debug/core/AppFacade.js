var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade(key) {
            _super.call(this, key);
        }
        var d = __define,c=AppFacade,p=c.prototype;
        AppFacade.getInstance = function () {
            if (this.instanceMap[this._multitonKey] == null) {
                this.instanceMap[this._multitonKey] = new AppFacade(this._multitonKey);
            }
            return (this.instanceMap[this._multitonKey]);
        };
        p.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        /**
         * 启动PureMvc 在用用程序中调用此方法，并传递应用程序本身的引用
         * @param rootView
         * 		PureMvc应用程序的根视图root，包含其他所有的View Compont
         */
        p.startUp = function (rootView) {
            this.sendNotification(AppFacade.STARTUP, rootView);
            //PureMvc初始化完成，注销STARTUP命令
            this.removeCommand(AppFacade.STARTUP);
        };
        /** 多核识别标识 */
        AppFacade._multitonKey = "mainGame";
        AppFacade.STARTUP = "startup";
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
    egret.registerClass(AppFacade,'game.AppFacade',["puremvc.IFacade","puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=AppFacade.js.map