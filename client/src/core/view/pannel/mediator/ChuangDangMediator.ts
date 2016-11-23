module game {
	export class ChuangDangMediator extends BaseMediator {

		public static NAME:string = "ChuangDangMediator";

		public constructor(viewComponent: any = null) {
			super(ChuangDangMediator.NAME, viewComponent);
		}


		//重写面板类消息注册
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_CHUANGDANG,
				PanelNotify.CLOSE_CHUANGDANG
			];
		}


		//重写消息接收处理
		//收到消息
		private chuangDang:ChuangDang = new ChuangDang();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_CHUANGDANG:
					//显示角色面板
					this.showUI(this.chuangDang, false, 0, 0, Number(this.chuangDang.inputText.text));
					break;
				case PanelNotify.CLOSE_CHUANGDANG:
					this.closePanel(1);
					break;
			}
		}


		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.chuangDang.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);

			//其他按钮
			this.chuangDang.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnTouch, this);
		}

		/*-----------------------------------------------------------------------------------------
										        按钮消息处理
		-----------------------------------------------------------------------------------------*/
		//关闭按钮
		private onCloseBtnTouch(evt:egret.TouchEvent){
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.sendNotification(PanelNotify.CLOSE_MAP);
		}

		//按钮Tips特效
		private onOkBtnTouch(evt:egret.TouchEvent):void{
			var reOpenPanel:Function = function(){
				this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
				//this.facade().sendNotification(PanelNotify.OPEN_CHUANGDANG);
			}
			egret.setTimeout(reOpenPanel, this, 100)
			this.closePanel(0);
		}


		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}