/** 新的进度加载 */
var LoadingUI2 = (function (_super) {
    __extends(LoadingUI2, _super);
    function LoadingUI2() {
        _super.call(this);
        this.createLoadingView();
    }
    var d = __define,c=LoadingUI2,p=c.prototype;
    //创建背景条
    p.createLoadingView = function () {
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
    p.setProgress = function (current, total) {
        //整数百分比
        //var rate:number = Math.round((current / total) * 100);
        this._loadingProgressBar.width = this._loadingProgressBarWidth * (current / total);
    };
    return LoadingUI2;
}(egret.DisplayObjectContainer));
egret.registerClass(LoadingUI2,'LoadingUI2');
//# sourceMappingURL=LoadingUI2.js.map