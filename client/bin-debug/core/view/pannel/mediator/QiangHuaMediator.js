var game;
(function (game) {
    var QiangHuaMediator = (function (_super) {
        __extends(QiangHuaMediator, _super);
        function QiangHuaMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            _super.call(this, QiangHuaMediator.NAME, viewComponet);
            //重写消息处理
            this.qiangHuaPanel = new game.QiangHuaPanel();
        }
        var d = __define,c=QiangHuaMediator,p=c.prototype;
        //重写消息列表
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_QIANGHUA,
                PanelNotify.CLOSE_QIANGHUA,
                SysNotify.CONNECT_SERVER_SUCCESS,
                UserInfoNotify.UPDATE_DATA
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_QIANGHUA:
                    //显示角色面板
                    this.showUI(this.qiangHuaPanel, false, 0, 0, 4);
                    break;
                case PanelNotify.CLOSE_QIANGHUA:
                    this.closePanel(1);
                    break;
                case SysNotify.CONNECT_SERVER_SUCCESS:
                    this.qiangHuaPanel.showText.text += "服务器连接成功...\n";
                    break;
                case UserInfoNotify.UPDATE_DATA:
                    this.qiangHuaPanel.showText.text += "userID:" + data.getUserId() + "\nuserName:" + data.getUserName();
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        p.initUI = function () {
            //关闭按钮
            this.qiangHuaPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.qiangHuaPanel.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendMessage, this);
            this.qiangHuaPanel.loadBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.connectServer, this);
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
        p.sendMessage = function (evt) {
            UserInfoRequest.sendUserInfo(Number(this.qiangHuaPanel.idInputText.text), this.qiangHuaPanel.nameInputText.text);
        };
        p.connectServer = function (evt) {
            SocketManager.connectServer("echo.websocket.org", 80);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        QiangHuaMediator.NAME = "QiangHuaMediator";
        return QiangHuaMediator;
    }(BaseMediator));
    game.QiangHuaMediator = QiangHuaMediator;
    egret.registerClass(QiangHuaMediator,'game.QiangHuaMediator');
})(game || (game = {}));
//# sourceMappingURL=QiangHuaMediator.js.map