var game;
(function (game) {
    var RoleInfo = (function (_super) {
        __extends(RoleInfo, _super);
        function RoleInfo() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/RolleInfoSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=RoleInfo,p=c.prototype;
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            //game.Appfacade.getinstance().registerMediator(new RoleMediator(this));
            //GameLayerManager.gameLayer().sceneLayer.addChild(this);
        };
        return RoleInfo;
    }(eui.Component));
    game.RoleInfo = RoleInfo;
    egret.registerClass(RoleInfo,'game.RoleInfo',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=RoleInfo.js.map