var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 用户登录代理类 */
var LoginProxy = (function (_super) {
    __extends(LoginProxy, _super);
    function LoginProxy() {
        var _this = _super.call(this, LoginProxy.NAME) || this;
        _this.loginData = new LoginData();
        return _this;
    }
    Object.defineProperty(LoginProxy.prototype, "userNmae", {
        /** 获取用户名 */
        get: function () {
            return this.loginData.userNmae;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LoginProxy.prototype, "authToken", {
        /** 获取/设置 authToken */
        get: function () {
            return this.loginData.authToken;
        },
        set: function (valve) {
            this.loginData.authToken = valve;
        },
        enumerable: true,
        configurable: true
    });
    return LoginProxy;
}(puremvc.Proxy));
LoginProxy.NAME = "LoginProxy"; //数据索引标识
/** 登陆成功消息 */
LoginProxy.LOGIN_SUCCESS = "login_success";
/** 登陆失败消息 */
LoginProxy.LOGIN_FAILD = "login_faild";
/** 退出游戏 */
LoginProxy.LOGIN_OUT = "login_out";
__reflect(LoginProxy.prototype, "LoginProxy", ["puremvc.INotifier"]);
//# sourceMappingURL=LoginProxy.js.map