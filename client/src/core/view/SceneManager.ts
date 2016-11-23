//已经完整
/**
 * 场景管理类
 * 所有的弹窗都需要在register注册事件
 * 在 execute添加消息处理面板打开关闭事件
 */
module game{
	export class SceneManager extends puremvc.SimpleCommand implements puremvc.ICommand{
		public constructor() {
			super();
			//多核版本，张鹏自己添加
			this.initializeNotifier("mainGame");
		}

		private homeCity:HomeCity;
		//private mainUI:game.MainUI;
		public static NAME:string = "SceneManager";

		/** 注册消息 */
		public register():void{
			this.facade().registerCommand(SceneNotify.OPEN_HOME, SceneManager);
			this.facade().registerCommand(SceneNotify.CLOSE_HOME, SceneManager);
		}

		public execute(notification:puremvc.INotification):void{
			var data:any = notification.getBody();//携带数据
			var panelCon = GameLayerManager.gameLayer().sceneLayer;
			switch(notification.getName()){
				case SceneNotify.OPEN_HOME:
					if(this.homeCity == null){
						this.homeCity = new HomeCity();
						panelCon.addChild(this.homeCity);
						//this.mainUI = new MainUI();
						//panelCon.addChild(this.mainUI);
					}
					break;
				
				case SceneNotify.CLOSE_HOME:
					if(this.homeCity != null){
						panelCon.removeChild(this.homeCity);
						this.homeCity = null;
					}
					break;
			}
		}
	}
}