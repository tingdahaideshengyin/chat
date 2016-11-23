
/** 新的进度加载 */
class LoadingUI2 extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.createLoadingView();
	}

	//加载背景
	private _loadingBG:egret.Bitmap;
	//进度条背景
	private _loadingProgressBg:egret.Bitmap;
	//进度条
	private _loadingProgressBar:egret.Bitmap;
	//进度条背景宽度
	private _loadingProgressBgWidth:number;
	//进度条宽度
	private _loadingProgressBarWidth:number;

	//创建背景条
	private createLoadingView():void
	{
		
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
	}

	/** 设置进度 */
	public setProgress(current:number, total:number):void {
		//整数百分比
        //var rate:number = Math.round((current / total) * 100);
		this._loadingProgressBar.width = this._loadingProgressBarWidth * (current/total);

    }
}