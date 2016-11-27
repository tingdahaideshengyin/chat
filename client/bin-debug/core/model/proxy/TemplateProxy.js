//代码已经完整
/** 数据读取模板 */
var TemplateProxy = (function (_super) {
    __extends(TemplateProxy, _super);
    function TemplateProxy() {
        _super.call(this, TemplateProxy.NAME);
    }
    var d = __define,c=TemplateProxy,p=c.prototype;
    /**
     * 读取excel数据
     */
    p.getGameData = function () {
        return this.getData();
    };
    TemplateProxy.NAME = "template_json"; //必须和excel到处文件一致
    return TemplateProxy;
}(ResourceProxyBase));
egret.registerClass(TemplateProxy,'TemplateProxy');
//# sourceMappingURL=TemplateProxy.js.map