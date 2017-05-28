//需要自己添加视图代码
/**
 * 注册mediator
 */

module game{
	export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
		public constructor() {
			super();
			//多核版本，张鹏自己添加
			//this.initializeNotifier("mainGame");
		}

		public execute( notificton:puremvc.INotification):void{
			var main = GameLayerManager.gameLayer().panelLayer;
			//注册各种UI面板

			//注册天下UI
			this.facade().registerMediator(new MapMediator());
			//注册商店UI
			this.facade().registerMediator(new ShopMediator());
			//注册闯荡UI
			this.facade().registerMediator(new ChuangDangMediator());
			//注册招贤UI
			this.facade().registerMediator(new ZhaoXianMediator());
			//注册背包UI
			this.facade().registerMediator(new BackpackMediator());
			//注册角色UI
			this.facade().registerMediator(new RoleMediator());
			//注册强化UI
			this.facade().registerMediator(new QiangHuaMediator());
			//注册消息按钮UI
			this.facade().registerMediator(new MessagePanelMediator());
			//注册登陆界面
			this.facade().registerMediator(new LonginPanelMedistor());
			//注册注册界面
			this.facade().registerMediator(new RegisterPanelMediator());
			//pomelo界面注册
			this.facade().registerMediator(new PomeloTestMediator());
		}
	}
}