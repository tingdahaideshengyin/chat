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
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins_game/Pannel/ShopPanelSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onUIComplete, _this);
            return _this;
        }
        ShopPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        ShopPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /*-----------------------------------------------------------------------------------------
                                                UI初始化设置
        -----------------------------------------------------------------------------------------*/
        ShopPanel.prototype.onUIComplete = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        };
        return ShopPanel;
    }(eui.Component));
    game.ShopPanel = ShopPanel;
    __reflect(ShopPanel.prototype, "game.ShopPanel", ["eui.UIComponent", "egret.DisplayObject"]);
})(game || (game = {}));
//# sourceMappingURL=ShopPanel.js.map