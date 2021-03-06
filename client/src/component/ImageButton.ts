//代码已经完整

/**
 * 图片Button类
 * 可以有图片，文字，动画
 * todo：九宫格，多动画，图字等
 */

class ImageButton extends egret.DisplayObjectContainer{

	
	private param = {context:null, data:null};//回调参数

	/**
	 * context			函数回调this对象
	 * imageName		图片
	 * backFun			点击方法
	 * descStr			按钮描述
	 * fontSize			字体大小
	 * cartoonType		按钮效果：1：按下变小，放开弹大 2：按下变小，放开轻微弹大 3： 按下变小，放开变大
	 * 注意：如果有动画，只有动画结束后才会触发click事件
	 */
	public constructor(context: any, imageName: string, backFun: Function=null, descStr: string="", fontSize: number=30, cartoonType: number=1, assetsName: string="assets") {
		super();
		this.param.context = context;
		this.init(imageName, backFun, descStr, fontSize, cartoonType, assetsName);
	}


	/*-----------------------------------------------------------------------------------------
										        初始化
	-----------------------------------------------------------------------------------------*/
	private textField:egret.TextField;
	private assets:egret.SpriteSheet = RES.getRes("assets");//名称不一致的话需要修改
	private btnImage:egret.Bitmap;
	private backFun:Function;
	private isPlayCartoon:boolean = false;
	private cartoonType:number = 1;
	//按钮初始化
	private init(imageName: string, backFun: Function=null, descStr: string="", fontSize: number=30, cartoonType: number=1, assetsName: string="assets"):void
	{
		this.cartoonType = cartoonType;
		this.backFun = backFun;
		this.btnImage = new egret.Bitmap();
		if(assetsName == null){
			this.btnImage.texture = RES.getRes(imageName);
		}else{
			if(assetsName != "assets"){
				this.assets = RES.getRes(assetsName);
			}
			this.btnImage.texture = this.assets.getTexture(imageName);
		}
		this.addChild(this.btnImage);

		if(descStr != ""){
			this.textField = new egret.TextField();
			this.addChild(this.textField);
			this.textField.size =fontSize;
			this.textField.textAlign = "center";
			this.textField.stroke = 1;
			this.textField.strokeColor = 0x000000;
			this.textField.text = descStr;
			this.textField.width = this.btnImage.width;
			this.textField.x = this.btnImage.width/2 - this.textField.width/2;
			this.textField.y = this.btnImage.height/2 - this.textField.height/2;
		}
		this.touchEnabled = true;

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTouchTap, this);
	}

	//点击事件
	private onButtonTouchTap(evt:egret.TouchEvent):void
	{
		if(this.isPlayCartoon){
			return;
		}

		this.isPlayCartoon = true;
		var onComplete2:Function = function(){
			this.isPlayCartoon = false;
		}
		var onComplete1:Function = function(){
			switch (this.cartoonType){
				//1：按下变小，放开弹大
				case 1:
					egret.Tween.get(this).to({scaleX:1, scaleY:1, x:(this.x - this.btnImage.width/4), y:(this.y - this.btnImage.height/4)}, 500,egret.Ease.elasticInOut).call(onComplete2, this);
					break;
				//2：按下变小，放开轻微弹大
				case 2:
					egret.Tween.get(this).to({scaleX:1, scaleY:1, x:(this.x - this.btnImage.width/4), y:(this.y - this.btnImage.height/4)}, 500,egret.Ease.backOut).call(onComplete2, this);
					break;
				//3： 按下变小，放开变大
				case 3:
					egret.Tween.get(this).to({scaleX:1, scaleY:1, x:(this.x - this.btnImage.width/4), y:(this.y - this.btnImage.height/4)}, 100).call(onComplete2, this);
					break;
			}
		};
		egret.Tween.get(this).to({scaleX:0.5, scaleY:0.5, x:(this.x + this.btnImage.width/4), y:(this.y + this.btnImage.height/4)}, 100, egret.Ease.sineIn).call(onComplete1, this);

		
		//var callBackFun:Function = function(){
			//if(this.backFun != null){
				//this.backFun.apply(this.param.context, [this.param.data]);
			//}
		//}
		//egret.setTimeout(callBackFun, this, 300);

		egret.setTimeout(function(){
			if(this.backFun != null){
				this.backFun.apply(this.param.context, [this.param.data]);
			}
		}, this, 300)
	}


	/*-----------------------------------------------------------------------------------------
										        对外接口
	-----------------------------------------------------------------------------------------*/
	/**
	 * 设置绑定数据
	 */
	public setBindData(data):void{
		this.param.data = data;
	}

	/**
	 * 获取绑定数据
	 */
	public getBindData():any{
		return this.param.data;
	}

	/**
	 * 获取按钮图片
	 */
	public getBitmap():egret.Bitmap{
		return this.btnImage;
	}
}