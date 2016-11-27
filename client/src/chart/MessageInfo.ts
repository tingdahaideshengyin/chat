module chart {
	export class MessageInfo {

		/** 消息类型0=自己，1=其他 */
		private _type:number = 0;

		public constructor(type:number=0) {
			this._type = type;
		}



		private _view:chart.MessageView;
		private _data:chart.MessageData;
		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		//设置数据
		//设置视图



		/*-----------------------------------------------------------------------------------------
										    	公共方法
		-----------------------------------------------------------------------------------------*/
		/** 获取视图 */
		public get view():egret.DisplayObjectContainer{
			return this._view;
		}

	}
}