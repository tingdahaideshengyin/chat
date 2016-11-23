//代码已完整
/**
 * 面板meddiator基类
 * todo：面板特效，全屏 + 非全屏蒙层
 */
var BaseMediator = (function (_super) {
    __extends(BaseMediator, _super);
    function BaseMediator(mediatorName, viewComponent) {
        if (mediatorName === void 0) { mediatorName = ""; }
        if (viewComponent === void 0) { viewComponent = null; }
        _super.call(this, mediatorName, viewComponent);
        //是否初始化
        this.isInitialized = false;
        //是否已经显示
        this.isPopUp = false;
        //Ui容器
        this.uiContener = null;
        this.w = 0;
        this.h = 0;
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
    }
    var d = __define,c=BaseMediator,p=c.prototype;
    /**
     * 添加面板方法
     * @pagram ui		Ui容器
     * dark				背景是否变黑
     * popUpWidth		指定弹窗宽度，定位使用
     * popUpHeight		指定弹窗高度，定位使用
     * effectType		0:没有动画，1：从中间轻微弹出，2：从中间猛烈弹出，3：从左向右，4：从右向左，5：从上到下，6：从下到上
     */
    p.showUI = function (ui, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        this.uiContener = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
    };
    /**
     * 面板弹出之前处理
     */
    p.beforShow = function () {
    };
    /**
     * 初始化面板UI
     */
    p.initUI = function () {
    };
    /**
     * 初始化面板数据
     */
    p.initData = function () {
    };
    /**
     * 移除面板方法
     * effectType	0:没有动画，1：从中间轻微弹出，2：从中间猛烈弹出，3：从左向右，4：从右向左，5：从上到下，6：从下到上
     */
    p.closePanel = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        PopUpManager.removePopUp(this.uiContener, effectType);
        this.destroy();
    };
    /**
     * 面板关闭后，需要销毁的对象
     */
    p.destroy = function () {
    };
    /**
     * 面板是否弹出状态
     */
    p.getIsPopUp = function () {
        return this.isPopUp;
    };
    /**
     * 面板是否初始化完毕
     */
    p.getIsInit = function () {
        return this.isInitialized;
    };
    /**
     * 获取面板宽度
     */
    p.getWidth = function () {
        return this.uiContener.width;
    };
    /**
     * 获取面板高度
     */
    p.getHeight = function () {
        return this.uiContener.height;
    };
    return BaseMediator;
}(puremvc.Mediator));
egret.registerClass(BaseMediator,'BaseMediator',["puremvc.IMediator","puremvc.INotifier"]);
//# sourceMappingURL=BaseMediator.js.map