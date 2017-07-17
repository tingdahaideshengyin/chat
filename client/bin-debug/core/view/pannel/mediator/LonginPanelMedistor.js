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
            //-------------------------------------------------------------------------------------------
            //登陆与注册切换
            //-------------------------------------------------------------------------------------------
            _this.currentType = "login";
            return _this;
        }
        //重写消息列表
        LonginPanelMedistor.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_LOGIN,
                PanelNotify.CLOSE_LOGIN,
                //LoginNotify.SEND_CHART_MESSAGE,
                //LoginNotify.RECEIVE_CHART_MESSAGE,
                LoginNotify.ACCOUNT_OR_PASSWORD_ERROR,
                LoginNotify.LOGIN_SUCCESS,
                LoginNotify.NOT_ACCOUNT_OR_PASSWORD
            ];
        };
        ;
        LonginPanelMedistor.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case PanelNotify.OPEN_LOGIN:
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
                case LoginNotify.ACCOUNT_OR_PASSWORD_ERROR:
                    console.log(5001 - 5002);
                    break;
                case LoginNotify.LOGIN_SUCCESS:
                    console.log(200);
                    break;
                case LoginNotify.NOT_ACCOUNT_OR_PASSWORD:
                    console.log(500);
                    break;
                case LoginNotify.ACCOUNT_IS_EXISTENT:
                    console.log(601);
                case LoginNotify.ACCOUNT_CREATE_ERROR:
                    console.log(602);
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
            //注册登陆切换
            this.loginPanel.changeText.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeText, this);
        };
        //-------------------------------------------------------------------------------------------
        //发送登陆消息
        //-------------------------------------------------------------------------------------------
        LonginPanelMedistor.prototype.sendLoginMessage = function () {
            //检测用户名是否符合规范
            var name = this.loginPanel.nameInput.text;
            this.checkName(name);
            //检测密码是否符合规范
            var pwd = this.loginPanel.passInput.text;
            this.checkPassword(pwd);
            var data = "userName=" + name + "&" + "password=" + pwd;
            if (this.currentType == "login") {
                net.HttpManager.connectServerWithPost(GlobalData.getAccountServer() + "/login", data);
            }
            else {
                net.HttpManager.connectServerWithPost(GlobalData.getAccountServer() + "/register", data);
            }
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
            //this.sendNotification(PanelNotify.CLOSE_LOGIN);
        };
        /** 关闭后，需要销毁的对象,在this.closePanel(1)后调用 */
        LonginPanelMedistor.prototype.destroy = function () {
            //this.loginPanel = null;
        };
        LonginPanelMedistor.prototype.changeText = function (evt) {
            if (this.currentType == "login") {
                this.loginPanel.loginButton.label = "注册";
                this.loginPanel.changeText.text = "使用已有账号";
                this.currentType = "register";
            }
            else {
                this.loginPanel.loginButton.label = "登陆";
                this.loginPanel.changeText.text = "注册新用户";
                this.currentType = "login";
            }
            this.loginPanel.nameInput.text = "";
            this.loginPanel.passInput.text = "";
        };
        return LonginPanelMedistor;
    }(BaseMediator));
    LonginPanelMedistor.NAME = "LonginPanelMedistor";
    game.LonginPanelMedistor = LonginPanelMedistor;
    __reflect(LonginPanelMedistor.prototype, "game.LonginPanelMedistor");
})(game || (game = {}));
//# sourceMappingURL=LonginPanelMedistor.js.map