module game {
	export class RoleMediator extends BaseMediator{

		public static NAME:string = "RoleMediator";

		public constructor(viewComponet: any = null) {
			super(RoleMediator.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_ROLE,
				PanelNotify.CLOSE_ROLE
			];
		}

		//重写消息处理
		private rolePanel:RolePanel = new RolePanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_ROLE:
					//显示角色面板
					this.showUI(this.rolePanel, false, 0, 0, 3);
					break;
				case PanelNotify.CLOSE_ROLE:
					this.closePanel(1);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
			this.rolePanel.readExcelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelData, this);

			
		}

		/*-----------------------------------------------------------------------------------------
										        按钮消息处理
		-----------------------------------------------------------------------------------------*/
		//关闭按钮
		private onCloseBtnTouch(evt:egret.TouchEvent):void{
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.facade().sendNotification(PanelNotify.CLOSE_MAP);
			//this.sendNotification(PanelNotify.CLOSE_MAP);
		}


		private readExcelData(evt:egret.TouchEvent):void{
			var dataProxy = readData.getTemplateDataProxy().getGameData();
			this.rolePanel.showText.text += dataProxy[this.rolePanel.keyInputText.text][this.rolePanel.inputText.text] + "\n";

		}

		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}