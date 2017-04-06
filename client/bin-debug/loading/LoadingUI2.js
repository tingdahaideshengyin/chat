var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 新的进度加载 */
var LoadingUI2 = (function (_super) {
    __extends(LoadingUI2, _super);
    function LoadingUI2() {
        var _this = _super.call(this) || this;
        _this.createLoadingView();
        return _this;
    }
    //创建背景条
    LoadingUI2.prototype.createLoadingView = function () {
        this._loadingBG = new egret.Bitmap();
        this._loadingBG.texture = RES.getRes("PreLoadingBg_jpg");
        this.addChild(this._loadingBG);
        this._loadingProgressBg = new egret.Bitmap();
        this._loadingProgressBg.texture = RES.getRes("PreLoadingBarBg_png");
        this._loadingProgressBg.width = this._loadingProgressBgWidth = GameConfig.curWidth() - 40;
        this._loadingProgressBg.x = (this._loadingProgressBgWidth - this._loadingProgressBg.width) / 2;
        this._loadingProgressBg.y = GameConfig.curHeight() - 150;
        this.addChild(this._loadingProgressBg);
        this._loadingProgressBar = new egret.Bitmap();
        this._loadingProgressBar.texture = RES.getRes("PreLoadingBar_png");
        this._loadingProgressBarWidth = this._loadingProgressBgWidth - 60;
        this._loadingProgressBar.width = 0;
        this._loadingProgressBar.y = this._loadingProgressBg.y + 20;
        this._loadingProgressBar.x = this._loadingProgressBg.x + 30;
        this.addChild(this._loadingProgressBar);
    };
    /** 设置进度 */
    LoadingUI2.prototype.setProgress = function (current, total) {
        //整数百分比
        //var rate:number = Math.round((current / total) * 100);
        this._loadingProgressBar.width = this._loadingProgressBarWidth * (current / total);
    };
    return LoadingUI2;
}(egret.DisplayObjectContainer));
__reflect(LoadingUI2.prototype, "LoadingUI2");
//# sourceMappingURL=LoadingUI2.js.map