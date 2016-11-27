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
        };
        /*-----------------------------------------------------------------------------------------
                                                UI初始化设置
        -----------------------------------------------------------------------------------------*/
        p.onUIComplete = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        };
        return MessagePanel;
    }(eui.Component));
    game.MessagePanel = MessagePanel;
    egret.registerClass(MessagePanel,'game.MessagePanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=MessagePanel.js.map