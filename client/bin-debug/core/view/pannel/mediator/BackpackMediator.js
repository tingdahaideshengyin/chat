//代码已经完整
var game;
(function (game) {
    var BackpackMediator = (function (_super) {
        __extends(BackpackMediator, _super);
        function BackpackMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            _super.call(this, BackpackMediator.NAME, viewComponet);
            //重写消息处理
            this.backpackPanel = new game.Backpack();
        }
        var d = __define,c=BackpackMediator,p=c.prototype;
        //重写消息列表
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BACKPACK,
                PanelNotify.CLOSE_BACKPACK
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_BACKPACK:
                    //显示角色面板
                    this.showUI(this.backpackPanel, false, 0, 0, 1);
                    break;
                case PanelNotify.CLOSE_BACKPACK:
                    this.closePanel(1);
                    break;
            }
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        p.initUI = function () {
            //关闭按钮
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.backpackPanel.saveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveInputData, this);
            this.backpackPanel.readBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reaInputdData, this);
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
        p.saveInputData = function (evt) {
            readData.getGameDataProxy().setGameName(this.backpackPanel.inputText.text);
            this.backpackPanel.showText.text += "保存成功...\n" + readData.getGameDataProxy().getGameName() + "\n";
        };
        p.reaInputdData = function (evt) {
            this.backpackPanel.showText.text += readData.getGameDataProxy().getGameName() + "\n";
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        p.ininData = function () {
        };
        BackpackMediator.NAME = "BackpackMediator";
        return BackpackMediator;
    }(BaseMediator));
    game.BackpackMediator = BackpackMediator;
    egret.registerClass(BackpackMediator,'game.BackpackMediator');
})(game || (game = {}));
//# sourceMappingURL=BackpackMediator.js.map