var game;
(function (game) {
    var MessagePanel = (function (_super) {
        __extends(MessagePanel, _super);
        function MessagePanel() {
            _super.call(this);
            this.currentHeadIConName = "";
            this.skinName = "resource/eui_skins_game/Pannel/ChartSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=MessagePanel,p=c.prototype;
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            //this.onUIComplete();
        };
        /*-----------------------------------------------------------------------------------------
                                                UI初始化设置
        -----------------------------------------------------------------------------------------*/
        p.onUIComplete = function (event) {
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
    egret.registerClass(MessagePanel,'game.MessagePanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=MessagePanel.js.map