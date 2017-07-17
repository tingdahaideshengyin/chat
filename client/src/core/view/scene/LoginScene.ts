
/** 登陆场景类 */
class LoginScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/ui_skins/Loginskin.exml";
		this.addEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	//-----------------------------------------------------------------------------------------
	//自定义UI变量
	//-----------------------------------------------------------------------------------------

	/** 登陆界面背景图 */
	public bgimage:eui.Image;
	/** 服务器列表按钮 */
	public servers_image:eui.Image;
	/** 服务器状态图片 */
	public server_state:eui.Image;
	/** 当前服务器名字显示 */
	public serverText:eui.Label;
	/** 进入游戏按钮 */
	public enterBtn:eui.Button;
	/** 账号显示文本 */
	public account:eui.Label;
	/** 账号管理按钮 */
	public account_button:eui.Button;


	/*-----------------------------------------------------------------------------------------
										        UI初始化设置
	-----------------------------------------------------------------------------------------*/
	private onUIComplete(event:eui.UIEvent):void{
		this.removeEventListener(eui.UIEvent.COMPLETE, this.onUIComplete, this);
		this.account_button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openLoginPanel, this)
	}
	

	//-------------------------------------------------------------------------------------------
	//各种按钮消息处理
	//-------------------------------------------------------------------------------------------
	//打开登陆、注册UI
	private openLoginPanel():void{
		//this.account_button.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.openLoginPanel, this)
		game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_LOGIN);
	}

}