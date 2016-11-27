module game {
	export class MessagePanelMediator extends BaseMediator{

		public static NAME:string = "MessagePanelMediator";

		public constructor(viewComponet: any = null) {
			super(MessagePanelMediator.NAME, viewComponet);
		}


		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_MESSAGE,
				PanelNotify.CLOSE_MESSAGE
			];
		}

		//重写消息处理
		private messagePanel:MessagePanel = new MessagePanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_MESSAGE:
					//显示角色面板
					this.showUI(this.messagePanel, false, 0, 0, 1);
					break;
				case PanelNotify.CLOSE_MESSAGE:
					this.closePanel(1);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.messagePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
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

		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}