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
    var ZhaoXianMediator = (function (_super) {
        __extends(ZhaoXianMediator, _super);
        function ZhaoXianMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, ZhaoXianMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.zhaoXian = new game.ZhaoXian();
            return _this;
        }
        //重写消息列表
        ZhaoXianMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ZHAOXIAN,
                PanelNotify.CLOSE_ZHAOXIAN
            ];
        };
        ZhaoXianMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_ZHAOXIAN:
                    //显示角色面板
                    this.showUI(this.zhaoXian, false, 0, 0, 5);
                    break;
                case PanelNotify.CLOSE_ZHAOXIAN:
                    this.closePanel(1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        ZhaoXianMediator.prototype.initUI = function () {
            //关闭按钮
            this.zhaoXian.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.menuBtn = new ImageButton(this, "yellowBtn_png", this.onMenuBtnTouch, "按钮特效1", 30, 1, null);
            this.menuBtn.x = -300;
            this.menuBtn.y = 300;
            this.zhaoXian.addChild(this.menuBtn);
            this.setBtn = new ImageButton(this, "yellowBtn_png", this.onSetBtnTouch, "按钮特效2", 30, 2, null);
            this.setBtn.x = -300;
            this.setBtn.y = 400;
            this.zhaoXian.addChild(this.setBtn);
            this.buttonBtn = new ImageButton(this, "yellowBtn_png", this.onButtonBtnTouch, "按钮特效3", 30, 3, null);
            this.buttonBtn.x = -300;
            this.buttonBtn.y = 500;
            this.zhaoXian.addChild(this.buttonBtn);
            this.initEffect();
        };
        ZhaoXianMediator.prototype.initEffect = function () {
            //var effect1:Function = function(){
            //egret.Tween.get(this.menuBtn).to({x:(this.w/2 - this.menuBtn.width/2)}, 600, egret.Ease.backOut);
            //};
            //egret.setTimeout(effect1, this, 150*1);
            egret.setTimeout(function () { egret.Tween.get(this.menuBtn).to({ x: (this.w / 2 - this.menuBtn.width / 2) }, 600, egret.Ease.backOut); }, this, 150 * 1);
            //var effect2:Function = function(){
            //egret.Tween.get(this.setBtn).to({x:(this.w/2 - this.menuBtn.width/2)}, 600, egret.Ease.backOut);
            //};
            //egret.setTimeout(effect2, this, 150*2);
            egret.setTimeout(function () { egret.Tween.get(this.setBtn).to({ x: (this.w / 2 - this.menuBtn.width / 2) }, 600, egret.Ease.backOut); }, this, 150 * 2);
            //var effect3:Function = function(){
            //egret.Tween.get(this.buttonBtn).to({x:(this.w/2 - this.menuBtn.width/2)}, 600, egret.Ease.backOut);
            //};
            //egret.setTimeout(effect3, this, 150*3);
            egret.setTimeout(function () { egret.Tween.get(this.buttonBtn).to({ x: (this.w / 2 - this.menuBtn.width / 2) }, 600, egret.Ease.backOut); }, this, 150 * 3);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        ZhaoXianMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
        };
        ZhaoXianMediator.prototype.onMenuBtnTouch = function (evt) {
        };
        ZhaoXianMediator.prototype.onSetBtnTouch = function (evt) {
        };
        ZhaoXianMediator.prototype.onButtonBtnTouch = function (evt) {
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        ZhaoXianMediator.prototype.ininData = function () {
        };
        return ZhaoXianMediator;
    }(BaseMediator));
    ZhaoXianMediator.NAME = "ZhaoXianMediator";
    game.ZhaoXianMediator = ZhaoXianMediator;
    __reflect(ZhaoXianMediator.prototype, "game.ZhaoXianMediator");
})(game || (game = {}));
//# sourceMappingURL=ZhaoXianMediator.js.map