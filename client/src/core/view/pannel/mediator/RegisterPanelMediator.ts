module game {
	export class RegisterPanelMediator extends BaseMediator{

		public static NAME:string = "RegisterPanelMediator";
		
		public constructor(viewComponet: any = null) {
			super(RegisterPanelMediator.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_RESISTER,
				PanelNotify.CLOSE_RESISTER,
				RegisterNotify.SEND_CHART_MESSAGE,
				RegisterNotify.RECEIVE_CHART_MESSAGE
			];
		}

		//重写消息处理
		private registerPanel:game.RegisterPanel = new game.RegisterPanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			switch(notification.getName()){
				case PanelNotify.OPEN_RESISTER:
					//显示消息面板
					this.showUI(this.registerPanel, false, 0, 0, 1);
					break;
				case PanelNotify.CLOSE_RESISTER:
					//关闭消息面板
					this.closePanel(1);
					break;
				case RegisterNotify.RECEIVE_CHART_MESSAGE:
					//服务器返回结果
					var data: any = notification.getBody();
					if(data == ""){
						return;
					}
					var jsonObject = JSON.parse(<string>data);
					this.checkData(jsonObject);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//登陆按钮
			this.registerPanel.registerButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendLoginMessage, this);
			//关闭按钮
			this.registerPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
			
		}

		//-------------------------------------------------------------------------------------------
		//发送登陆消息
		//-------------------------------------------------------------------------------------------
		private sendLoginMessage():void{
			//检测用户名是否符合规范
			var name:string = this.registerPanel.nameInput.text;
			this.checkName(name);
			//检测密码是否符合规范
			var password:string = this.registerPanel.passInput.text;
			this.checkPassword(password);
			var data:string = "userName="+ name + "&" + "userPassword=" + password;

			HttpManager.connectServer("http://192.168.1.11:3002/register", data);
		}

		//检测用户名是否符合规范
		private checkName(name:string):void{

		}

		//检测用户名是否符合规范
		private checkPassword(password:string):void{

		}


		//-------------------------------------------------------------------------------------------
		//服务器返回消息处理
		//-------------------------------------------------------------------------------------------
		private checkData(data:any):void{
			console.log(data);
		}


		//关闭按钮
		private onCloseBtnTouch(evt:egret.TouchEvent){
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.facade().sendNotification(PanelNotify.CLOSE_MAP);
			//this.sendNotification(PanelNotify.CLOSE_MAP);
		}
	}
}