var game;
(function (game) {
    /** 地图面板类 */
    var MapPanel = (function (_super) {
        __extends(MapPanel, _super);
        function MapPanel() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/MapPannel.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=MapPanel,p=c.prototype;
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
        return MapPanel;
    }(eui.Component));
    game.MapPanel = MapPanel;
    egret.registerClass(MapPanel,'game.MapPanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=MapPanel.js.map