module chart {
	export class MessageView extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		private init():void{
			this.width = 400;

		}


		/** 文字背景 */
		private backGrounpImage:egret.Bitmap;
		/** 玩家头像 */
		private playerHeadIcon:egret.Bitmap;

		/** 文本框 */
		private textInfo:egret.TextField;
		/** 名字文本框 */
		private nameText:egret.TextField;
		/** 时间文本框 */
		private timeText:egret.TextField;


		/*-----------------------------------------------------------------------------------------
										        对外API
		-----------------------------------------------------------------------------------------*/
	}
}