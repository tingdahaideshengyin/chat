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
    var MessagePanelMediator = (function (_super) {
        __extends(MessagePanelMediator, _super);
        function MessagePanelMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, MessagePanelMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.messagePanel = new game.MessagePanel();
            /*-----------------------------------------------------------------------------------------
                                                    创建消息
            -----------------------------------------------------------------------------------------*/
            //消息列表
            _this.messageViewArray = [];
            //当前消息列表Y位置,初始位置=20
            _this.currentYPos = 20;
            //第1次超出视域时候的数值
            _this.firstDis = 0;
            //两条消息之间的间隔
            _this.distance = 30;
            return _this;
        }
        //重写消息列表
        MessagePanelMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MESSAGE,
                PanelNotify.CLOSE_MESSAGE,
                ChartNotify.SEND_CHART_MESSAGE,
                ChartNotify.RECEIVE_CHART_MESSAGE,
                SysNotify.CONNECT_SERVER_SUCCESS,
            ];
        };
        MessagePanelMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_MESSAGE:
                    //显示消息面板
                    this.showUI(this.messagePanel, false, 0, 0, 1);
                    //连接服务器
                    this.connectServer();
                    this.messagePanel.textInput.setFocus();
                    break;
                case PanelNotify.CLOSE_MESSAGE:
                    this.closePanel(1);
                    break;
                case ChartNotify.SEND_CHART_MESSAGE:
                    //发送消息
                    this.showMessageView(data, 0);
                    socketManagerNew.SocketManagerNew.sendMessage(JSON.stringify(data));
                    break;
                case ChartNotify.RECEIVE_CHART_MESSAGE:
                    //接收到消息
                    if (data == "") {
                        return;
                    }
                    var jsonObject = JSON.parse(data);
                    //var jsonObject2 = eval('(' + data + ')');
                    this.showMessageView(jsonObject, 1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        MessagePanelMediator.prototype.initUI = function () {
            //关闭按钮
            this.messagePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.messagePanel.sendInfoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSendInfoBtnTouch, this);
            //设置头像
            this.messagePanel.headICon_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setHeadIconName1, this);
            this.messagePanel.headICon_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setHeadIconName2, this);
            this.messagePanel.headICon_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setHeadIconName3, this);
            this.messagePanel.headICon_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setHeadIconName4, this);
            this.messagePanel.headICon_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setHeadIconName5, this);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        MessagePanelMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        //发送消息按钮
        MessagePanelMediator.prototype.onSendInfoBtnTouch = function (evt) {
            //重新设置焦点
            this.messagePanel.textInput.setFocus();
            var saidText = this.messagePanel.textInput.text;
            if (saidText == "") {
                EffectUtils.showTips("不能发送空消息", 5, true);
                return;
            }
            this.messagePanel.textInput.text = "";
            var playerName = this.messagePanel.nameInput.text || "游客";
            var dataJson = {
                "playerName": playerName,
                "headIconName": this.messagePanel.currentHeadIConName,
                "saidText": saidText,
                "time": 0
            };
            //var data:chart.MessageData = new chart.MessageData(playerName, "", saidText, 0, 0)
            this.facade().sendNotification(ChartNotify.SEND_CHART_MESSAGE, dataJson);
        };
        //设置头像
        MessagePanelMediator.prototype.setHeadIconName1 = function (evt) {
            this.messagePanel.currentHeadIConName = "head1_jpg";
            if (!this.messagePanel.selectImage) {
                this.messagePanel.selectImage = new egret.Bitmap(RES.getRes("chart_xuanzhong_png"));
                this.messagePanel.addChild(this.messagePanel.selectImage);
            }
            this.messagePanel.selectImage.x = this.messagePanel.headICon_1.x;
            this.messagePanel.selectImage.y = this.messagePanel.headICon_1.y;
        };
        MessagePanelMediator.prototype.setHeadIconName2 = function (evt) {
            this.messagePanel.currentHeadIConName = "head2_jpg";
            if (!this.messagePanel.selectImage) {
                this.messagePanel.selectImage = new egret.Bitmap(RES.getRes("chart_xuanzhong_png"));
                this.messagePanel.addChild(this.messagePanel.selectImage);
            }
            this.messagePanel.selectImage.x = this.messagePanel.headICon_2.x;
            this.messagePanel.selectImage.y = this.messagePanel.headICon_2.y;
        };
        MessagePanelMediator.prototype.setHeadIconName3 = function (evt) {
            this.messagePanel.currentHeadIConName = "head3_jpg";
            if (!this.messagePanel.selectImage) {
                this.messagePanel.selectImage = new egret.Bitmap(RES.getRes("chart_xuanzhong_png"));
                this.messagePanel.addChild(this.messagePanel.selectImage);
            }
            this.messagePanel.selectImage.x = this.messagePanel.headICon_3.x;
            this.messagePanel.selectImage.y = this.messagePanel.headICon_3.y;
        };
        MessagePanelMediator.prototype.setHeadIconName4 = function (evt) {
            this.messagePanel.currentHeadIConName = "head4_jpg";
            if (!this.messagePanel.selectImage) {
                this.messagePanel.selectImage = new egret.Bitmap(RES.getRes("chart_xuanzhong_png"));
                this.messagePanel.addChild(this.messagePanel.selectImage);
            }
            this.messagePanel.selectImage.x = this.messagePanel.headICon_4.x;
            this.messagePanel.selectImage.y = this.messagePanel.headICon_4.y;
        };
        MessagePanelMediator.prototype.setHeadIconName5 = function (evt) {
            this.messagePanel.currentHeadIConName = "head5_jpg";
            if (!this.messagePanel.selectImage) {
                this.messagePanel.selectImage = new egret.Bitmap(RES.getRes("chart_xuanzhong_png"));
                this.messagePanel.addChild(this.messagePanel.selectImage);
            }
            this.messagePanel.selectImage.x = this.messagePanel.headICon_5.x;
            this.messagePanel.selectImage.y = this.messagePanel.headICon_5.y;
        };
        MessagePanelMediator.prototype.showMessageView = function (data, showtType) {
            var playerName = data.playerName;
            var headIconName = data.headIconName;
            var saidText = data.saidText;
            var time = data.time;
            var messageView = new chart.MessageView(playerName, headIconName, saidText, showtType, time);
            messageView.y = this.currentYPos;
            if (showtType == 0) {
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
                                                socket通信
        -----------------------------------------------------------------------------------------*/
        MessagePanelMediator.prototype.connectServer = function () {
            socketManagerNew.SocketManagerNew.connectServer("192.168.1.188", 8888);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        MessagePanelMediator.prototype.ininData = function () {
        };
        return MessagePanelMediator;
    }(BaseMediator));
    MessagePanelMediator.NAME = "MessagePanelMediator";
    game.MessagePanelMediator = MessagePanelMediator;
    __reflect(MessagePanelMediator.prototype, "game.MessagePanelMediator");
})(game || (game = {}));
//# sourceMappingURL=MessagePanelMediator.js.map