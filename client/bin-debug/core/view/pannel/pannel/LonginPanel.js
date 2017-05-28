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
    var LonginPanel = (function (_super) {
        __extends(LonginPanel, _super);
        function LonginPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins_game/Pannel/LonginPanel.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onUIComplete, _this);
            return _this;
        }
        LonginPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        LonginPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /*-----------------------------------------------------------------------------------------
                                                UI初始化设置
        -----------------------------------------------------------------------------------------*/
        LonginPanel.prototype.onUIComplete = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
            //居中对齐
            this.x = (GameConfig.curWidth() - this.width / 2) / 2;
            this.y = (GameConfig.curHeight() - this.height / 2) / 2;
        };
        return LonginPanel;
    }(eui.Component));
    game.LonginPanel = LonginPanel;
    __reflect(LonginPanel.prototype, "game.LonginPanel", ["eui.UIComponent", "egret.DisplayObject"]);
})(game || (game = {}));
//# sourceMappingURL=LonginPanel.js.map