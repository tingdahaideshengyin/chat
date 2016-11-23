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
	}
}