module game {
	export class MessagePanelMediator extends BaseMediator{

		public static NAME:string = "MessagePanelMediator";

		public constructor(viewComponet: any = null) {
			super(MessagePanelMediator.NAME, viewComponet);
		}


		//重写消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_MESSAGE,
				PanelNotify.CLOSE_MESSAGE,
				ChartNotify.SEND_CHART_MESSAGE,
				ChartNotify.RECEIVE_CHART_MESSAGE,
				SysNotify.CONNECT_SERVER_SUCCESS,
			];
		}

		//重写消息处理
		private messagePanel:MessagePanel = new MessagePanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_MESSAGE:
					//显示消息面板
					this.showUI(this.messagePanel, false, 0, 0, 1);
					//连接服务器
					this.connectServer();
					break;
				case PanelNotify.CLOSE_MESSAGE:
					this.closePanel(1);
					break;
				case ChartNotify.SEND_CHART_MESSAGE:
					//发送消息
					this.showMessageView(data, 0);
					socketManagerNew.SocketManagerNew.sendMessage(JSON.stringify(data));
					break;
				case ChartNotify.RECEIVE_CHART_MESSAGE:
					//接收到消息
					var jsonObject = JSON.parse(<string>data);
					//var jsonObject2 = eval('(' + data + ')');
					this.showMessageView(jsonObject, 1);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.messagePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);
			this.messagePanel.sendInfoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSendInfoBtnTouch, this);
		}

		/*-----------------------------------------------------------------------------------------
										        按钮消息处理
		-----------------------------------------------------------------------------------------*/
		//关闭按钮
		private onCloseBtnTouch(evt:egret.TouchEvent){
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.facade().sendNotification(PanelNotify.CLOSE_MAP);
			//this.sendNotification(PanelNotify.CLOSE_MAP);
		}

		//发送消息按钮
		private onSendInfoBtnTouch(evt:egret.TouchEvent){
			var saidText:string = this.messagePanel.textInput.text;
			if(saidText == ""){
				EffectUtils.showTips("不能发送空消息", 5, true);
				return;
			}
			
			this.messagePanel.textInput.text = "";

			var playerName:string = this.messagePanel.nameInput.text || "游客";
			var dataJson = {
				"playerName":playerName,
				"headIconName":"head5_jpg",
				"saidText":saidText,
				"time":0
			}
			//var data:chart.MessageData = new chart.MessageData(playerName, "", saidText, 0, 0)
			this.facade().sendNotification(ChartNotify.SEND_CHART_MESSAGE, dataJson);
		}


		/*-----------------------------------------------------------------------------------------
										        创建消息
		-----------------------------------------------------------------------------------------*/
		//消息列表
		private messageViewArray:chart.MessageView[] = [];
		//当前消息列表Y位置,初始位置=20
		private currentYPos:number = 20;
		//第1次超出视域时候的数值
		private firstDis:number = 0;
		//两条消息之间的间隔
		private distance:number = 30;
		private showMessageView(data:any, showtType:number){
			var playerName:string = <string>data.playerName;
			var headIconName:string = <string>data.headIconName;
			var saidText:string = <string>data.saidText;
			var time:number = <number>data.time;
			var messageView:chart.MessageView = new chart.MessageView(playerName, headIconName, saidText, showtType, time);
			messageView.y = this.currentYPos;
			if(showtType == 0){
				messageView.x = this.messagePanel.viewScroller.width - messageView.messageWidth - 5;
			}

			//刷新视域位置
			if(this.firstDis == 0){
				var dis:number = this.currentYPos + messageView.messageHeight;
				if(dis > this.messagePanel.viewScroller.height){
					this.firstDis = dis - this.messagePanel.viewScroller.height;
					this.messagePanel.viewScroller.viewport.scrollV += this.firstDis;
				}
			}else if(this.firstDis > 0){
				this.messagePanel.viewScroller.viewport.scrollV += (messageView.messageHeight + this.distance);
			}

			this.messagePanel.messageGroup.addChild(messageView);
			this.currentYPos += messageView.messageHeight + this.distance;
		}


		
		/*-----------------------------------------------------------------------------------------
										        socket通信
		-----------------------------------------------------------------------------------------*/
		private connectServer():void{
			socketManagerNew.SocketManagerNew.connectServer("192.168.1.188", 8888);
		}



		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}