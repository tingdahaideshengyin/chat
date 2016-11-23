//已完整
/**
 * 主界面管理器
 * 所有的弹窗都要在register注册事件
 * 在execute添加消息处理面板打开关闭事件
 */
var game;
(function (game) {
    var MainMansger = (function (_super) {
        __extends(MainMansger, _super);
        function MainMansger() {
            _super.call(this);
            //多核版本，张鹏自己添加
            this.initializeNotifier("mainGame");
        }
        var d = __define,c=MainMansger,p=c.prototype;
        /** 注册消息 */
        p.register = function () {
            this.facade().registerCommand(MainNotify.OPEN_MAIN, MainMansger);
            this.facade().registerCommand(MainNotify.CLOSE_MAIN, MainMansger);
        };
        p.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName()) {
                case MainNotify.OPEN_MAIN:
                    if (this.mainUI == null) {
                        this.mainUI = new game.MainUI();
                        panelCon.addChild(this.mainUI);
                    }
                    break;
                case MainNotify.CLOSE_MAIN:
                    if (this.mainUI != null) {
                        panelCon.removeChild(this.mainUI);
                        this.mainUI = null;
                    }
                    break;
            }
        };
        MainMansger.NAME = "MainManager";
        return MainMansger;
    }(puremvc.SimpleCommand));
    game.MainMansger = MainMansger;
    egret.registerClass(MainMansger,'game.MainMansger',["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=MainMansger.js.map