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
    var ChuangDangMediator = (function (_super) {
        __extends(ChuangDangMediator, _super);
        function ChuangDangMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ChuangDangMediator.NAME, viewComponent) || this;
            //重写消息接收处理
            //收到消息
            _this.chuangDang = new game.ChuangDang();
            return _this;
        }
        //重写面板类消息注册
        ChuangDangMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_CHUANGDANG,
                PanelNotify.CLOSE_CHUANGDANG
            ];
        };
        ChuangDangMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_CHUANGDANG:
                    //显示角色面板
                    this.showUI(this.chuangDang, false, 0, 0, Number(this.chuangDang.inputText.text));
                    break;
                case PanelNotify.CLOSE_CHUANGDANG:
                    this.closePanel(1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        ChuangDangMediator.prototype.initUI = function () {
            //关闭按钮
            this.chuangDang.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            //其他按钮
            this.chuangDang.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnTouch, this);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        ChuangDangMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        //按钮Tips特效
        ChuangDangMediator.prototype.onOkBtnTouch = function (evt) {
            //var reOpenPanel:Function = function(){
            //this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
            //this.facade().sendNotification(PanelNotify.OPEN_CHUANGDANG);//张鹏自己家的，2种方式均可关闭
            //}
            //egret.setTimeout(reOpenPanel, this, 100)
            egret.setTimeout(function () {
                this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
                //this.facade().sendNotification(PanelNotify.OPEN_CHUANGDANG);//张鹏自己家的，2种方式均可关闭
            }, this, 100);
            this.closePanel(0);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        ChuangDangMediator.prototype.ininData = function () {
        };
        return ChuangDangMediator;
    }(BaseMediator));
    ChuangDangMediator.NAME = "ChuangDangMediator";
    game.ChuangDangMediator = ChuangDangMediator;
    __reflect(ChuangDangMediator.prototype, "game.ChuangDangMediator");
})(game || (game = {}));
//# sourceMappingURL=ChuangDangMediator.js.map