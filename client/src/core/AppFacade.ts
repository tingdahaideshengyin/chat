module game {
	export class AppFacade extends puremvc.Facade implements puremvc.IFacade{

		public constructor(key:string) {
			super(key);
		}


		/** 多核识别标识 */
		private  static _multitonKey:string = "mainGame";
		public static getInstance():AppFacade{
			if(this.instanceMap[ this._multitonKey ] == null){
				this.instanceMap[ this._multitonKey ] = new AppFacade(this._multitonKey);
			}
			return <AppFacade><any>(this.instanceMap[ this._multitonKey ]);
		}


		public static STARTUP:string = "startup";


		public initializeController():void{
			super.initializeController();
			this.registerCommand(AppFacade.STARTUP, StartupCommand);
		}

	

		/**
		 * 启动PureMvc 在用用程序中调用此方法，并传递应用程序本身的引用
		 * @param rootView 
		 * 		PureMvc应用程序的根视图root，包含其他所有的View Compont
		 */
		public startUp(rootView:egret.DisplayObjectContainer){
			this.sendNotification(AppFacade.STARTUP,rootView);
			//PureMvc初始化完成，注销STARTUP命令
			this.removeCommand(AppFacade.STARTUP);
		}
	}
}