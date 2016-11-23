//代码已经完整
module game {
	export class ZhaoXianMediator extends BaseMediator{

		public static NAME:string = "ZhaoXianMediator";

		public constructor(viewComponet: any = null) {
			super(ZhaoXianMediator.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_ZHAOXIAN,
				PanelNotify.CLOSE_ZHAOXIAN
			];
		}

		//重写消息处理
		private zhaoXian:ZhaoXian = new ZhaoXian();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_ZHAOXIAN:
					//显示角色面板
					this.showUI(this.zhaoXian, false, 0, 0, 5);
					break;
				case PanelNotify.CLOSE_ZHAOXIAN:
					this.closePanel(1);
					break;
			}
		}

		private menuBtn:ImageButton;
		private setBtn:ImageButton;
		private buttonBtn:ImageButton;
		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.zhaoXian.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);

			this.menuBtn = new ImageButton(this, "yellowBtn_png", this.onMenuBtnTouch, "按钮特效1", 30, 1, null);
			this.menuBtn.x = -300;
			this.menuBtn.y = 300;
			this.zhaoXian.addChild(this.menuBtn);

			this.setBtn = new ImageButton(this, "yellowBtn_png", this.onSetBtnTouch, "按钮特效2", 30, 2, null);
			this.setBtn.x = -300;
			this.setBtn.y = 400;
			this.zhaoXian.addChild(this.setBtn);

			this.buttonBtn = new ImageButton(this, "yellowBtn_png", this.onButtonBtnTouch, "按钮特效3", 30, 3, null);
			this.buttonBtn.x = -300;
			this.buttonBtn.y = 500;
			this.zhaoXian.addChild(this.buttonBtn);

			this.initEffect();
			
		}

		private initEffect():void{
			var effect1:Function = function(){
				egret.Tween.get(this.menuBtn).to({x:(this.w/2 - this.menuBtn.width/2)}, 600, egret.Ease.backOut);
			};
			egret.setTimeout(effect1, this, 150*1);

			var effect2:Function = function(){
				egret.Tween.get(this.setBtn).to({x:(this.w/2 - this.menuBtn.width/2)}, 600, egret.Ease.backOut);
			};
			egret.setTimeout(effect2, this, 150*2);

			var effect3:Function = function(){
				egret.Tween.get(this.buttonBtn).to({x:(this.w/2 - this.menuBtn.width/2)}, 600, egret.Ease.backOut);
			};
			egret.setTimeout(effect3, this, 150*3);
		}


		/*-----------------------------------------------------------------------------------------
										        按钮消息处理
		-----------------------------------------------------------------------------------------*/
		//关闭按钮
		private onCloseBtnTouch(evt:egret.TouchEvent){
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.facade().sendNotification(PanelNotify.CLOSE_MAP);
		}

		private onMenuBtnTouch(evt:egret.TouchEvent):void
		{

		}

		private onSetBtnTouch(evt:egret.TouchEvent):void
		{
			
		}

		private onButtonBtnTouch(evt:egret.TouchEvent):void
		{
			
		}

		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}