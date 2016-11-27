var game;
(function (game) {
    var Backpack = (function (_super) {
        __extends(Backpack, _super);
        function Backpack() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/BackpackSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=Backpack,p=c.prototype;
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
        return Backpack;
    }(eui.Component));
    game.Backpack = Backpack;
    egret.registerClass(Backpack,'game.Backpack',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=Backpack.js.map