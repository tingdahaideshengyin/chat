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
    /** 注册proxy */
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            return _super.call(this) || this;
            //多核版本，张鹏自己添加
            //this.initializeNotifier("mainGame");
        }
        ModelPrepCommand.prototype.execute = function (notification) {
            //excel数据
            this.facade().registerProxy(new TemplateProxy());
            //游戏其他需要储存的数据
            this.facade().registerProxy(new GameProxy());
            //游戏登陆数据
            this.facade().registerProxy(new LoginProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    game.ModelPrepCommand = ModelPrepCommand;
    __reflect(ModelPrepCommand.prototype, "game.ModelPrepCommand", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ModelPrepCommand.js.map