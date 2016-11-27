var game;
(function (game) {
    var FunctionBar = (function (_super) {
        __extends(FunctionBar, _super);
        function FunctionBar() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/FunctionBarSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=FunctionBar,p=c.prototype;
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
        return FunctionBar;
    }(eui.Component));
    game.FunctionBar = FunctionBar;
    egret.registerClass(FunctionBar,'game.FunctionBar',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=FunctionBar.js.map