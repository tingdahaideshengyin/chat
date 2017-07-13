
//代码已经完整
module game {
	/** 注册proxy */
	export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
		public constructor() {
			super();
			//多核版本，张鹏自己添加
			//this.initializeNotifier("mainGame");
		}

		public execute(notification:puremvc.INotification):void
		{
			//excel数据
			this.facade().registerProxy( new TemplateProxy() );

			//游戏其他需要储存的数据
			this.facade().registerProxy( new GameProxy() );

			//游戏登陆数据
			this.facade().registerProxy( new LoginProxy() );
		}
	}
}