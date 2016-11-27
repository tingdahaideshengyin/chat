module chart {
	export class MessageData {

		/** 玩家名字 */
		private _playerName:string = "";
		/** 玩家头像ICON */
		private _playerHeadIconName:string = "";
		/** 消息内容 */
		private _playerSaidText:string = "";
		/** 消息时间 */
		private _time:number = 0;
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
			this._playerName = playerName;
			this._playerHeadIconName = headIconName;
			this._playerSaidText = saidText;
			this._type = type;
			this._time = time;
		}

		/*-----------------------------------------------------------------------------------------
										        对外API
		-----------------------------------------------------------------------------------------*/
		/** 获取玩家名字 */
		public get playerName():string{
			return this._playerName;
		}

		/** 设置玩家名字 */
		public set playerName(playerName:string){
			this._playerName = playerName;
		}
		
		/** 获取玩家头像资源名字 */
		public get playerHeadIconName():string{
			return this._playerHeadIconName;
		}

		/** 设置玩家头像资源名字 */
		public set playerHeadIconName(headIconName:string){
			this._playerHeadIconName = headIconName;
		}

		/** 获取玩家消息内容 */
		public get playerSaidText():string{
			return this._playerSaidText;
		}

		/** 设置玩家消息内容 */
		public set playerSaidText(saidText:string){
			this._playerSaidText = saidText;
		}

		/** 获取玩家消息类型 */
		public get type():number{
			return this._type;
		}

		/** 设置玩家消息类型 */
		public set type(type:number){
			this._type = type;
		}

		/** 获取玩家消息时间 */
		public get time():number{
			return this._time;
		}

		/** 获取玩家消息时间 */
		public set time(time:number){
			this._time = time;
		}
	}
}