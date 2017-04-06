//代码已经完整
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 数据读取基类 */
var ResourceProxyBase = (function (_super) {
    __extends(ResourceProxyBase, _super);
    function ResourceProxyBase(proxyNmae) {
        if (proxyNmae === void 0) { proxyNmae = ""; }
        var _this = _super.call(this, proxyNmae) || this;
        //存储excel数据
        _this._dataMap = new Array();
        //excel名称
        _this._proxyName = "";
        _this._proxyName = proxyNmae;
        return _this;
    }
    /** 开发状态:json可读 */
    /**
     * 开发状态:json可读
     * TODO
     * 上线状态，加载bin文件，在这里【文件小，加密】
     * 是预加载json文件还是到时候使用再加载
     */
    ResourceProxyBase.prototype.getData = function () {
        var jsonData = RES.getRes(this._proxyName);
        return jsonData;
    };
    return ResourceProxyBase;
}(puremvc.Proxy));
__reflect(ResourceProxyBase.prototype, "ResourceProxyBase", ["puremvc.INotifier"]);
//# sourceMappingURL=ResourceProxyBase.js.map