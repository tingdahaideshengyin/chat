/**
 * 登陆消息类
 * by:张鹏
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoginNotify = (function () {
    function LoginNotify() {
    }
    return LoginNotify;
}());
/** 发送消息 */
LoginNotify.SEND_CHART_MESSAGE = "SEND_CHART_MESSAGE";
/** 收到消息 */
LoginNotify.RECEIVE_CHART_MESSAGE = "RECEIVE_CHART_MESSAGE";
/** 账号或者密码为空 */
LoginNotify.NOT_ACCOUNT_OR_PASSWORD = "not_account_or_password";
/** 登陆成功 */
LoginNotify.LOGIN_SUCCESS = "loginSuccess";
/** 账号或者密码错误 */
LoginNotify.ACCOUNT_OR_PASSWORD_ERROR = "Account_or_password_error";
/**	连接不上服务器 */
LoginNotify.CAN_NOT_CONNECT_SERVER = "can_not_connect_server";
__reflect(LoginNotify.prototype, "LoginNotify");
//# sourceMappingURL=LoginNotify.js.map