module game {
	/** 地图面板类 */
	export class MapPanel extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/Pannel/MapPannel.exml";
			this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		}


		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}


		public closeBtn:eui.Button;
		public btn0:eui.Button;
		public btn1:eui.Button;
		public btn2:eui.Button;
		public btn3:eui.Button;
		public btn4:eui.Button;
		public btn5:eui.Button;

		public img0:eui.Image;
		public img1:eui.Image;
		public img2:eui.Image;
		public img3:eui.Image;
		public img4:eui.Image;
		public img5:eui.Image;


		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		private onUIComplete(event:eui.UIEvent):void
		{
			this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		}
	}
}