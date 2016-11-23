var game;
(function (game) {
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/ShopPanelSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=ShopPanel,p=c.prototype;
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
        return ShopPanel;
    }(eui.Component));
    game.ShopPanel = ShopPanel;
    egret.registerClass(ShopPanel,'game.ShopPanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=ShopPanel.js.map