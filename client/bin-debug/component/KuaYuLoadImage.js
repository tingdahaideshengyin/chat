//原EImage,代码已经完整(38-40行那里报错)
/**
 * Created by zhangheng on 2014/11/21.
 * 主要用于跨域加载图片.
 * this.stage.addChild(new KuaYuLoadImage("http://bbs.egret-labs.org/uc_server/avatar.php?uid=542&size=middle"));
 * this.stage.addChild(KuaYuLoadImage.loadAsync("http://bbs.egret-labs.org/uc_server/avatar.php?uid=542&size=middle"));
 */
var KuaYuLoadImage = (function (_super) {
    __extends(KuaYuLoadImage, _super);
    function KuaYuLoadImage(url) {
        _super.call(this);
        this._src = null;
        this._comp = false;
        if (url != null) {
            this.load(url);
        }
    }
    var d = __define,c=KuaYuLoadImage,p=c.prototype;
    d(p, "src"
        ,function () {
            return this._src;
        }
        ,function (s) {
            this.load(s);
        }
    );
    KuaYuLoadImage.$ = function (obj) {
        var img = obj["$"];
        delete obj["$"];
        obj.onload = null;
        obj.onerror = null;
        return img;
    };
    p.onLoadBack = function (img, url) {
        //console.log(img);
        //console.log(url);
        if (url == this._src) {
            if (img) {
                var tt = new egret.Texture();
                //报错先暂时注释，by:张鹏。具体原因待查
                //tt._setBitmapData(img);
                this.texture = tt;
            }
            else {
                this.texture = null;
            }
            this._comp = true;
        }
    };
    p.load = function (url) {
        if (this._src == url && this._comp)
            return;
        this._src = url;
        if (url != null && url.length > 0) {
            this._comp = false;
            //RES.getResByUrl(url, this.onLoadBack, this, "image");
            var img = new Image();
            img["$"] = this;
            img.onload = function () {
                KuaYuLoadImage.$(this).onLoadBack(this, this.src);
            };
            img.onerror = function () {
                KuaYuLoadImage.$(this).onLoadBack(this, this.src);
            };
            img.src = url;
        }
        else {
            this.texture = null;
            this._comp = true;
        }
    };
    p.size = function (w, h) {
        this.width = w;
        this.height = h;
    };
    p.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    /**
     * 异步加载图片
     * @param url   图片地址
     * @param compFunc  {Function} 回调函数。示例：compFunc(egret.Bitmap,url:string):void。
     * @param thisObject
     * @returns {egret.Bitmap}
     */
    KuaYuLoadImage.loadAsync = function (url, compFunc, thisObject) {
        if (compFunc === void 0) { compFunc = null; }
        if (thisObject === void 0) { thisObject = null; }
        var img = new Image();
        var bmp = new egret.Bitmap();
        img["$"] = bmp;
        img.onload = function () {
            var p = this["$"];
            delete this["$"];
            this.onload = null;
            this.onerror = null;
            var t = new egret.Texture();
            t._setBitmapData(this);
            p.texture = t;
            if (compFunc != null) {
                compFunc.apply(thisObject, [p]);
            }
        };
        img.onerror = function () {
            var p = this["$"];
            delete this["$"];
            this.onload = null;
            this.onerror = null;
            p.texture = null;
            if (compFunc != null) {
                compFunc.apply(thisObject, null);
            }
        };
        img.src = url;
        return bmp;
    };
    return KuaYuLoadImage;
}(egret.Bitmap));
egret.registerClass(KuaYuLoadImage,'KuaYuLoadImage');
//# sourceMappingURL=KuaYuLoadImage.js.map