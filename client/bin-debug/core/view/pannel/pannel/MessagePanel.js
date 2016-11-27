var game;
(function (game) {
    var MessagePanel = (function (_super) {
        __extends(MessagePanel, _super);
        function MessagePanel() {
            _super.call(this);
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
            if (!this.messageGroup) {
                this.messageGroup = new eui.Group();
            }
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
        };
        return MessagePanel;
    }(eui.Component));
    game.MessagePanel = MessagePanel;
    egret.registerClass(MessagePanel,'game.MessagePanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=MessagePanel.js.map