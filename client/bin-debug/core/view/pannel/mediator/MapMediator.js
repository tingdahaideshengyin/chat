//代码已经完整
var game;
(function (game) {
    var MapMediator = (function (_super) {
        __extends(MapMediator, _super);
        function MapMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, MapMediator.NAME, viewComponent);
            //收到消息
            this.mapPanel = new game.MapPanel();
        }
        var d = __define,c=MapMediator,p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MAP,
                PanelNotify.CLOSE_MAP
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_MAP:
                    //显示角色面板
                    this.showUI(this.mapPanel, false, 0, 0, 5);
                    break;
                case PanelNotify.CLOSE_MAP:
                    this.closePanel(1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        p.initUI = function () {
            //关闭按钮
            this.mapPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            //其他按钮
            this.mapPanel.btn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn0Touch, this);
            this.mapPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn1Touch, this);
            this.mapPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn2Touch, this);
            this.mapPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn3Touch, this);
            this.mapPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn4Touch, this);
            this.mapPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn5Touch, this);
            //图片 Tips 特效
            TipsManager.addTips(this.mapPanel.img0, "没有动画Tips", 0);
            TipsManager.addTips(this.mapPanel.img1, "从下到上逐现", 1);
            TipsManager.addTips(this.mapPanel.img2, "从左到右", 2);
            TipsManager.addTips(this.mapPanel.img3, "从右到左", 3);
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
        //按钮Tips特效
        p.onBtn0Touch = function (evt) {
            EffectUtils.showTips("从下到上弹出", 1);
        };
        p.onBtn1Touch = function (evt) {
            EffectUtils.showTips("从左到右弹出", 2);
        };
        p.onBtn2Touch = function (evt) {
            EffectUtils.showTips("从右到左弹出", 3);
        };
        p.onBtn3Touch = function (evt) {
            EffectUtils.showTips("从中间弹出逐渐消失", 4);
        };
        p.onBtn4Touch = function (evt) {
            EffectUtils.showTips("从大变小", 5);
        };
        p.onBtn5Touch = function (evt) {
            EffectUtils.showTips("警告字体颜色", 5, true);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        MapMediator.NAME = "MapMediator";
        return MapMediator;
    }(BaseMediator));
    game.MapMediator = MapMediator;
    egret.registerClass(MapMediator,'game.MapMediator');
})(game || (game = {}));
//# sourceMappingURL=MapMediator.js.map