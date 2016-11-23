var game;
(function (game) {
    var RolePanel = (function (_super) {
        __extends(RolePanel, _super);
        function RolePanel() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/RolePanelSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=RolePanel,p=c.prototype;
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
        return RolePanel;
    }(eui.Component));
    game.RolePanel = RolePanel;
    egret.registerClass(RolePanel,'game.RolePanel',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=RolePanel.js.map