module game {
	export class MessagePanel extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/Pannel/ChartSkin.exml";
			this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
			//this.onUIComplete();
		}

		/*-----------------------------------------------------------------------------------------
										        UI自定义变量
		-----------------------------------------------------------------------------------------*/
		public nameInput:eui.TextInput;
		public textInput:eui.TextInput;

		public sendInfoBtn:eui.Button;
		public closeBtn:eui.Button;

		public viewScroller:eui.Scroller;
		public messageGroup:eui.Group;

		public bgImage:eui.Image;

		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		private onUIComplete(event:eui.UIEvent):void
		//private onUIComplete():void
		{
			this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);

			if(!this.messageGroup){
				this.messageGroup = new eui.Group();
			}


			if(!this.viewScroller){
				this.viewScroller = new eui.Scroller();
				this.viewScroller.width = this.bgImage.width;
				this.viewScroller.height = this.bgImage.height;
				this.viewScroller.x = this.bgImage.x;
				this.viewScroller.y = this.bgImage.y;
				this.viewScroller.viewport = this.messageGroup;
				//this.viewScroller.verticalScrollBar.autoVisibility = false;
				//this.viewScroller.verticalScrollBar.visible = true;
				this.addChild(this.viewScroller);
			}
		}
	}
}