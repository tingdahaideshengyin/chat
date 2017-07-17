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
SceneNotify.OPEN_LOGIN_SCENE = "open_login_scene";
/** 关闭登陆界面 */
SceneNotify.CLOSE_LOGIN_SCENE = "close_login_scene";
/** 打开角色创建界面 */
SceneNotify.OPEN_CREATE_ROLE = "open_create_role";
/** 关闭角色创建界面 */
SceneNotify.CLOSE_CREATE_ROLE = "close_create_role";
/** 打开主城场景 */
SceneNotify.OPEN_HOME = "SceneNotify_OPEN_HOME";
/** 关闭主城 */
SceneNotify.CLOSE_HOME = "SceneNotify_ClOSE_HOME";
__reflect(SceneNotify.prototype, "SceneNotify");
//# sourceMappingURL=SceneNotify.js.map