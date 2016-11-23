//代码已经完整
module game {
	export class BackpackMediator extends BaseMediator{

		public static NAME:string = "BackpackMediator";

		public constructor(viewComponet: any = null) {
			super(BackpackMediator.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_BACKPACK,
				PanelNotify.CLOSE_BACKPACK
			];
		}

		//重写消息处理
		private backpackPanel:Backpack = new Backpack();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_BACKPACK:
					//显示角色面板
					this.showUI(this.backpackPanel, false, 0, 0, 1);
					break;
				case PanelNotify.CLOSE_BACKPACK:
					this.closePanel(1);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);

			this.backpackPanel.saveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveInputData, this);
			this.backpackPanel.readBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reaInputdData, this);
			
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
			//this.sendNotification(PanelNotify.CLOSE_MAP);
		}


		private saveInputData(evt:egret.TouchEvent):void
		{
			readData.getGameDataProxy().setGameName(this.backpackPanel.inputText.text);
			this.backpackPanel.showText.text += "保存成功...\n" + readData.getGameDataProxy().getGameName() + "\n";
		}

		private reaInputdData(evt:egret.TouchEvent):void
		{
			this.backpackPanel.showText.text += readData.getGameDataProxy().getGameName() + "\n";
		}

		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}