//代码已经完整
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 数据读取模板 */
var TemplateProxy = (function (_super) {
    __extends(TemplateProxy, _super);
    function TemplateProxy() {
        return _super.call(this, TemplateProxy.NAME) || this;
    }
    /**
     * 读取excel数据
     */
    TemplateProxy.prototype.getGameData = function () {
        return this.getData();
    };
    return TemplateProxy;
}(ResourceProxyBase));
TemplateProxy.NAME = "template_json"; //必须和excel到处文件一致
__reflect(TemplateProxy.prototype, "TemplateProxy");
//# sourceMappingURL=TemplateProxy.js.map