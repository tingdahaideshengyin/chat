//代码已经完整
var game;
(function (game) {
    /** 注册controller */
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            _super.call(this);
            //多核版本，张鹏自己添加
            //this.initializeNotifier("mainGame");
        }
        var d = __define,c=ControllerPrepCommand,p=c.prototype;
        p.execute = function (notification) {
            (new game.SceneManager()).register();
            (new game.MainMansger()).register();
            //服务器返回command
            (new game.Processor_100_1()).register();
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
    egret.registerClass(ControllerPrepCommand,'game.ControllerPrepCommand',["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ControllerPrepCommand.js.map