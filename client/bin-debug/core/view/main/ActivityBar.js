var game;
(function (game) {
    var ActivityBar = (function (_super) {
        __extends(ActivityBar, _super);
        function ActivityBar() {
            _super.call(this);
            this.skinName = "resource/eui_skins_game/ActivifyBarSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=ActivityBar,p=c.prototype;
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
        return ActivityBar;
    }(eui.Component));
    game.ActivityBar = ActivityBar;
    egret.registerClass(ActivityBar,'game.ActivityBar',["eui.UIComponent"]);
})(game || (game = {}));
//# sourceMappingURL=ActivityBar.js.map