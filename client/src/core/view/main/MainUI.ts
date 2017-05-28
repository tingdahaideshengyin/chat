//代码已完整
/** 主界面 */
module game {
	export class MainUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins_game/MainUISkin.exml";
			//this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
			this.createCompleteEvent();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}


		/*-----------------------------------------------------------------------------------------
										        UI初始化设置
		-----------------------------------------------------------------------------------------*/
		//主界面收缩按钮
		private mainBtn:eui.Button;
		//底部UI
		private activityBar:game.ActivityBar;
		//右侧边UI
		private functionBar:game.FunctionBar;
		//左上角色信息UI
		private roleInfo:game.RoleInfo;
		//pomelo按钮
		private pomeloButton:eui.Button;


		private createCompleteEvent():void{
		//private createCompleteEvent(event:eui.UIEvent):void{
			//console.log(1);
			//this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
			//game.Appfacade.getinstance().registerMediator(new RoleMediator(this));
			//GameLayerManager.gameLayer().sceneLayer.addChild(this);

			//添加UI遮罩
			this.addUIMask();

			//主界面按钮收缩按钮
			this.mainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMainBtnTouch, this);

			//地图天下按钮点击事件
			this.functionBar.mapBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMapBtnTouch,this);
			//商店按钮点击事件
			this.functionBar.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopBtnTouch,this);
			//闯荡按钮点击事件
			this.functionBar.chuangDangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChuangDangBtnTouch,this);
			//招贤按钮点击事件
			this.functionBar.zhaoXianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZhaoXianBtnTouch, this);
			//强化按钮点击事件
			this.functionBar.qianghuaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQiangHuaBtnTouch, this);
			//背包按钮点击事件
			this.functionBar.backpackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackpackBtnTouch, this);
			//角色按钮点击事件
			this.functionBar.roleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRoleBtnTouch, this);
			//消息按钮点击事件
			this.activityBar.infoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onInfoBtnTouch, this);
			//登陆按钮点击事件
			this.activityBar.loginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginBtnTouch, this);
			//注册按钮点击事件
			this.activityBar.registerButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.registerBtnTouch, this);
			//pomelo按钮点击事件
			this.pomeloButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPomeloButtonTouch, this);
		}

		/*-----------------------------------------------------------------------------------------
										导航条添加蒙版
		-----------------------------------------------------------------------------------------*/
		private addUIMask():void
		{
			//底部UI Mask
			//var bottomMask:egret.Rectangle = new egret.Rectangle();
			var bottomMask:egret.Shape = new egret.Shape;
			bottomMask.graphics.beginFill(0xff0000);
			bottomMask.x = this.activityBar.x;
			bottomMask.y = this.activityBar.y;
			bottomMask.graphics.drawRect(0, 0, this.activityBar.width, this.activityBar.height);
			bottomMask.graphics.endFill();
			this.addChild(bottomMask);
			//bottomMask.width = this.activityBar.width;
			//bottomMask.height = this.activityBar.height;
			this.activityBar.mask = bottomMask;

			this.activityBarX = this.activityBar.x;

			//右侧湖边UIMask
			//var rightMask:egret.Rectangle = new egret.Rectangle();
			var rightMask:egret.Shape = new egret.Shape;
			rightMask.graphics.beginFill(0xff0000);
			rightMask.x = this.functionBar.x;
			rightMask.y = this.functionBar.y;
			rightMask.graphics.drawRect(0, 0, this.functionBar.width, this.functionBar.height);
			rightMask.graphics.endFill();
			this.addChild(rightMask);
			//rightMask.width = this.functionBar.width;
			//rightMask.height = this.functionBar.height;
			this.functionBar.mask = rightMask;

			this.functionBarY = this.functionBar.y;
		}



		/*-----------------------------------------------------------------------------------------
										主界面收缩按钮
		-----------------------------------------------------------------------------------------*/
		//主界面是否隐藏
		private isHide:boolean = false;
		//activityBarX 原来Y位置
		private activityBarX:number;
		//functionBarY 原来Y位置
		private functionBarY:number;

		private onMainBtnTouch(evt:egret.TouchEvent):void
		{
			if(this.isHide){
				this.isHide = false;
				egret.Tween.get(this.activityBar).to({x:this.activityBarX}, 300, egret.Ease.backInOut);
				egret.Tween.get(this.functionBar).to({y:this.functionBarY}, 300, egret.Ease.backInOut);
			}else{
				this.isHide = true;
				egret.Tween.get(this.activityBar).to({x:GameConfig.curWidth()}, 300, egret.Ease.backInOut);
				egret.Tween.get(this.functionBar).to({y:GameConfig.curHeight()}, 300, egret.Ease.backInOut);
			}
		}


		/*-----------------------------------------------------------------------------------------
										各种主界面按钮事件
		-----------------------------------------------------------------------------------------*/
		//地图天下按钮点击事件
		private onMapBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_MAP);
		}

		//商店按钮点击事件
		private onShopBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_SHOP);
		}

		//闯荡按钮点击事件
		private onChuangDangBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_CHUANGDANG);
		}

		//招贤按钮事件
		private onZhaoXianBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_ZHAOXIAN);
		}

		//强化按钮点击事件
		private onQiangHuaBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_QIANGHUA);
		}

		//背包按钮点击事件
		private onBackpackBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BACKPACK);
		}

		//角色按钮点击事件
		private onRoleBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_ROLE);
		}

		//消息按钮点击事件
		private onInfoBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_MESSAGE);
		}

		//登陆按钮点击事件
		private loginBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_LOGIN);
		}

		//注册按钮点击事件
		private registerBtnTouch(evt:egret.TouchEvent):void
		{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_RESISTER);
		}

		//pomelo按钮点击事件
		private onPomeloButtonTouch(evt:egret.TouchEvent):void{
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_POMELO);
		}
	}
}