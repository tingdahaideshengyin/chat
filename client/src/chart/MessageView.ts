module chart {
	export class MessageView extends eui.Group {

		/** 消息类型0=自己，1=其他 */
		private _type:number = 0;

		/**
		 * playerName=玩家名字
		 * headIconName = 头像资源名字
		 * saidText = 消息内容
		 * type=消息类型；0=自己发送的消息，1=接受到别人的消息
		 * time=发送消息的时间
		 */
		public constructor(playerName:string, headIconName:string, saidText:string, type:number, time:number) {
			super();
			this._type = type;
			this.setPlayerIcon(headIconName);
			this.setPlayerName(playerName);
			this.setMessageText(saidText);
			this.showMessage();
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}

		
		/** 时间文本框 */
		private timeText:egret.TextField;

		/** 玩家名字 */
		private _playerName:string = "";
		/** 名字文本框 */
		private nameText:egret.TextField;
		/** 玩家名字最大长度 */
		private nameMaxLength:number = 12;

		/** 玩家头像 */
		private playerHeadIcon:egret.Bitmap;
		/** 玩家头像宽度 */
		private playerHeadIconWidth:number = 80;
		/** 玩家头像高度 */
		private playerHeadIconHeight:number = 80;

		/** 消息文本框 */
		private textInfo:egret.TextField;
		/** 消息文本框最大宽度 */
		private textInfoMaxWidth:number = 400;
		/** 消息文字背景 */
		private backGrounpImage:egret.Bitmap;

		//消息宽度，eui类 尺寸一旦固定，就无法自动改变，除非通过代码变
		private _messageWidth:number = 0;
		//消息高度，eui类 尺寸一旦固定，就无法自动改变，除非通过代码变
		private _messageHeight:number = 0;

		/*-----------------------------------------------------------------------------------------
										        显示相关函数
		-----------------------------------------------------------------------------------------*/
		/**
		 * 设置玩家头像
		 */
		private setPlayerIcon(iconName:string):void{
			if(!this.playerHeadIcon){
				this.playerHeadIcon = new egret.Bitmap();
				this.playerHeadIcon.texture = RES.getRes(iconName);
				this.playerHeadIcon.width = this.playerHeadIconWidth;
				this.playerHeadIcon.height = this.playerHeadIconHeight;
				//this.addChild(this.playerHeadIcon);
				return;
			}

			this.playerHeadIcon.texture = RES.getRes(iconName);
		}



		/**
		 * 设置玩家名字
		 * name = 玩家名字
		 */
		private setPlayerName(name:string):void{
			if(!this.nameText){
				this.nameText = new egret.TextField();
				this.nameText.textColor = 0x000000;
				//this.addChild(this.nameText);
			}
			this._playerName = name;
			this.nameText.text = name;
		}


		/** 
		 * 设置消息内容
		 * text = 发送消息的文字内容
		 */
		private setMessageText(text:string):void{
			if(!this.textInfo){
				this.backGrounpImage = new egret.Bitmap();
				this.backGrounpImage.texture = RES.getRes("tipsBg_png");
				this.addChild(this.backGrounpImage);

				this.textInfo = new egret.TextField();
				this.textInfo.textColor =  0x000000;
				//this.addChild(this.textInfo)
			}

			//设置文本显示方式
			this.textInfo.text = text;
			if(this.textInfo.width > this.textInfoMaxWidth){
				this.textInfo.width = this.textInfoMaxWidth;
			}
		}


		//消息背景面板与头像之间的间隔
		private _dis_backGrounpImage_playerHeadIcon:number = 5;
		//调整位置
		private showMessage():void{
			//背景框大小
			this.backGrounpImage.width = this.textInfo.width + 20;
			this.backGrounpImage.height = this.textInfo.height + 30;

			//玩家自己的消息
			if(this._type == 0){
				this.backGrounpImage.x = 0;
				this.backGrounpImage.y = 0;

				this.playerHeadIcon.x = this.backGrounpImage.x + this.backGrounpImage.width + 5;
			}

			//其他人的消息
			if(this._type == 1){
				this.playerHeadIcon.x = 5;
				this.playerHeadIcon.y = 5;

				this.nameText.x = this.playerHeadIcon.x + this.playerHeadIcon.width + 5;
				this.nameText.y = this.playerHeadIcon.y;

				this.backGrounpImage.x = this.nameText.x ;
				this.backGrounpImage.y = this.nameText.y + this.nameText.height + 5;
			}

			//文本消息位置
			this.textInfo.x = this.backGrounpImage.x + 15;
			this.textInfo.y = this.backGrounpImage.y + 15;

			//显示对象
			if(this._type == 1){
				this.addChild(this.nameText);
			}
			this.addChild(this.playerHeadIcon);
			this.addChild(this.textInfo);

			this._messageWidth = this.backGrounpImage.width + 5 + this.playerHeadIcon.width;
			this._messageHeight = this.backGrounpImage.height > this.playerHeadIcon.height ? this.backGrounpImage.height : this.playerHeadIcon.height ;
		}


		/*-----------------------------------------------------------------------------------------
										        对外API
		-----------------------------------------------------------------------------------------*/
		/** 
		 * 创建1个消息视图
		 * headIconName = 头像资源名称
		 * playerName = 玩家名字
		 * textInfo = 消息文本
		 */
		public updateView(playerName:string, headIconName:string, saidText:string, type:number, time:number):void{
			this._type = type;
			this.setPlayerIcon(headIconName);
			this.setPlayerName(playerName);
			this.setMessageText(saidText);
			this.showMessage();
		}

		/** 获取消息宽度 */
		public get messageWidth():number{
			return this._messageWidth;
		}

		/** 获取消息高度 */
		public get messageHeight():number{
			return this._messageHeight;
		}
	}
}