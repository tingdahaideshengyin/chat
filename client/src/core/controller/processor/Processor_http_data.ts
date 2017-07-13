module game {
	export class Processor_http_data extends puremvc.SimpleCommand implements puremvc.ICommand{

		public static NAME:string = "Processor_http_data";

		public constructor() {
			super();
			//多核版本，张鹏自己添加
			this.initializeNotifier("mainGame");
		}


		/** 注册消息 */
		public register():void{
			//this.facade().registerCommand("Processor_http_data",  Processor_http_data);
			this.facade().registerCommand(SysNotify.RECEIVE_HTTP_DATA, Processor_http_data);
		}


		public execute(notification:puremvc.INotification):void{
			var data:any = notification.getBody();//携带数据
			
			if(data == ""){
				return;
			}
			
			var jsonObject = JSON.parse(<string>data);
			this.dealtData(jsonObject);
		}


		//处理http服务器返回的数据
		private dealtData(jsonObject:any):void{
			var code:number = <number>jsonObject.code;
			switch(code){
				case 200:
					this.facade().sendNotification(LoginNotify.LOGIN_SUCCESS, jsonObject);
					readData.getLoginProxy().authToken = jsonObject.token;
					break;
				case 500:
					this.facade().sendNotification(LoginNotify.NOT_ACCOUNT_OR_PASSWORD);
					break;
				case 501:
					this.facade().sendNotification(LoginNotify.ACCOUNT_OR_PASSWORD_ERROR);
					break;
				case 502:
					this.facade().sendNotification(LoginNotify.ACCOUNT_OR_PASSWORD_ERROR);
					break;
			}
		}
	}
}