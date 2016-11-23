var game;
(function (game) {
    var ChuangDang = (function (_super) {
        __extends(ChuangDang, _super);
        function ChuangDang() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/Pannel/ChuangDangSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        }
        var d = __define,c=ChuangDang,p=c.prototype;
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
        return ChuangDang;
    }(eui.Component));
    game.ChuangDang = ChuangDang;
    egret.registerClass(ChuangDang,'game.ChuangDang',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=ChuangDang.js.map