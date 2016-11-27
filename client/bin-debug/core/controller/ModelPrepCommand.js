//代码已经完整
var game;
(function (game) {
    /** 注册proxy */
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            _super.call(this);
            //多核版本，张鹏自己添加
            //this.initializeNotifier("mainGame");
        }
        var d = __define,c=ModelPrepCommand,p=c.prototype;
        p.execute = function (notification) {
            //excel数据
            this.facade().registerProxy(new TemplateProxy());
            //游戏其他需要储存的数据
            this.facade().registerProxy(new GameProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    game.ModelPrepCommand = ModelPrepCommand;
    egret.registerClass(ModelPrepCommand,'game.ModelPrepCommand',["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ModelPrepCommand.js.map