module game {
	export class ShopMediator extends BaseMediator {

		public static NAME:string = "ShopMediator";

		public constructor(viewComponet: any = null) {
			super(ShopMediator.NAME, viewComponet);
		}

		//重新消息列表
		public listNotificationInterests():Array<any>{
			return [
				PanelNotify.OPEN_SHOP,
				PanelNotify.CLOSE_SHOP
			];
		}

		//消息处理
		private shopPanel:ShopPanel = new ShopPanel();
		public handleNotification(notification: puremvc.INotification):void
		{
			var data: any = notification.getBody();
			switch(notification.getName())
			{
				case PanelNotify.OPEN_SHOP:
					//显示角色面板
					this.showUI(this.shopPanel, false, 0, 0, 6);
					break;
				case PanelNotify.CLOSE_SHOP:
					this.closePanel(1);
					break;
			}
		}

		/*-----------------------------------------------------------------------------------------
										        初始化UI
		-----------------------------------------------------------------------------------------*/
		public initUI():void{
			//关闭按钮
			this.shopPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTouch, this);

			//其他按钮
			this.shopPanel.btn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn0Touch, this);
			this.shopPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn1Touch, this);
			this.shopPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn2Touch, this);
			this.shopPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn3Touch, this);
			this.shopPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn4Touch, this);
			this.shopPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn5Touch, this);
			this.shopPanel.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn6Touch, this);
			this.shopPanel.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn7Touch, this);
			this.shopPanel.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn8Touch, this);
			this.shopPanel.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn9Touch, this);
		}


		private isPLay0: boolean = false;
		private isPLay1: boolean = false;
		private isPLay2: boolean = false;
		private isPLay3: boolean = false;
		private isPLay4: boolean = false;
		private isPLay5: boolean = false;
		private isPLay6: boolean = false;
		private isPLay7: boolean = false;
		private isPLay8: boolean = false;
		private isPLay9: boolean = false;
		/*-----------------------------------------------------------------------------------------
										        按钮消息处理
		-----------------------------------------------------------------------------------------*/
		//关闭按钮
		private onCloseBtnTouch(evt:egret.TouchEvent){
			this.closePanel(1);
			//下面的方法也可行，但是发送消息，多用于不同对象(class)之间的通信
			//如果是相同对象，直接调用本对象方法更容易
			//this.facade().sendNotification(PanelNotify.CLOSE_MAP);
		}

		//按钮特效
		private onBtn0Touch(evt:egret.TouchEvent):void{
			if(!this.isPLay0){
				EffectUtils.showTips("旋转特效", 5);
				EffectUtils.rotationEffect(this.shopPanel.img0, 1000);
				this.isPLay0 = true;
			}else{
				EffectUtils.showTips("取消旋转特效", 5);
				EffectUtils.removeRotationEffect(this.shopPanel.img0);
				this.isPLay0 = false;
			}
		}

		private onBtn1Touch(evt:egret.TouchEvent):void{
			if(!this.isPLay0){
				EffectUtils.showTips("中心旋转特效", 5);
				EffectUtils.rotationEffect(this.shopPanel.img1, 1000);
				this.isPLay0 = true;
			}else{
				EffectUtils.showTips("取消中心旋转特效", 5);
				EffectUtils.removeRotationEffect(this.shopPanel.img1);
				this.isPLay0 = false;
			}
		}

		private onBtn2Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("闪烁特效", 5);
			EffectUtils.blinkEffect(this.shopPanel.img2, 1000);
		}

		private onBtn3Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("抖动特效", 5);
			EffectUtils.shakeObj(this.shopPanel.img3);
		}

		private onBtn4Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("按下弹大", 5);
			EffectUtils.playEffect(this.shopPanel.img4, 1);
		}

		private onBtn5Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("按下轻微弹大", 5);
			EffectUtils.playEffect(this.shopPanel.img5, 2);
		}

		private onBtn6Touch(evt:egret.TouchEvent):void{
			EffectUtils.showTips("按下变小，放开变大", 5);
			EffectUtils.playEffect(this.shopPanel.img6, 3);
		}

		private onBtn7Touch(evt:egret.TouchEvent):void{
			if(!this.isPLay7){
				this.isPLay7 = true;
				EffectUtils.showTips("持续变大变小", 5);
				EffectUtils.playScaleEffect(this.shopPanel.img7);
			}else{
				EffectUtils.showTips("正在持续变大变小", 5);
			}
		}

		private onBtn8Touch(evt:egret.TouchEvent):void{
			if(!this.isPLay8){
				this.isPLay8 = true;
				EffectUtils.showTips("上下浮动", 5);
				EffectUtils.flyObj(this.shopPanel.img8, 1000, 15);
			}else{
				EffectUtils.showTips("正在上下浮动", 5);
			}
		}

		private onBtn9Touch(evt:egret.TouchEvent):void{
			if(!this.isPLay9){
				this.isPLay9 = true;
				EffectUtils.showTips("摇头特效", 5);
				EffectUtils.rockObj(this.shopPanel.img9, 500);
			}else{
				EffectUtils.showTips("正在摇头特效", 5);
			}
		}


		/*-----------------------------------------------------------------------------------------
										        初始化界面数据
		-----------------------------------------------------------------------------------------*/
		public ininData():void{
			
		}
	}
}