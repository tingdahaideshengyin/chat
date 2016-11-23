//代码已经完整

/** 数据读取基类 */
class ResourceProxyBase extends puremvc.Proxy implements puremvc.IProxy{

	//存储excel数据
	private _dataMap:Array<any> = new Array();
	//excel名称
	private _proxyName:string = ""

	public constructor(proxyNmae:string = "") {
		super(proxyNmae);
		this._proxyName = proxyNmae;
	}


	/** 开发状态:json可读 */
	/**
	 * 开发状态:json可读
	 * TODO
	 * 上线状态，加载bin文件，在这里【文件小，加密】
	 * 是预加载json文件还是到时候使用再加载
	 */
	public getData():JSON
	{
		var jsonData = RES.getRes( this._proxyName );
		return jsonData;
	}
}