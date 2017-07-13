var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//代码已经完整
var game;
(function (game) {
    /** 注册controller */
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            return _super.call(this) || this;
            //多核版本，张鹏自己添加
            //this.initializeNotifier("mainGame");
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            (new game.SceneManager()).register();
            (new game.MainMansger()).register();
            //服务器返回command
            (new game.Processor_100_1()).register();
            //http服务器数据处理
            (new game.Processor_http_data().register());
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
    __reflect(ControllerPrepCommand.prototype, "game.ControllerPrepCommand", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ControllerPrepCommand.js.map