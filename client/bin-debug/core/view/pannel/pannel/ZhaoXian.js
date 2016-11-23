var game;
(function (game) {
    var ZhaoXian = (function (_super) {
        __extends(ZhaoXian, _super);
        function ZhaoXian() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/ZhaoXianSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=ZhaoXian,p=c.prototype;
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
        return ZhaoXian;
    }(eui.Component));
    game.ZhaoXian = ZhaoXian;
    egret.registerClass(ZhaoXian,'game.ZhaoXian',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=ZhaoXian.js.map