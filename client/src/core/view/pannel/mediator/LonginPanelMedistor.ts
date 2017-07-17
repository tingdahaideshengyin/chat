module game {
	export class LonginPanelMedistor extends BaseMediator{

		public static NAME:string = "LonginPanelMedistor";

		public constructor(viewComponet: any = null) {
			super(LonginPanelMedistor.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_LOGIN,
				PanelNotify.CLOSE_LOGIN,
				//LoginNotify.SEND_CHART_MESSAGE,
				//LoginNotify.RECEIVE_CHART_MESSAGE,
				LoginNotify.ACCOUNT_OR_PASSWORD_ERROR,
				LoginNotify.LOGIN_SUCCESS,
				LoginNotify.NOT_ACCOUNT_OR_PASSWORD
			];
		}


		//重写消息处理
		private loginPanel:game.LonginPanel = new LonginPanel();;
		public handleNotification(notification: puremvc.INotification):void
		{
			switch(notification.getName()){
				case PanelNotify.OPEN_LOGIN:
					this.showUI(this.loginPanel, false, 0, 0, 1);
					break;
				case PanelNotify.CLOSE_LOGIN:
					//关闭消息面板
					this.closePanel(1);
					break;
				case LoginNotify.RECEIVE_CHART_MESSAGE:
					//服务器返回结果
					var data: any = notification.getBody();
					if(data == ""){
						return;
					}
					var jsonObject = JSON.parse(<string>data);
					this.checkData(jsonObject);
					break;
				case LoginNotify.ACCOUNT_OR_PASSWORD_ERROR:
					console.log(5001-5002);
					break;
				case LoginNotify.LOGIN_SUCCESS:
					console.log(200);
					break;
				case LoginNotify.NOT_ACCOUNT_OR_PASSWORD:
					console.log(500);
					break;
				case LoginNotify.ACCOUNT_IS_EXISTENT:
					console.log(601);
				case LoginNotify.ACCOUNT_CREATE_ERROR:
					console.log(602);
			}
		}



		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//登陆按钮
			this.loginPanel.loginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendLoginMessage, this);
			//关闭按钮
			this.loginPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
			//注册登陆切换
			this.loginPanel.changeText.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeText, this);
			
		}


		//-------------------------------------------------------------------------------------------
		//发送登陆消息
		//-------------------------------------------------------------------------------------------
		private sendLoginMessage():void{
			//检测用户名是否符合规范
			var name:string = this.loginPanel.nameInput.text;
			this.checkName(name);
			//检测密码是否符合规范
			var pwd:string = this.loginPanel.passInput.text;
			this.checkPassword(pwd);
			var data:string = "userName="+ name + "&" + "password=" + pwd;

			if(this.currentType == "login"){
				net.HttpManager.connectServerWithPost(GlobalData.getAccountServer() + "/login", data);
				//net.HttpManager.connectServerWithPost("http://192.168.1.222:3001/login", data);
			}else{
				net.HttpManager.connectServerWithPost(GlobalData.getAccountServer() + "/register", data);
				//net.HttpManager.connectServerWithPost("http://192.168.1.222:3001/register", data);
			}
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
			//this.sendNotification(PanelNotify.CLOSE_LOGIN);
		}

		/** 关闭后，需要销毁的对象,在this.closePanel(1)后调用 */
		public destroy():void{
			//this.loginPanel = null;
		}


		//-------------------------------------------------------------------------------------------
		//登陆与注册切换
		//-------------------------------------------------------------------------------------------
		private currentType:string = "login";
		private changeText(evt:egret.TouchEvent):void{
			if(this.currentType == "login"){
				this.loginPanel.loginButton.label = "注册";
				this.loginPanel.changeText.text = "使用已有账号";
				this.currentType = "register";
			}else{
				this.loginPanel.loginButton.label = "登陆";
				this.loginPanel.changeText.text = "注册新用户";
				this.currentType = "login";
			}
			this.loginPanel.nameInput.text = "";
			this.loginPanel.passInput.text = "";
		}
	}
}