var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            var _this = _super.call(this) || this;
            //多核版本，张鹏自己添加
            _this.initializeNotifier("mainGame");
            return _this;
        }
        /** 注册消息 */
        SceneManager.prototype.register = function () {
            this.facade().registerCommand(SceneNotify.OPEN_HOME, SceneManager);
            this.facade().registerCommand(SceneNotify.CLOSE_HOME, SceneManager);
        };
        SceneManager.prototype.execute = function (notification) {
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
        return SceneManager;
    }(puremvc.SimpleCommand));
    //private mainUI:game.MainUI;
    SceneManager.NAME = "SceneManager";
    game.SceneManager = SceneManager;
    __reflect(SceneManager.prototype, "game.SceneManager", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=SceneManager.js.map