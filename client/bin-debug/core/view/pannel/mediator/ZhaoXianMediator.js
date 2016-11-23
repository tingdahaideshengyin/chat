//代码已经完整
var game;
(function (game) {
    var ZhaoXianMediator = (function (_super) {
        __extends(ZhaoXianMediator, _super);
        function ZhaoXianMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            _super.call(this, ZhaoXianMediator.NAME, viewComponet);
            //重写消息处理
            this.zhaoXian = new game.ZhaoXian();
        }
        var d = __define,c=ZhaoXianMediator,p=c.prototype;
        //重写消息列表
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ZHAOXIAN,
                PanelNotify.CLOSE_ZHAOXIAN
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
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
        p.initEffect = function () {
            var effect1 = function () {
                egret.Tween.get(this.menuBtn).to({ x: (this.w / 2 - this.menuBtn.width / 2) }, 600, egret.Ease.backOut);
            };
            egret.setTimeout(effect1, this, 150 * 1);
            var effect2 = function () {
                egret.Tween.get(this.setBtn).to({ x: (this.w / 2 - this.menuBtn.width / 2) }, 600, egret.Ease.backOut);
            };
            egret.setTimeout(effect2, this, 150 * 2);
            var effect3 = function () {
                egret.Tween.get(this.buttonBtn).to({ x: (this.w / 2 - this.menuBtn.width / 2) }, 600, egret.Ease.backOut);
            };
            egret.setTimeout(effect3, this, 150 * 3);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        p.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
        };
        p.onMenuBtnTouch = function (evt) {
        };
        p.onSetBtnTouch = function (evt) {
        };
        p.onButtonBtnTouch = function (evt) {
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        ZhaoXianMediator.NAME = "ZhaoXianMediator";
        return ZhaoXianMediator;
    }(BaseMediator));
    game.ZhaoXianMediator = ZhaoXianMediator;
    egret.registerClass(ZhaoXianMediator,'game.ZhaoXianMediator');
})(game || (game = {}));
//# sourceMappingURL=ZhaoXianMediator.js.map