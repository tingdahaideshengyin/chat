var game;
(function (game) {
    var ChuangDangMediator = (function (_super) {
        __extends(ChuangDangMediator, _super);
        function ChuangDangMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, ChuangDangMediator.NAME, viewComponent);
            //重写消息接收处理
            //收到消息
            this.chuangDang = new game.ChuangDang();
        }
        var d = __define,c=ChuangDangMediator,p=c.prototype;
        //重写面板类消息注册
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_CHUANGDANG,
                PanelNotify.CLOSE_CHUANGDANG
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
            //关闭按钮
            this.chuangDang.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            //其他按钮
            this.chuangDang.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnTouch, this);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        p.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        //按钮Tips特效
        p.onOkBtnTouch = function (evt) {
            var reOpenPanel = function () {
                this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
                //this.facade().sendNotification(PanelNotify.OPEN_CHUANGDANG);
            };
            egret.setTimeout(reOpenPanel, this, 100);
            this.closePanel(0);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        ChuangDangMediator.NAME = "ChuangDangMediator";
        return ChuangDangMediator;
    }(BaseMediator));
    game.ChuangDangMediator = ChuangDangMediator;
    egret.registerClass(ChuangDangMediator,'game.ChuangDangMediator');
})(game || (game = {}));
//# sourceMappingURL=ChuangDangMediator.js.map