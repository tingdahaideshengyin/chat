//代码已经完整

module game {
	/** 初始化MVC controller */
	export class StartupCommand extends puremvc.MacroCommand {

		public constructor() {
			super();
			///多核版本，张鹏自己添加
			//this.multitonKey = "mainGame";
		}

		public initializeMacroCommand():void{
			this.addSubCommand( ControllerPrepCommand );
			this.addSubCommand( ModelPrepCommand );
			this.addSubCommand( ViewPrepCommand );
		}
	}
}