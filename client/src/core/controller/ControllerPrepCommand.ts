//代码已经完整
module game {
	/** 注册controller */
	export class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
		public constructor() {
			super();
			//多核版本，张鹏自己添加
			//this.initializeNotifier("mainGame");
		}

		public execute(notification:puremvc.INotification):void{
			(new SceneManager()).register();
			(new MainMansger()).register();

			//服务器返回command
			(new Processor_100_1()).register();
		}
	}
}