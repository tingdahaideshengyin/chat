var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//代码已经完整
var game;
(function (game) {
    var BackpackMediator = (function (_super) {
        __extends(BackpackMediator, _super);
        function BackpackMediator(viewComponet) {
            if (viewComponet === void 0) { viewComponet = null; }
            var _this = _super.call(this, BackpackMediator.NAME, viewComponet) || this;
            //重写消息处理
            _this.backpackPanel = new game.Backpack();
            return _this;
        }
        //重写消息列表
        BackpackMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BACKPACK,
                PanelNotify.CLOSE_BACKPACK
            ];
        };
        BackpackMediator.prototype.handleNotification = function (notification) {
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
        BackpackMediator.prototype.initUI = function () {
            //关闭按钮
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
            this.backpackPanel.saveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveInputData, this);
            this.backpackPanel.readBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reaInputdData, this);
        };
        /*-----------------------------------------------------------------------------------------
                                                按钮消息处理
        -----------------------------------------------------------------------------------------*/
        //关闭按钮
        BackpackMediator.prototype.onCloseBtnTouch = function (evt) {
            this.closePanel(1);
            //下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
            //如果是相同对象，直接调用本对象方法更容易
            //this.facade().sendNotification(PanelNotify.CLOSE_MAP);
            //this.sendNotification(PanelNotify.CLOSE_MAP);
        };
        BackpackMediator.prototype.saveInputData = function (evt) {
            readData.getGameDataProxy().setGameName(this.backpackPanel.inputText.text);
            this.backpackPanel.showText.text += "保存成功...\n" + readData.getGameDataProxy().getGameName() + "\n";
        };
        BackpackMediator.prototype.reaInputdData = function (evt) {
            this.backpackPanel.showText.text += readData.getGameDataProxy().getGameName() + "\n";
        };
        /*-----------------------------------------------------------------------------------------
                                                初始化界面数据
        -----------------------------------------------------------------------------------------*/
        BackpackMediator.prototype.ininData = function () {
        };
        return BackpackMediator;
    }(BaseMediator));
    BackpackMediator.NAME = "BackpackMediator";
    game.BackpackMediator = BackpackMediator;
    __reflect(BackpackMediator.prototype, "game.BackpackMediator");
})(game || (game = {}));
//# sourceMappingURL=BackpackMediator.js.map