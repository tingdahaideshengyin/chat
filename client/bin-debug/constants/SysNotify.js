//已完整
/** 系统消息 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SysNotify = (function () {
    function SysNotify() {
    }
    return SysNotify;
}());
/** 服务器连接成功 */
SysNotify.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
/** 服务器返回数据 */
SysNotify.SERVER_BACK_DATA = "SERVER_BACK_DATA";
/** 收到http服务器消息 */
SysNotify.RECEIVE_HTTP_DATA = "receive_http_data";
__reflect(SysNotify.prototype, "SysNotify");
//# sourceMappingURL=SysNotify.js.map