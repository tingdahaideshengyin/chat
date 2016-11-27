module chart {
	export class MessageInfo {

		//消息数据
		private _data:chart.MessageData;
		//消息视图
		private _view:chart.MessageView;

		/**
		 * playerName=玩家名字
		 * headIconName = 头像资源名字
		 * saidText = 消息内容
		 * type=消息类型；0=自己发送的消息，1=接受到别人的消息
		 * time=发送消息的时间
		 */
		public constructor(playerName:string, headIconName:string, saidText:string, type:number, time:number) {
			this._data = new chart.MessageData(playerName, headIconName, saidText, type, time);
			this._view = new chart.MessageView(playerName, headIconName, saidText, type, time);
		}



		
		
		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		//设置数据
		//设置视图


		//显示名字
		private showName():void{
			
		}

		/*-----------------------------------------------------------------------------------------
										    	公共方法
		-----------------------------------------------------------------------------------------*/
		/** 获取视图 */
		public get view():egret.DisplayObjectContainer{
			return this._view;
		}

	}
}