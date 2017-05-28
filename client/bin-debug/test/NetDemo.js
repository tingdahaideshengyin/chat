var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NetDemo = (function (_super) {
    __extends(NetDemo, _super);
    function NetDemo() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    NetDemo.prototype.onAddToStage = function (event) {
        var url = "http://httpbin.org/post";
        //var url:string = "http://192.168.1.11:3001/login";
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables("test=ok");
        loader.load(request);
    };
    NetDemo.prototype.onPostComplete = function (event) {
        var loader = event.target;
        var data = loader.data;
        console.log(data.toString());
    };
    return NetDemo;
}(egret.DisplayObjectContainer));
__reflect(NetDemo.prototype, "NetDemo");
//# sourceMappingURL=NetDemo.js.map