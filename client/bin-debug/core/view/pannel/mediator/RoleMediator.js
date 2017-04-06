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
    var RoleMediator = (function (_super) {
        __extends(RoleMediator, _super);
        function RoleMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, RoleMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.rolePanel = new game.RolePanel();
            return _this;
        }
        //重写消息列表
        RoleMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ROLE,
                PanelNotify.CLOSE_ROLE
            ];
        };
        RoleMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_ROLE:
                    //显示角色面板
                    this.showUI(this.rolePanel, false, 0, 0, 3);
                    break;
                case PanelNotify.CLOSE_ROLE:
                    this.closePanel(1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        RoleMediator.prototype.initUI = function () {
            //关闭按钮
            this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.rolePanel.readExcelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelData, this);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        RoleMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        RoleMediator.prototype.readExcelData = function (evt) {
            var dataProxy = readData.getTemplateDataProxy().getGameData();
            this.rolePanel.showText.text += dataProxy[this.rolePanel.keyInputText.text][this.rolePanel.inputText.text] + "\n";
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        RoleMediator.prototype.ininData = function () {
        };
        return RoleMediator;
    }(BaseMediator));
    RoleMediator.NAME = "RoleMediator";
    game.RoleMediator = RoleMediator;
    __reflect(RoleMediator.prototype, "game.RoleMediator");
})(game || (game = {}));
//# sourceMappingURL=RoleMediator.js.map