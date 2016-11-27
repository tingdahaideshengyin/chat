//代码已经完整
/** 数据读取基类 */
var ResourceProxyBase = (function (_super) {
    __extends(ResourceProxyBase, _super);
    function ResourceProxyBase(proxyNmae) {
        if (proxyNmae === void 0) { proxyNmae = ""; }
        _super.call(this, proxyNmae);
        //存储excel数据
        this._dataMap = new Array();
        //excel名称
        this._proxyName = "";
        this._proxyName = proxyNmae;
    }
    var d = __define,c=ResourceProxyBase,p=c.prototype;
    /** 开发状态:json可读 */
    /**
     * 开发状态:json可读
     * TODO
     * 上线状态，加载bin文件，在这里【文件小，加密】
     * 是预加载json文件还是到时候使用再加载
     */
    p.getData = function () {
        var jsonData = RES.getRes(this._proxyName);
        return jsonData;
    };
    return ResourceProxyBase;
}(puremvc.Proxy));
egret.registerClass(ResourceProxyBase,'ResourceProxyBase',["puremvc.IProxy","puremvc.INotifier"]);
//# sourceMappingURL=ResourceProxyBase.js.map