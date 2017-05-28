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
    var PomeloTestMediator = (function (_super) {
        __extends(PomeloTestMediator, _super);
        function PomeloTestMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, PomeloTestMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.pomeloTest = new game.PomeloTest();
            return _this;
        }
        //重写消息列表
        PomeloTestMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_POMELO,
                PanelNotify.CLOSE_POMELO
            ];
        };
        PomeloTestMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
                case PanelNotify.OPEN_POMELO:
                    //显示消息面板
                    this.showUI(this.pomeloTest, false, 0, 0, 1);
                    break;
                case PanelNotify.CLOSE_POMELO:
                    //关闭消息面板
                    this.closePanel(1);
                    break;
                case SysNotify.SERVER_BACK_DATA:
                    //服务器返回结果
                    var data = notification.getBody();
                    //接收到消息
                    if (data == "") {
                        return;
                    }
                    this.onServerBackData(data);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        PomeloTestMediator.prototype.initUI = function () {
            //连接按钮
            this.pomeloTest.conectButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.connectToserver, this);
            //断开按钮
            this.pomeloTest.stopButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStopButtonTouch, this);
            //关闭按钮
            this.pomeloTest.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
        };
        //-------------------------------------------------------------------------------------------
        //发送登陆消息
        //-------------------------------------------------------------------------------------------
        PomeloTestMediator.prototype.connectToserver = function () {
            var host = "192.168.1.222";
            var port = 3010;
            pomelo.PomeloSocker.connectServer(host, port);
        };
        //断开按钮
        PomeloTestMediator.prototype.onStopButtonTouch = function () {
            pomelo.PomeloSocker.closeNet();
        };
        //-------------------------------------------------------------------------------------------
        //关闭按钮
        //-------------------------------------------------------------------------------------------
        PomeloTestMediator.prototype.onCloseBtnTouch = function () {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        //-------------------------------------------------------------------------------------------
        //收到服务器消息
        //-------------------------------------------------------------------------------------------
        PomeloTestMediator.prototype.onServerBackData = function (data) {
            this.pomeloTest.showText.text = data;
        };
        return PomeloTestMediator;
    }(BaseMediator));
    PomeloTestMediator.NAME = "PomeloTestMediator";
    game.PomeloTestMediator = PomeloTestMediator;
    __reflect(PomeloTestMediator.prototype, "game.PomeloTestMediator");
})(game || (game = {}));
//# sourceMappingURL=PomeloTestMediator.js.map