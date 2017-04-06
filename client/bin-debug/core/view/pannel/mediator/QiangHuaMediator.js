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
    var QiangHuaMediator = (function (_super) {
        __extends(QiangHuaMediator, _super);
        function QiangHuaMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, QiangHuaMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.qiangHuaPanel = new game.QiangHuaPanel();
            return _this;
        }
        //重写消息列表
        QiangHuaMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_QIANGHUA,
                PanelNotify.CLOSE_QIANGHUA,
                SysNotify.CONNECT_SERVER_SUCCESS,
                UserInfoNotify.UPDATE_DATA
            ];
        };
        QiangHuaMediator.prototype.handleNotification = function (notification) {
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
        QiangHuaMediator.prototype.initUI = function () {
            //关闭按钮
            this.qiangHuaPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.qiangHuaPanel.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendMessage, this);
            this.qiangHuaPanel.loadBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.connectServer, this);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        QiangHuaMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        QiangHuaMediator.prototype.sendMessage = function (evt) {
            UserInfoRequest.sendUserInfo(Number(this.qiangHuaPanel.idInputText.text), this.qiangHuaPanel.nameInputText.text);
        };
        QiangHuaMediator.prototype.connectServer = function (evt) {
            SocketManager.connectServer("echo.websocket.org", 80);
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        QiangHuaMediator.prototype.ininData = function () {
        };
        return QiangHuaMediator;
    }(BaseMediator));
    QiangHuaMediator.NAME = "QiangHuaMediator";
    game.QiangHuaMediator = QiangHuaMediator;
    __reflect(QiangHuaMediator.prototype, "game.QiangHuaMediator");
})(game || (game = {}));
//# sourceMappingURL=QiangHuaMediator.js.map