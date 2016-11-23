module game {
	export class ChuangDang extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/Pannel/ChuangDangSkin.exml";
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


		/*-----------------------------------------------------------------------------------------
										        UI自定义变量
		-----------------------------------------------------------------------------------------*/
		public inputText:eui.TextInput;
		public okBtn:eui.Button;
		public closeBtn:eui.Button;


		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		private onUIComplete(event:eui.UIEvent):void
		{
			this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		}
	}
}