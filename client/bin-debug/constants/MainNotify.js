var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//已完整
/** 主界面消息 */
var MainNotify = (function () {
    function MainNotify() {
    }
    return MainNotify;
}());
/** 打开主界面UI */
MainNotify.OPEN_MAIN = "MainNotify_OPEN_MAIN";
/** 关闭主界面UI */
MainNotify.CLOSE_MAIN = "MainNotify_CLOSE_MAIN";
/** 打开角色UI */
MainNotify.OPENG_ROLE = "MainNotify_OPEN_ROLE";
/** 关闭角色UI */
MainNotify.CLOSE_ROLE = "MainNotify_CLOSE_ROLE";
/** 打开功能UI */
MainNotify.OPEN_FUNCTION = "MainNotify_OPEN_FUNCTION";
/** 关闭功能UI */
MainNotify.COLSE_FUNCTION = "MainNotify_COLSE_FUNCTION";
/** 打开活动UI */
MainNotify.OPEN_ACTIVITY = "MainNotify_OPEN_ACTIVITY";
/** 关闭活动UI */
MainNotify.CLOSE_ACTIVITY = "MainNotify_CLOSE_ACTIVITY";
__reflect(MainNotify.prototype, "MainNotify");
//# sourceMappingURL=MainNotify.js.map