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
		public nameInput:eui.EditableText;
		public currentHeadIConName:string = "";
		public selectImage:egret.Bitmap;

		public textInput:eui.EditableText;

		public sendInfoBtn:eui.Button;
		public closeBtn:eui.Button;

		public viewScroller:eui.Scroller;
		public messageGroup:eui.Group;

		public bgImage:eui.Image;

		public headICon_1:eui.Image;
		public headICon_2:eui.Image;
		public headICon_3:eui.Image;
		public headICon_4:eui.Image;
		public headICon_5:eui.Image;

		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		private onUIComplete(event:eui.UIEvent):void
		//private onUIComplete():void
		{
			this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);

			//消息容器
			if(!this.messageGroup){
				this.messageGroup = new eui.Group();
			}

			//视窗
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

			//消息输入框
			/**
			if(!this.textInput){
				this.textInput = new egret.TextField();
				this.textInput.background = true;//默认白色
				this.textInput.backgroundColor = 0xffffff;
				this.textInput.width = 600;
				this.textInput.height = 208;
				this.textInput.x = 24;
				this.textInput.y = 700;
				this.textInput.size = 30;
				this.textInput.type = egret.TextFieldType.INPUT;
				this.textInput.textAlign = "left";
				//this.textInput.verticalAlign = "top";
				this.textInput.multiline = true;
				this.textInput.lineSpacing = 1;
				this.textInput.setFocus();
				this.addChild(this.textInput);
			}
			**/
			
		}
	}
}