var game;
(function (game) {
    var RoleMediator = (function (_super) {
        __extends(RoleMediator, _super);
        function RoleMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            _super.call(this, RoleMediator.NAME, viewComponet);
            //重写消息处理
            this.rolePanel = new game.RolePanel();
        }
        var d = __define,c=RoleMediator,p=c.prototype;
        //重写消息列表
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ROLE,
                PanelNotify.CLOSE_ROLE
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
            //关闭按钮
            this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.rolePanel.readExcelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelData, this);
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
        p.readExcelData = function (evt) {
            var dataProxy = readData.getTemplateDataProxy().getGameData();
            this.rolePanel.showText.text += dataProxy[this.rolePanel.keyInputText.text][this.rolePanel.inputText.text] + "\n";
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        RoleMediator.NAME = "RoleMediator";
        return RoleMediator;
    }(BaseMediator));
    game.RoleMediator = RoleMediator;
    egret.registerClass(RoleMediator,'game.RoleMediator');
})(game || (game = {}));
//# sourceMappingURL=RoleMediator.js.map