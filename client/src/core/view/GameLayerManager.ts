//已完整
/** 游戏容器类 */
class GameLayerManager extends eui.UILayer{
	/** 场景层 如战场、主城、副本战场之类的 */
	public sceneLayer:eui.UILayer = new eui.UILayer();

	/** 主UI层，例如底部功能栏 */
	public mainLayer:eui.UILayer = new eui.UILayer();

	/** 弹窗层、如设置、背包、装备之类的 */
	public panelLayer:eui.UILayer = new eui.UILayer();

	/** 特效层，如闪烁、飘字之类的 */
	public effectLayer:eui.UILayer = new eui.UILayer();

	/** 通讯遮罩层 和服务器通讯UI */
	public maskLayer:eui.UILayer = new eui.UILayer();

	/** 加载遮罩层 场景切换时候加载资源UI */
	public loadLayer:eui.UILayer = new eui.UILayer();

	private static _instance:GameLayerManager;
	
	
	public constructor() {
		super();
		this.init();
	}

	/** 场景容器管理单例 */
	public static gameLayer():GameLayerManager{
		if(!this._instance){
			this._instance = new GameLayerManager();
		}

		return this._instance;
	}

	/** 初始化场景 */
	public init():void{
		this.touchThrough = true;
		this.sceneLayer.touchThrough = true;
		this.mainLayer.touchThrough = true;
		this.panelLayer.touchThrough = true;
		this.effectLayer.touchThrough = true;
		this.maskLayer.touchThrough = true;
		this.loadLayer.touchThrough = true;
		this.addChild(this.sceneLayer);
		this.addChild(this.mainLayer);
		this.addChild(this.panelLayer);
		this.addChild(this.effectLayer);
		this.addChild(this.maskLayer);
		this.addChild(this.loadLayer);
	}
}