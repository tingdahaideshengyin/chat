//代码已经完整
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 图片Button类
 * 可以有图片，文字，动画
 * todo：九宫格，多动画，图字等
 */
var ImageButton = (function (_super) {
    __extends(ImageButton, _super);
    /**
     * context			函数回调this对象
     * imageName		图片
     * backFun			点击方法
     * descStr			按钮描述
     * fontSize			字体大小
     * cartoonType		按钮效果：1：按下变小，放开弹大 2：按下变小，放开轻微弹大 3： 按下变小，放开变大
     * 注意：如果有动画，只有动画结束后才会触发click事件
     */
    function ImageButton(context, imageName, backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        var _this = _super.call(this) || this;
        _this.param = { context: null, data: null }; //回调参数
        _this.assets = RES.getRes("assets"); //名称不一致的话需要修改
        _this.isPlayCartoon = false;
        _this.cartoonType = 1;
        _this.param.context = context;
        _this.init(imageName, backFun, descStr, fontSize, cartoonType, assetsName);
        return _this;
    }
    //按钮初始化
    ImageButton.prototype.init = function (imageName, backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        this.btnImage = new egret.Bitmap();
        if (assetsName == null) {
            this.btnImage.texture = RES.getRes(imageName);
        }
        else {
            if (assetsName != "assets") {
                this.assets = RES.getRes(assetsName);
            }
            this.btnImage.texture = this.assets.getTexture(imageName);
        }
        this.addChild(this.btnImage);
        if (descStr != "") {
            this.textField = new egret.TextField();
            this.addChild(this.textField);
            this.textField.size = fontSize;
            this.textField.textAlign = "center";
            this.textField.stroke = 1;
            this.textField.strokeColor = 0x000000;
            this.textField.text = descStr;
            this.textField.width = this.btnImage.width;
            this.textField.x = this.btnImage.width / 2 - this.textField.width / 2;
            this.textField.y = this.btnImage.height / 2 - this.textField.height / 2;
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTouchTap, this);
    };
    //点击事件
    ImageButton.prototype.onButtonTouchTap = function (evt) {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete2 = function () {
            this.isPlayCartoon = false;
        };
        var onComplete1 = function () {
            switch (this.cartoonType) {
                //1：按下变小，放开弹大
                case 1:
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: (this.x - this.btnImage.width / 4), y: (this.y - this.btnImage.height / 4) }, 500, egret.Ease.elasticInOut).call(onComplete2, this);
                    break;
                //2：按下变小，放开轻微弹大
                case 2:
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: (this.x - this.btnImage.width / 4), y: (this.y - this.btnImage.height / 4) }, 500, egret.Ease.backOut).call(onComplete2, this);
                    break;
                //3： 按下变小，放开变大
                case 3:
                    egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: (this.x - this.btnImage.width / 4), y: (this.y - this.btnImage.height / 4) }, 100).call(onComplete2, this);
                    break;
            }
        };
        egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5, x: (this.x + this.btnImage.width / 4), y: (this.y + this.btnImage.height / 4) }, 100, egret.Ease.sineIn).call(onComplete1, this);
        //var callBackFun:Function = function(){
        //if(this.backFun != null){
        //this.backFun.apply(this.param.context, [this.param.data]);
        //}
        //}
        //egret.setTimeout(callBackFun, this, 300);
        egret.setTimeout(function () {
            if (this.backFun != null) {
                this.backFun.apply(this.param.context, [this.param.data]);
            }
        }, this, 300);
    };
    /*-----------------------------------------------------------------------------------------
                                                对外接口
    -----------------------------------------------------------------------------------------*/
    /**
     * 设置绑定数据
     */
    ImageButton.prototype.setBindData = function (data) {
        this.param.data = data;
    };
    /**
     * 获取绑定数据
     */
    ImageButton.prototype.getBindData = function () {
        return this.param.data;
    };
    /**
     * 获取按钮图片
     */
    ImageButton.prototype.getBitmap = function () {
        return this.btnImage;
    };
    return ImageButton;
}(egret.DisplayObjectContainer));
__reflect(ImageButton.prototype, "ImageButton");
//# sourceMappingURL=ImageButton.js.map