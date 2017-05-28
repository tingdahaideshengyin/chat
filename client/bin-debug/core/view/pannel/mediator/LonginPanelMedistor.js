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
    var LonginPanelMedistor = (function (_super) {
        __extends(LonginPanelMedistor, _super);
        function LonginPanelMedistor(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, LonginPanelMedistor.NAME, viewComponet) || this;
            //重写消息处理
            _this.loginPanel = new game.LonginPanel();
            return _this;
        }
        //重写消息列表
        LonginPanelMedistor.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_LOGIN,
                PanelNotify.CLOSE_LOGIN,
                LoginNotify.SEND_CHART_MESSAGE,
                LoginNotify.RECEIVE_CHART_MESSAGE
            ];
        };
        LonginPanelMedistor.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case PanelNotify.OPEN_LOGIN:
                    //显示消息面板
                    this.showUI(this.loginPanel, false, 0, 0, 1);
                    break;
                case PanelNotify.CLOSE_LOGIN:
                    //关闭消息面板
                    this.closePanel(1);
                    break;
                case LoginNotify.RECEIVE_CHART_MESSAGE:
                    //服务器返回结果
                    var data = notification.getBody();
                    if (data == "") {
                        return;
                    }
                    var jsonObject = JSON.parse(data);
                    this.checkData(jsonObject);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        LonginPanelMedistor.prototype.initUI = function () {
            //登陆按钮
            this.loginPanel.loginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendLoginMessage, this);
            //关闭按钮
            this.loginPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
        };
        //-------------------------------------------------------------------------------------------
        //发送登陆消息
        //-------------------------------------------------------------------------------------------
        LonginPanelMedistor.prototype.sendLoginMessage = function () {
            //检测用户名是否符合规范
            var name = this.loginPanel.nameInput.text;
            this.checkName(name);
            //检测密码是否符合规范
            var password = this.loginPanel.passInput.text;
            this.checkPassword(password);
            var data = "userName=" + name + "&" + "userPassword=" + password;
            HttpManager.connectServer("http://192.168.1.11:3002/login", data);
        };
        //检测用户名是否符合规范
        LonginPanelMedistor.prototype.checkName = function (name) {
        };
        //检测用户名是否符合规范
        LonginPanelMedistor.prototype.checkPassword = function (password) {
        };
        //-------------------------------------------------------------------------------------------
        //服务器返回消息处理
        //-------------------------------------------------------------------------------------------
        LonginPanelMedistor.prototype.checkData = function (data) {
            console.log(data);
        };
        //关闭按钮
        LonginPanelMedistor.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        return LonginPanelMedistor;
    }(BaseMediator));
    LonginPanelMedistor.NAME = "LonginPanelMedistor";
    game.LonginPanelMedistor = LonginPanelMedistor;
    __reflect(LonginPanelMedistor.prototype, "game.LonginPanelMedistor");
})(game || (game = {}));
//# sourceMappingURL=LonginPanelMedistor.js.map