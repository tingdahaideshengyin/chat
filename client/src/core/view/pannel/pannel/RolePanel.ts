module game {
	export class RolePanel extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/Pannel/RolePanelSkin.exml";
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
		public closeBtn:eui.Button;
		public readExcelBtn:eui.Button;

		public keyInputText:eui.TextInput;
		public inputText:eui.TextInput;

		public showText:eui.Label;



		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		private onUIComplete(event:eui.UIEvent):void
		{
			this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		}
	}
}