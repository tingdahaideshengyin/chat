var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//代码已完整
/** 主界面 */
var game;
(function (game) {
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            var _this = _super.call(this) || this;
            /*-----------------------------------------------------------------------------------------
                                            主界面收缩按钮
            -----------------------------------------------------------------------------------------*/
            //主界面是否隐藏
            _this.isHide = false;
            _this.skinName = "resource/eui_skins_game/MainUISkin.exml";
            //this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            _this.createCompleteEvent();
            return _this;
        }
        MainUI.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        MainUI.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MainUI.prototype.createCompleteEvent = function () {
            //private createCompleteEvent(event:eui.UIEvent):void{
            //console.log(1);
            //this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
            //game.Appfacade.getinstance().registerMediator(new RoleMediator(this));
            //GameLayerManager.gameLayer().sceneLayer.addChild(this);
            //添加UI遮罩
            this.addUIMask();
            //主界面按钮收缩按钮
            this.mainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMainBtnTouch, this);
            //地图天下按钮点击事件
            this.functionBar.mapBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMapBtnTouch, this);
            //商店按钮点击事件
            this.functionBar.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopBtnTouch, this);
            //闯荡按钮点击事件
            this.functionBar.chuangDangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChuangDangBtnTouch, this);
            //招贤按钮点击事件
            this.functionBar.zhaoXianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZhaoXianBtnTouch, this);
            //强化按钮点击事件
            this.functionBar.qianghuaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQiangHuaBtnTouch, this);
            //背包按钮点击事件
            this.functionBar.backpackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackpackBtnTouch, this);
            //角色按钮点击事件
            this.functionBar.roleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRoleBtnTouch, this);
            //消息按钮点击事件
            this.activityBar.infoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onInfoBtnTouch, this);
            //登陆按钮点击事件
            this.activityBar.loginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginBtnTouch, this);
            //注册按钮点击事件
            this.activityBar.registerButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.registerBtnTouch, this);
            //pomelo按钮点击事件
            this.pomeloButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPomeloButtonTouch, this);
        };
        /*-----------------------------------------------------------------------------------------
                                        导航条添加蒙版
        -----------------------------------------------------------------------------------------*/
        MainUI.prototype.addUIMask = function () {
            //底部UI Mask
            //var bottomMask:egret.Rectangle = new egret.Rectangle();
            var bottomMask = new egret.Shape;
            bottomMask.graphics.beginFill(0xff0000);
            bottomMask.x = this.activityBar.x;
            bottomMask.y = this.activityBar.y;
            bottomMask.graphics.drawRect(0, 0, this.activityBar.width, this.activityBar.height);
            bottomMask.graphics.endFill();
            this.addChild(bottomMask);
            //bottomMask.width = this.activityBar.width;
            //bottomMask.height = this.activityBar.height;
            this.activityBar.mask = bottomMask;
            this.activityBarX = this.activityBar.x;
            //右侧湖边UIMask
            //var rightMask:egret.Rectangle = new egret.Rectangle();
            var rightMask = new egret.Shape;
            rightMask.graphics.beginFill(0xff0000);
            rightMask.x = this.functionBar.x;
            rightMask.y = this.functionBar.y;
            rightMask.graphics.drawRect(0, 0, this.functionBar.width, this.functionBar.height);
            rightMask.graphics.endFill();
            this.addChild(rightMask);
            //rightMask.width = this.functionBar.width;
            //rightMask.height = this.functionBar.height;
            this.functionBar.mask = rightMask;
            this.functionBarY = this.functionBar.y;
        };
        MainUI.prototype.onMainBtnTouch = function (evt) {
            if (this.isHide) {
                this.isHide = false;
                egret.Tween.get(this.activityBar).to({ x: this.activityBarX }, 300, egret.Ease.backInOut);
                egret.Tween.get(this.functionBar).to({ y: this.functionBarY }, 300, egret.Ease.backInOut);
            }
            else {
                this.isHide = true;
                egret.Tween.get(this.activityBar).to({ x: GameConfig.curWidth() }, 300, egret.Ease.backInOut);
                egret.Tween.get(this.functionBar).to({ y: GameConfig.curHeight() }, 300, egret.Ease.backInOut);
            }
        };
        /*-----------------------------------------------------------------------------------------
                                        各种主界面按钮事件
        -----------------------------------------------------------------------------------------*/
        //地图天下按钮点击事件
        MainUI.prototype.onMapBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_MAP);
        };
        //商店按钮点击事件
        MainUI.prototype.onShopBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_SHOP);
        };
        //闯荡按钮点击事件
        MainUI.prototype.onChuangDangBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_CHUANGDANG);
        };
        //招贤按钮事件
        MainUI.prototype.onZhaoXianBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_ZHAOXIAN);
        };
        //强化按钮点击事件
        MainUI.prototype.onQiangHuaBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_QIANGHUA);
        };
        //背包按钮点击事件
        MainUI.prototype.onBackpackBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BACKPACK);
        };
        //角色按钮点击事件
        MainUI.prototype.onRoleBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_ROLE);
        };
        //消息按钮点击事件
        MainUI.prototype.onInfoBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_MESSAGE);
        };
        //登陆按钮点击事件
        MainUI.prototype.loginBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_LOGIN);
        };
        //注册按钮点击事件
        MainUI.prototype.registerBtnTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_RESISTER);
        };
        //pomelo按钮点击事件
        MainUI.prototype.onPomeloButtonTouch = function (evt) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_POMELO);
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype, "game.MainUI", ["eui.UIComponent", "egret.DisplayObject"]);
})(game || (game = {}));
//# sourceMappingURL=MainUI.js.map