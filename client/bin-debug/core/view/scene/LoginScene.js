var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 登陆场景类 */
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/ui_skins/Loginskin.exml";
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onUIComplete, _this);
        return _this;
    }
    LoginScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoginScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /*-----------------------------------------------------------------------------------------
                                                UI初始化设置
    -----------------------------------------------------------------------------------------*/
    LoginScene.prototype.onUIComplete = function (event) {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
        this.account_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openLoginPanel, this);
    };
    //-------------------------------------------------------------------------------------------
    //各种按钮消息处理
    //-------------------------------------------------------------------------------------------
    //打开登陆、注册UI
    LoginScene.prototype.openLoginPanel = function () {
        //this.account_button.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.openLoginPanel, this)
        game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_LOGIN);
    };
    return LoginScene;
}(eui.Component));
__reflect(LoginScene.prototype, "LoginScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=LoginScene.js.map