//已经完整
/**
 * 场景管理类
 * 所有的弹窗都需要在register注册事件
 * 在 execute添加消息处理面板打开关闭事件
 */
var game;
(function (game) {
    var SceneManager = (function (_super) {
        __extends(SceneManager, _super);
        function SceneManager() {
            _super.call(this);
            //多核版本，张鹏自己添加
            this.initializeNotifier("mainGame");
        }
        var d = __define,c=SceneManager,p=c.prototype;
        /** 注册消息 */
        p.register = function () {
            this.facade().registerCommand(SceneNotify.OPEN_HOME, SceneManager);
            this.facade().registerCommand(SceneNotify.CLOSE_HOME, SceneManager);
        };
        p.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch (notification.getName()) {
                case SceneNotify.OPEN_HOME:
                    if (this.homeCity == null) {
                        this.homeCity = new game.HomeCity();
                        panelCon.addChild(this.homeCity);
                    }
                    break;
                case SceneNotify.CLOSE_HOME:
                    if (this.homeCity != null) {
                        panelCon.removeChild(this.homeCity);
                        this.homeCity = null;
                    }
                    break;
            }
        };
        //private mainUI:game.MainUI;
        SceneManager.NAME = "SceneManager";
        return SceneManager;
    }(puremvc.SimpleCommand));
    game.SceneManager = SceneManager;
    egret.registerClass(SceneManager,'game.SceneManager',["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=SceneManager.js.map