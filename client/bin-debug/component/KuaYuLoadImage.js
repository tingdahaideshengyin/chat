//原EImage,代码已经完整(38-40行那里报错)
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by zhangheng on 2014/11/21.
 * 主要用于跨域加载图片.
 * this.stage.addChild(new KuaYuLoadImage("http://bbs.egret-labs.org/uc_server/avatar.php?uid=542&size=middle"));
 * this.stage.addChild(KuaYuLoadImage.loadAsync("http://bbs.egret-labs.org/uc_server/avatar.php?uid=542&size=middle"));
 */
var KuaYuLoadImage = (function (_super) {
    __extends(KuaYuLoadImage, _super);
    function KuaYuLoadImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KuaYuLoadImage;
}(egret.Bitmap));
__reflect(KuaYuLoadImage.prototype, "KuaYuLoadImage");
//# sourceMappingURL=KuaYuLoadImage.js.map