module game {
	export class RegisterPanel extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/Pannel/RegisterPanel.exml";
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
		//名字输入框
		public nameInput:eui.EditableText;
		//密码输入框
		public passInput:eui.EditableText;

		//注册按钮
		public registerButton:eui.Button;
		//关闭按钮
		public closeButton:eui.Button;


		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		private onUIComplete(event:eui.UIEvent):void{
			this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);

			//居中对齐
			this.x = (GameConfig.curWidth() - this.width /2) / 2;
			this.y = (GameConfig.curHeight() - this.height /2) /2;
		}

	}
}