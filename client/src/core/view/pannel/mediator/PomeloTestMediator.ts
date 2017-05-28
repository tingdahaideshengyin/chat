module game {
	export class PomeloTestMediator extends BaseMediator{

		public static NAME:string = "PomeloTestMediator";
		
		public constructor(viewComponet: any = null) {
			super(PomeloTestMediator.NAME, viewComponet);
		}

		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_POMELO,
				PanelNotify.CLOSE_POMELO
			];
		}

		//重写消息处理
		private pomeloTest:PomeloTest = new PomeloTest();
		public handleNotification(notification: puremvc.INotification):void
		{
			switch(notification.getName()){
				case PanelNotify.OPEN_POMELO:
					//显示消息面板
					this.showUI(this.pomeloTest, false, 0, 0, 1);
					break;
				case PanelNotify.CLOSE_POMELO:
					//关闭消息面板
					this.closePanel(1);
					break;
				case SysNotify.SERVER_BACK_DATA:
					//服务器返回结果
					var data: any = notification.getBody();
					//接收到消息
					if(data == ""){
						return;
					}
					this.onServerBackData(data);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//连接按钮
			this.pomeloTest.conectButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.connectToserver, this);
			//断开按钮
			this.pomeloTest.stopButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStopButtonTouch, this)
			//关闭按钮
			this.pomeloTest.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
			
		}

		//-------------------------------------------------------------------------------------------
		//发送登陆消息
		//-------------------------------------------------------------------------------------------
		private connectToserver():void{
			var host:string = "192.168.1.222";
			var port:number = 3010;
			pomelo.PomeloSocker.connectServer(host, port);
		}

		//断开按钮
		private onStopButtonTouch():void{
			pomelo.PomeloSocker.closeNet();
		}


		//-------------------------------------------------------------------------------------------
		//关闭按钮
		//-------------------------------------------------------------------------------------------
		private onCloseBtnTouch():void{
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.facade().sendNotification(PanelNotify.CLOSE_MAP);
			//this.sendNotification(PanelNotify.CLOSE_MAP);
		}


		//-------------------------------------------------------------------------------------------
		//收到服务器消息
		//-------------------------------------------------------------------------------------------
		private onServerBackData(data:any):void{
			this.pomeloTest.showText.text = <string>data;
		}


	}
}