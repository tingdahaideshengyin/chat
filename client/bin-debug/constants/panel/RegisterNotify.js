/**
 * 注册消息类
 * by：张鹏
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RegisterNotify = (function () {
    function RegisterNotify() {
    }
    return RegisterNotify;
}());
/** 发送消息 */
RegisterNotify.SEND_CHART_MESSAGE = "SEND_CHART_MESSAGE";
/** 收到消息 */
RegisterNotify.RECEIVE_CHART_MESSAGE = "RECEIVE_CHART_MESSAGE";
__reflect(RegisterNotify.prototype, "RegisterNotify");
//# sourceMappingURL=RegisterNotify.js.map