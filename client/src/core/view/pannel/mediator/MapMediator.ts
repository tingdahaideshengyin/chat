//代码已经完整

module game {
	export class MapMediator extends BaseMediator{

		public static NAME:string = "MapMediator";

		public constructor(viewComponent: any = null) {
			super(MapMediator.NAME, viewComponent);
		}


		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_MAP,
				PanelNotify.CLOSE_MAP
			];
		}


		//收到消息
		private mapPanel:MapPanel = new MapPanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_MAP:
					//显示角色面板
					this.showUI(this.mapPanel, false, 0, 0, 5);
					break;
				case PanelNotify.CLOSE_MAP:
					this.closePanel(1);
					break;
			}
		}


		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.mapPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);

			//其他按钮
			this.mapPanel.btn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn0Touch, this);
			this.mapPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn1Touch, this);
			this.mapPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn2Touch, this);
			this.mapPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn3Touch, this);
			this.mapPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn4Touch, this);
			this.mapPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn5Touch, this);


			//图片 Tips 特效
			TipsManager.addTips(this.mapPanel.img0, "没有动画Tips", 0);
			TipsManager.addTips(this.mapPanel.img1, "从下到上逐现", 1);
			TipsManager.addTips(this.mapPanel.img2, "从左到右", 2);
			TipsManager.addTips(this.mapPanel.img3, "从右到左", 3);	
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

		//按钮Tips特效
		private onBtn0Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("从下到上弹出", 1);
		}

		private onBtn1Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("从左到右弹出",2);
		}

		private onBtn2Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("从右到左弹出", 3);
		}

		private onBtn3Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("从中间弹出逐渐消失", 4);
		}

		private onBtn4Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("从大变小", 5);
		}

		private onBtn5Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("警告字体颜色", 5, true);
		}

		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}

	}
}