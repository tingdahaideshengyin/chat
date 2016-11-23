module game {
	export class FunctionBar extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/FunctionBarSkin.exml";
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
		//角色信息按钮
		public roleBtn:eui.Button;
		//背包按钮
		public backpackBtn:eui.Button;
		//强化按钮
		public qianghuaBtn:eui.Button;
		//招贤按钮
		public zhaoXianBtn:eui.Button;
		//闯荡按钮
		public chuangDangBtn:eui.Button;
		//商店按钮
		public shopBtn:eui.Button;
		//地图按钮
		public mapBtn:eui.Button;
	}
}