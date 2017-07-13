var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 用户登录数据专用类
 */
var LoginData = (function () {
    function LoginData() {
        /** 用户账号 */
        this.userNmae = "";
        /** 用户密码 */
        this.password = "";
        /** 用户Token */
        this.authToken = "";
        //默认服务器
    }
    return LoginData;
}());
__reflect(LoginData.prototype, "LoginData");
//# sourceMappingURL=LoginData.js.map