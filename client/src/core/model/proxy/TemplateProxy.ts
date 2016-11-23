//代码已经完整

/** 数据读取模板 */
class TemplateProxy extends ResourceProxyBase{
	public static NAME:string = "template_json";//必须和excel到处文件一致

	public constructor() {
		super(TemplateProxy.NAME);
	}

	/**
	 * 读取excel数据
	 */
	public getGameData():JSON
	{
		return this.getData();
	}
}