var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//已完整
/** 场景消息 */
var SceneNotify = (function () {
    function SceneNotify() {
    }
    return SceneNotify;
}());
/** 打开登录界面 */
/** 打开主城场景 */
SceneNotify.OPEN_HOME = "SceneNotify_OPEN_HOME";
/** 关闭主城 */
SceneNotify.CLOSE_HOME = "SceneNotify_ClOSE_HOME";
__reflect(SceneNotify.prototype, "SceneNotify");
//# sourceMappingURL=SceneNotify.js.map