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
    var MessagePanel = (function (_super) {
        __extends(MessagePanel, _super);
        function MessagePanel() {
            var _this = _super.call(this) || this;
            _this.currentHeadIConName = "";
            _this.skinName = "resource/eui_skins_game/Pannel/ChartSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onUIComplete, _this);
            return _this;
        }
        MessagePanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        MessagePanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            //this.onUIComplete();
        };
        /*-----------------------------------------------------------------------------------------
                                                UI初始化设置
        -----------------------------------------------------------------------------------------*/
        MessagePanel.prototype.onUIComplete = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
            //消息容器
            if (!this.messageGroup) {
                this.messageGroup = new eui.Group();
            }
            //视窗
            if (!this.viewScroller) {
                this.viewScroller = new eui.Scroller();
                this.viewScroller.width = this.bgImage.width;
                this.viewScroller.height = this.bgImage.height;
                this.viewScroller.x = this.bgImage.x;
                this.viewScroller.y = this.bgImage.y;
                this.viewScroller.viewport = this.messageGroup;
                //this.viewScroller.verticalScrollBar.autoVisibility = false;
                //this.viewScroller.verticalScrollBar.visible = true;
                this.addChild(this.viewScroller);
            }
            //消息输入框
            /**
            if(!this.textInput){
                this.textInput = new egret.TextField();
                this.textInput.background = true;//默认白色
                this.textInput.backgroundColor = 0xffffff;
                this.textInput.width = 600;
                this.textInput.height = 208;
                this.textInput.x = 24;
                this.textInput.y = 700;
                this.textInput.size = 30;
                this.textInput.type = egret.TextFieldType.INPUT;
                this.textInput.textAlign = "left";
                //this.textInput.verticalAlign = "top";
                this.textInput.multiline = true;
                this.textInput.lineSpacing = 1;
                this.textInput.setFocus();
                this.addChild(this.textInput);
            }
            **/
        };
        return MessagePanel;
    }(eui.Component));
    game.MessagePanel = MessagePanel;
    __reflect(MessagePanel.prototype, "game.MessagePanel", ["eui.UIComponent", "egret.DisplayObject"]);
})(game || (game = {}));
//# sourceMappingURL=MessagePanel.js.map