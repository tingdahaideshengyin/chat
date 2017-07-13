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
    var RegisterPanelMediator = (function (_super) {
        __extends(RegisterPanelMediator, _super);
        function RegisterPanelMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, RegisterPanelMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.registerPanel = new game.RegisterPanel();
            return _this;
        }
        //重写消息列表
        RegisterPanelMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_RESISTER,
                PanelNotify.CLOSE_RESISTER,
                RegisterNotify.SEND_CHART_MESSAGE,
                RegisterNotify.RECEIVE_CHART_MESSAGE
            ];
        };
        RegisterPanelMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case PanelNotify.OPEN_RESISTER:
                    //显示消息面板
                    this.showUI(this.registerPanel, false, 0, 0, 1);
                    break;
                case PanelNotify.CLOSE_RESISTER:
                    //关闭消息面板
                    this.closePanel(1);
                    break;
                case RegisterNotify.RECEIVE_CHART_MESSAGE:
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
        RegisterPanelMediator.prototype.initUI = function () {
            //登陆按钮
            this.registerPanel.registerButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendLoginMessage, this);
            //关闭按钮
            this.registerPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
        };
        //-------------------------------------------------------------------------------------------
        //发送登陆消息
        //-------------------------------------------------------------------------------------------
        RegisterPanelMediator.prototype.sendLoginMessage = function () {
            //检测用户名是否符合规范
            var name = this.registerPanel.nameInput.text;
            this.checkName(name);
            //检测密码是否符合规范
            var password = this.registerPanel.passInput.text;
            this.checkPassword(password);
            var data = "userName=" + name + "&" + "userPassword=" + password;
            //net.HttpManager.connectServer("http://192.168.1.11:3002/register", data);
        };
        //检测用户名是否符合规范
        RegisterPanelMediator.prototype.checkName = function (name) {
        };
        //检测用户名是否符合规范
        RegisterPanelMediator.prototype.checkPassword = function (password) {
        };
        //-------------------------------------------------------------------------------------------
        //服务器返回消息处理
        //-------------------------------------------------------------------------------------------
        RegisterPanelMediator.prototype.checkData = function (data) {
            console.log(data);
        };
        //关闭按钮
        RegisterPanelMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        return RegisterPanelMediator;
    }(BaseMediator));
    RegisterPanelMediator.NAME = "RegisterPanelMediator";
    game.RegisterPanelMediator = RegisterPanelMediator;
    __reflect(RegisterPanelMediator.prototype, "game.RegisterPanelMediator");
})(game || (game = {}));
//# sourceMappingURL=RegisterPanelMediator.js.map