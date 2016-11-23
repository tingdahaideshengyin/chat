
module game {
	/** 主城UI */
	export class HomeCity extends eui.Component{

		
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/HomeCitySkin.exml";
			this.addEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
		}


		private createCompleteEvent(event:eui.UIEvent):void{
			this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
			//game.Appfacade.getinstance().registerMediator(new RoleMediator(this));
			GameLayerManager.gameLayer().sceneLayer.addChild(this);
		}


		public partAdded(partName:string, instance:any):void
		{
			super.partAdded(partName, instance);
		}

		
	}
}