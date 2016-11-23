//代码已完整

/**
 * 面板meddiator基类
 * todo：面板特效，全屏 + 非全屏蒙层
 */

class BaseMediator extends puremvc.Mediator implements puremvc.IMediator{
	//是否初始化
	private isInitialized:boolean = false;
	//是否已经显示
	private isPopUp:boolean = false;
	//Ui容器
	private uiContener:eui.Component = null;
	public w:number = 0;
	public h:number = 0;


	public constructor(mediatorName:string = "", viewComponent:Object = null) {
		super(mediatorName, viewComponent);
		this.w = GameConfig.curWidth();
		this.h = GameConfig.curHeight();
	}


	/**
	 * 添加面板方法
	 * @pagram ui		Ui容器
	 * dark				背景是否变黑
	 * popUpWidth		指定弹窗宽度，定位使用
	 * popUpHeight		指定弹窗高度，定位使用
	 * effectType		0:没有动画，1：从中间轻微弹出，2：从中间猛烈弹出，3：从左向右，4：从右向左，5：从上到下，6：从下到上
	 */
	public showUI(ui: eui.Component, dark: boolean = false, popUpWidth: number = 0, popUpHeight: number = 0, effectType: number = 0, isAlert: boolean = false):void
	{
		this.uiContener = ui;
		this.beforShow();
		this.initUI();
		this.initData();
		PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
	}


	/**
	 * 面板弹出之前处理
	 */
	public beforShow():void{

	}


	/**
	 * 初始化面板UI
	 */
	public initUI():void{

	}


	/**
	 * 初始化面板数据
	 */
	public initData():void{

	}


	/**
	 * 移除面板方法
	 * effectType	0:没有动画，1：从中间轻微弹出，2：从中间猛烈弹出，3：从左向右，4：从右向左，5：从上到下，6：从下到上
	 */
	public closePanel(effectType:number = 0):void{
		PopUpManager.removePopUp(this.uiContener, effectType);
		this.destroy();
	}


	/**
	 * 面板关闭后，需要销毁的对象
	 */
	public destroy():void{

	}


	/**
	 * 面板是否弹出状态
	 */
	public getIsPopUp():boolean{
		return this.isPopUp;
	}


	/**
	 * 面板是否初始化完毕
	 */
	public getIsInit():boolean{
		return this.isInitialized
	}


	/**
	 * 获取面板宽度
	 */
	public getWidth():number{
		return this.uiContener.width;
	}


	/**
	 * 获取面板高度
	 */
	public getHeight():number{
		return this.uiContener.height;
	}
}

