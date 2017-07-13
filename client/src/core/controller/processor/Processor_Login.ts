module game {
	export class Processor_Login extends puremvc.SimpleCommand implements puremvc.ICommand{

		public static NAME:string = "Processor_Login";

		public constructor() {
			super();
			//多核版本，张鹏自己添加
			this.initializeNotifier("mainGame");
		}

		/** 注册消息 */
		public register():void{
			this.facade().registerCommand(LoginNotify.LOGIN_SUCCESS, Processor_Login);
			this.facade().registerCommand(LoginNotify.NOT_ACCOUNT_OR_PASSWORD, Processor_Login);
			this.facade().registerCommand(LoginNotify.ACCOUNT_OR_PASSWORD_ERROR, Processor_Login);
		}


		/** 收到消息后的处理函数 */
		public execute(notification:puremvc.INotification):void{
			var data:any = notification.getBody();//携带数据
			
			if(data == ""){
				return;
			}
			
			var jsonObject = JSON.parse(<string>data);
			//this.dealtData(jsonObject);
		}
	}
}