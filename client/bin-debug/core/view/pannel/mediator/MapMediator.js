//代码已经完整
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
    var MapMediator = (function (_super) {
        __extends(MapMediator, _super);
        function MapMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, MapMediator.NAME, viewComponent) || this;
            //收到消息
            _this.mapPanel = new game.MapPanel();
            return _this;
        }
        MapMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MAP,
                PanelNotify.CLOSE_MAP
            ];
        };
        MapMediator.prototype.handleNotification = function (notification) {
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
        MapMediator.prototype.initUI = function () {
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
        MapMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
        };
        //按钮Tips特效
        MapMediator.prototype.onBtn0Touch = function (evt) {
            EffectUtils.showTips("从下到上弹出", 1);
        };
        MapMediator.prototype.onBtn1Touch = function (evt) {
            EffectUtils.showTips("从左到右弹出", 2);
        };
        MapMediator.prototype.onBtn2Touch = function (evt) {
            EffectUtils.showTips("从右到左弹出", 3);
        };
        MapMediator.prototype.onBtn3Touch = function (evt) {
            EffectUtils.showTips("从中间弹出逐渐消失", 4);
        };
        MapMediator.prototype.onBtn4Touch = function (evt) {
            EffectUtils.showTips("从大变小", 5);
        };
        MapMediator.prototype.onBtn5Touch = function (evt) {
            EffectUtils.showTips("警告字体颜色", 5, true);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        MapMediator.prototype.ininData = function () {
        };
        return MapMediator;
    }(BaseMediator));
    MapMediator.NAME = "MapMediator";
    game.MapMediator = MapMediator;
    __reflect(MapMediator.prototype, "game.MapMediator");
})(game || (game = {}));
//# sourceMappingURL=MapMediator.js.map