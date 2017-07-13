module net {
	export class HttpManager {
		//http请求连接
		private static httpRequest:egret.HttpRequest;

		/** 
		 * 通过Post方法连接服务器
		 * url:sring 例如 "http://123.207.53.160:3001/login"", Data:string 请求的数据
		 */
		public static connectServerWithPost(url:string, data:string = ""):void{
			Global.showWaritPanel();
			if(!this.httpRequest){
				this.httpRequest =  new egret.HttpRequest();
			}
			this.httpRequest.responseType = egret.HttpResponseType.TEXT;
			this.httpRequest.open(url, egret.HttpMethod.POST);
			//默认以表单形式发送，可不写，本身就是表单形式，官方说法：不可修改消息头，可能引起兼容性问题
			this.httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			if(data != "") {
				this.httpRequest.send(data);
			}

			this.httpRequest.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
			this.httpRequest.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
			//httpRequest.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
		}

		/** 消息请求完成 */
		private static onPostComplete(event:egret.Event):void{
			Global.hideWaritPanel();
			this.httpRequest.removeEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
			var request = <egret.HttpRequest>event.currentTarget;
			var msg = request.response;
			game.AppFacade.getInstance().sendNotification(SysNotify.RECEIVE_HTTP_DATA, msg);
		}

		/** 请求消息出错 */
		private static onPostIOError(event:egret.IOErrorEvent):void {
			Global.hideWaritPanel();
			this.httpRequest.removeEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
			egret.log("post error : " + event);
		}

		/** 消息进度 */
		private static onPostProgress(event:egret.ProgressEvent):void {
			this.httpRequest.removeEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
			egret.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
		}
	}
}