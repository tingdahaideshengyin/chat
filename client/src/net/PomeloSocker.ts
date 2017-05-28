module pomelo {
	export class PomeloSocker {
		private static socket:egret.WebSocket;

		/** 连接服务器 */
		public static connectServer(host:string="", port:number=80){
			Global.showWaritPanel();
			if(!this.socket){
				this.socket = new egret.WebSocket();
			}
			//以二进制格式发送数据
			this.socket.type = egret.WebSocket.TYPE_BINARY;
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
			//var msg = this.socket.readUTF();
			//game.AppFacade.getInstance().sendNotification(ChartNotify.RECEIVE_CHART_MESSAGE, msg);
        	var _arr:egret.ByteArray = new egret.ByteArray();
        	this.socket.readBytes(_arr);
        	//var mainId = _arr.readInt();
        	//var subId = _arr.readShort();
        	var cmdDataBA:egret.ByteArray = new egret.ByteArray();
        	_arr.readBytes(cmdDataBA);
			game.AppFacade.getInstance().sendNotification(SysNotify.SERVER_BACK_DATA, cmdDataBA);

		}

		/** 向服务器发送消息 */
		public static sendMessage(message:string):void{
			Global.showWaritPanel();
			if(message != null){
				this.socket.writeUTF(message);
			}
		}

		/** 断开连接 */
		public static closeNet():void{
			if(this.socket.connected == true){
				this.socket.close();
			}
		}
	}
}