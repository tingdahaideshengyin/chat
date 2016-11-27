var game;
(function (game) {
    var MessagePanelMediator = (function (_super) {
        __extends(MessagePanelMediator, _super);
        function MessagePanelMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            _super.call(this, MessagePanelMediator.NAME, viewComponet);
            //重写消息处理
            this.messagePanel = new game.MessagePanel();
            /*-----------------------------------------------------------------------------------------
                                                    创建消息
            -----------------------------------------------------------------------------------------*/
            //消息列表
            this.messageViewArray = [];
            //当前消息列表Y位置,初始位置=20
            this.currentYPos = 20;
            //第1次超出视域时候的数值
            this.firstDis = 0;
            //两条消息之间的间隔
            this.distance = 30;
        }
        var d = __define,c=MessagePanelMediator,p=c.prototype;
        //重写消息列表
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MESSAGE,
                PanelNotify.CLOSE_MESSAGE,
                ChartNotify.SEND_CHART_MESSAGE,
                ChartNotify.RECEIVE_CHART_MESSAGE
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_MESSAGE:
                    //显示消息面板
                    this.showUI(this.messagePanel, false, 0, 0, 1);
                    break;
                case PanelNotify.CLOSE_MESSAGE:
                    this.closePanel(1);
                    break;
                case ChartNotify.SEND_CHART_MESSAGE:
                    //发送消息
                    this.showMessageView(data);
                    break;
                case ChartNotify.RECEIVE_CHART_MESSAGE:
                    //接收到消息
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        p.initUI = function () {
            //关闭按钮
            this.messagePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.messagePanel.sendInfoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSendInfoBtnTouch, this);
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
        //发送消息按钮
        p.onSendInfoBtnTouch = function (evt) {
            var saidText = this.messagePanel.textInput.text;
            if (saidText == "") {
                EffectUtils.showTips("不能发送空消息", 5, true);
                return;
            }
            this.messagePanel.textInput.text = "";
            var playerName = this.messagePanel.nameInput.text || "游客";
            var dataJson = {
                "playerName": playerName,
                "headIconName": "head5_jpg",
                "saidText": saidText,
                "type": 0,
                "time": 0
            };
            //var data:chart.MessageData = new chart.MessageData(playerName, "", saidText, 0, 0)
            this.facade().sendNotification(ChartNotify.SEND_CHART_MESSAGE, dataJson);
        };
        p.showMessageView = function (data) {
            var playerName = data.playerName;
            var headIconName = data.headIconName;
            var saidText = data.saidText;
            var type = data.type;
            var time = data.time;
            var messageView = new chart.MessageView(playerName, headIconName, saidText, type, time);
            messageView.y = this.currentYPos;
            if (type == 0) {
                messageView.x = this.messagePanel.viewScroller.width - messageView.messageWidth - 5;
            }
            //刷新视域位置
            if (this.firstDis == 0) {
                var dis = this.currentYPos + messageView.messageHeight;
                if (dis > this.messagePanel.viewScroller.height) {
                    this.firstDis = dis - this.messagePanel.viewScroller.height;
                    this.messagePanel.viewScroller.viewport.scrollV += this.firstDis;
                }
            }
            else if (this.firstDis > 0) {
                this.messagePanel.viewScroller.viewport.scrollV += (messageView.messageHeight + this.distance);
            }
            this.messagePanel.messageGroup.addChild(messageView);
            this.currentYPos += messageView.messageHeight + this.distance;
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