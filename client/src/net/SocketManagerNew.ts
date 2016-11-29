module socketManagerNew {
	export class SocketManagerNew {
		private static socket:egret.WebSocket;

		/** 连接服务器 */
		public static connectServer(host:string="", port:number=80){
			Global.showWaritPanel();
			if(!this.socket){
				this.socket = new egret.WebSocket();
			}
			//默认就是字符串，所以不用
			//this.socket.type = egret.WebSocket.TYPE_STRING;
			this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
			this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);

			this.socket.connect(host, port);
		}

		//连接成功
		private static onSocketOpen():void{
			Global.hideWaritPanel();
			game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
		}

		//收到服务器消息
		private static onReceiveMessage():void{
			Global.hideWaritPanel();
			var msg = this.socket.readUTF();
			game.AppFacade.getInstance().sendNotification(ChartNotify.RECEIVE_CHART_MESSAGE, msg);

		}

		/** 向服务器发送消息 */
		public static sendMessage(message:string):void{
			Global.showWaritPanel();
			if(message != null){
				this.socket.writeUTF(message);
			}
		}
	}
}