/** 用户登录代理类 */
class LoginProxy extends puremvc.Proxy implements puremvc.IProxy{
	public static NAME:string = "LoginProxy";//数据索引标识
	private loginData:LoginData;

	/** 登陆成功消息 */
	public static LOGIN_SUCCESS:string = "login_success";
	/** 登陆失败消息 */
	public static LOGIN_FAILD:string = "login_faild";
	/** 退出游戏 */
	public static LOGIN_OUT:string = "login_out";

	public constructor() {
		super(LoginProxy.NAME);
		this.loginData = new LoginData();
	}

	/** 获取用户名 */
	public get userNmae():String{
		return this.loginData.userNmae;
	};

	/** 获取/设置 authToken */
	public get authToken():string{
		return this.loginData.authToken;
	}

	public set authToken(valve:string){
		this.loginData.authToken = valve;
	}

	/** 登陆成功 */

}