var game;
(function (game) {
    var QiangHuaPanel = (function (_super) {
        __extends(QiangHuaPanel, _super);
        function QiangHuaPanel() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/QiangHuaPanSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=QiangHuaPanel,p=c.prototype;
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
        return QiangHuaPanel;
    }(eui.Component));
    game.QiangHuaPanel = QiangHuaPanel;
    egret.registerClass(QiangHuaPanel,'game.QiangHuaPanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=QiangHuaPanel.js.map