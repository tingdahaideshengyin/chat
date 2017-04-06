var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            var _this = _super.call(this) || this;
            //多核版本，张鹏自己添加
            _this.initializeNotifier("mainGame");
            return _this;
        }
        /** 注册消息 */
        MainMansger.prototype.register = function () {
            this.facade().registerCommand(MainNotify.OPEN_MAIN, MainMansger);
            this.facade().registerCommand(MainNotify.CLOSE_MAIN, MainMansger);
        };
        MainMansger.prototype.execute = function (notification) {
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
        return MainMansger;
    }(puremvc.SimpleCommand));
    MainMansger.NAME = "MainManager";
    game.MainMansger = MainMansger;
    __reflect(MainMansger.prototype, "game.MainMansger", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=MainMansger.js.map