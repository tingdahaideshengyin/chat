//代码已经完整
var game;
(function (game) {
    /** 初始化MVC controller */
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            _super.call(this);
            ///多核版本，张鹏自己添加
            //this.multitonKey = "mainGame";
        }
        var d = __define,c=StartupCommand,p=c.prototype;
        p.initializeMacroCommand = function () {
            this.addSubCommand(game.ControllerPrepCommand);
            this.addSubCommand(game.ModelPrepCommand);
            this.addSubCommand(game.ViewPrepCommand);
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    game.StartupCommand = StartupCommand;
    egret.registerClass(StartupCommand,'game.StartupCommand');
})(game || (game = {}));
//# sourceMappingURL=StartupCommand.js.map