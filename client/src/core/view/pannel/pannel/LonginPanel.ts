module game {
	export class LonginPanel extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/Pannel/LonginPanel.exml";
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
		public nameInput:eui.TextInput;
		//密码输入框
		public passInput:eui.TextInput;

		//登陆按钮
		public loginButton:eui.Button;
		//关闭按钮
		public closeButton:eui.Button;

		//注册/登陆切换
		public changeText:eui.Label;


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