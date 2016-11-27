var game;
(function (game) {
    var MessagePanelMediator = (function (_super) {
        __extends(MessagePanelMediator, _super);
        function MessagePanelMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            _super.call(this, MessagePanelMediator.NAME, viewComponet);
            //重写消息处理
            this.messagePanel = new game.MessagePanel();
        }
        var d = __define,c=MessagePanelMediator,p=c.prototype;
        //重写消息列表
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MESSAGE,
                PanelNotify.CLOSE_MESSAGE
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_MESSAGE:
                    //显示角色面板
                    this.showUI(this.messagePanel, false, 0, 0, 1);
                    break;
                case PanelNotify.CLOSE_MESSAGE:
                    this.closePanel(1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        p.initUI = function () {
            //关闭按钮
            this.messagePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
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
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        MessagePanelMediator.NAME = "MessagePanelMediator";
        return MessagePanelMediator;
    }(BaseMediator));
    game.MessagePanelMediator = MessagePanelMediator;
    egret.registerClass(MessagePanelMediator,'game.MessagePanelMediator');
})(game || (game = {}));
//# sourceMappingURL=MessagePanelMediator.js.map