module game {
	export class ActivityBar extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/ActivifyBarSkin.exml";
			this.addEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}

		private createCompleteEvent(event:eui.UIEvent):void{
			this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
			//game.Appfacade.getinstance().registerMediator(new RoleMediator(this));
			//GameLayerManager.gameLayer().sceneLayer.addChild(this);
		}

		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		//消息按钮
		public infoBtn:eui.Button;

		//登陆按钮
		public loginButton:eui.Button;

		//注册按钮
		public registerButton:eui.Button;
	}
}