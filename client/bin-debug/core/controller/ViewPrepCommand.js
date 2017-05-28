//需要自己添加视图代码
/**
 * 注册mediator
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            return _super.call(this) || this;
            //多核版本，张鹏自己添加
            //this.initializeNotifier("mainGame");
        }
        ViewPrepCommand.prototype.execute = function (notificton) {
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
            //注册登陆界面
            this.facade().registerMediator(new game.LonginPanelMedistor());
            //注册注册界面
            this.facade().registerMediator(new game.RegisterPanelMediator());
            //pomelo界面注册
            this.facade().registerMediator(new game.PomeloTestMediator());
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
    __reflect(ViewPrepCommand.prototype, "game.ViewPrepCommand", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ViewPrepCommand.js.map