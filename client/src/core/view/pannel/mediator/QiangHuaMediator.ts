module game {
	export class QiangHuaMediator extends BaseMediator{

		public static NAME:string = "QiangHuaMediator";

		public constructor(viewComponet: any = null) {
			super(QiangHuaMediator.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_QIANGHUA,
				PanelNotify.CLOSE_QIANGHUA,
				SysNotify.CONNECT_SERVER_SUCCESS,
				UserInfoNotify.UPDATE_DATA
			];
		}

		//重写消息处理
		private qiangHuaPanel:QiangHuaPanel = new QiangHuaPanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_QIANGHUA:
					//显示角色面板
					this.showUI(this.qiangHuaPanel, false, 0, 0, 4);
					break;
				case PanelNotify.CLOSE_QIANGHUA:
					this.closePanel(1);
					break;
				case SysNotify.CONNECT_SERVER_SUCCESS:
					this.qiangHuaPanel.showText.text += "服务器连接成功...\n";
					break;
				case UserInfoNotify.UPDATE_DATA:
					this.qiangHuaPanel.showText.text += "userID:" + data.getUserId() + "\nuserName:" + data.getUserName();
					break;
			}
		}


		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.qiangHuaPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);

			this.qiangHuaPanel.sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendMessage, this);
			this.qiangHuaPanel.loadBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.connectServer, this);

			
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


		private sendMessage(evt:egret.TouchEvent):void{
			UserInfoRequest.sendUserInfo(Number(this.qiangHuaPanel.idInputText.text), this.qiangHuaPanel.nameInputText.text);
		}


		private connectServer(evt:egret.TouchEvent):void{
			SocketManager.connectServer("echo.websocket.org", 80);
		}
		

		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}