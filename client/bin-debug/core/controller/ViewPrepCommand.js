//需要自己添加视图代码
/**
 * 注册mediator
 */
var game;
(function (game) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            _super.call(this);
            //多核版本，张鹏自己添加
            //this.initializeNotifier("mainGame");
        }
        var d = __define,c=ViewPrepCommand,p=c.prototype;
        p.execute = function (notificton) {
            var main = GameLayerManager.gameLayer().panelLayer;
            //注册各种UI面板
            //注册天下UI
            this.facade().registerMediator(new game.MapMediator());
            //注册商店UI
            this.facade().registerMediator(new game.ShopMediator());
            //注册闯荡UI
            this.facade().registerMediator(new game.ChuangDangMediator());
            //注册招贤UI
            this.facade().registerMediator(new game.ZhaoXianMediator());
            //注册背包UI
            this.facade().registerMediator(new game.BackpackMediator());
            //注册角色UI
            this.facade().registerMediator(new game.RoleMediator());
            //注册强化UI
            this.facade().registerMediator(new game.QiangHuaMediator());
            //注册消息按钮UI
            this.facade().registerMediator(new game.MessagePanelMediator());
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
    egret.registerClass(ViewPrepCommand,'game.ViewPrepCommand',["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ViewPrepCommand.js.map