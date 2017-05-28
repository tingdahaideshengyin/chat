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
__reflect(LoginNotify.prototype, "LoginNotify");
//# sourceMappingURL=LoginNotify.js.map