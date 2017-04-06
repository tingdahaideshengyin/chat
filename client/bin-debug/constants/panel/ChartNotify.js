var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 聊天消息注册类
 * by 张鹏
 */
var ChartNotify = (function () {
    function ChartNotify() {
    }
    return ChartNotify;
}());
/** 发送消息 */
ChartNotify.SEND_CHART_MESSAGE = "SEND_CHART_MESSAGE";
/** 收到消息 */
ChartNotify.RECEIVE_CHART_MESSAGE = "RECEIVE_CHART_MESSAGE";
__reflect(ChartNotify.prototype, "ChartNotify");
//# sourceMappingURL=ChartNotify.js.map