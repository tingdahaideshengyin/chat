
//已完整
/** 
 * 主界面管理器
 * 所有的弹窗都要在register注册事件
 * 在execute添加消息处理面板打开关闭事件
 */
module game{
	export class MainMansger extends puremvc.SimpleCommand implements puremvc.ICommand{

		private mainUI:game.MainUI;
		public static NAME:string = "MainManager";

		public constructor() {
			super();
			//多核版本，张鹏自己添加
			this.initializeNotifier("mainGame");
		}

		/** 注册消息 */
		public register():void{
			this.facade().registerCommand(MainNotify.OPEN_MAIN, MainMansger);
			this.facade().registerCommand(MainNotify.CLOSE_MAIN, MainMansger);
		}

		public execute(notification:puremvc.Notification):void{
			var data:any = notification.getBody();//携带数据
			var panelCon = GameLayerManager.gameLayer().mainLayer;
			switch(notification.getName()){
				case MainNotify.OPEN_MAIN:
					if(this.mainUI == null){
						this.mainUI = new game.MainUI();
						panelCon.addChild(this.mainUI);
					}
					break;
				
				case MainNotify.CLOSE_MAIN:
					if(this.mainUI != null){
						panelCon.removeChild(this.mainUI);
						this.mainUI = null;
					}
					break;
			}
		}

	}
}