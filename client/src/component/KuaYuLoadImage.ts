  //原EImage,代码已经完整(38-40行那里报错)

/**
 * Created by zhangheng on 2014/11/21.
 * 主要用于跨域加载图片.
 * this.stage.addChild(new KuaYuLoadImage("http://bbs.egret-labs.org/uc_server/avatar.php?uid=542&size=middle"));
 * this.stage.addChild(KuaYuLoadImage.loadAsync("http://bbs.egret-labs.org/uc_server/avatar.php?uid=542&size=middle"));
 */
class KuaYuLoadImage extends egret.Bitmap
{
    private _src:string=null;
    private _comp:boolean=false;

    public constructor(url?: string){
        super();
        if(url!=null){
            this.load(url);
        }
    }
    public get src():string{
        return this._src;
    }
    public set src(s:string){
        this.load(s);
    }

    private static $(obj:any):KuaYuLoadImage{
        var img:KuaYuLoadImage = obj["$"];
        delete obj["$"];obj.onload=null;obj.onerror=null;
        return img;
    }

    private onLoadBack(img:HTMLImageElement, url:string):void{
        //console.log(img);
        //console.log(url);
        if(url==this._src) {
            if (img) {
                var tt:egret.Texture = new egret.Texture();
                //报错先暂时注释，by:张鹏。具体原因待查
                //tt._setBitmapData(img);
                this.texture = tt;
            } else {
                this.texture = null;
            }
            this._comp = true;
        }
    }
    public load(url:string):void
    {
        if(this._src==url && this._comp)return;
        this._src = url;
        if(url!=null && url.length>0){
            this._comp = false;
            //RES.getResByUrl(url, this.onLoadBack, this, "image");
            var img:HTMLImageElement = new Image();
            img["$"] = this;
            img.onload = function(){
                KuaYuLoadImage.$(this).onLoadBack(this, this.src);
            };
            img.onerror = function(){
                KuaYuLoadImage.$(this).onLoadBack(this, this.src);
            }
            img.src = url;
        }else{
            this.texture = null;
            this._comp = true;
        }
    }
    public size(w:number,h:number):void{
        this.width = w;
        this.height = h;
    }
    public move(x:number,y:number):void{
        this.x=x;
        this.y=y;
    }

    /**
     * 异步加载图片
     * @param url   图片地址
     * @param compFunc  {Function} 回调函数。示例：compFunc(egret.Bitmap,url:string):void。
     * @param thisObject
     * @returns {egret.Bitmap}
     */
    public static loadAsync(url:string, compFunc:Function=null, thisObject:any=null):egret.Bitmap{
        var img:HTMLImageElement = new Image();
        var bmp:egret.Bitmap = new egret.Bitmap();
        img["$"] = bmp;
        img.onload = function(){
            var p:egret.Bitmap = this["$"];
            delete this["$"];this.onload=null;this.onerror=null;
            var t:egret.Texture = new egret.Texture();
            t._setBitmapData(this);
            p.texture = t;
            if(compFunc!=null){
                compFunc.apply(thisObject, [p]);
                // compFunc(p);
            }
        };
        img.onerror = function(){
            var p:egret.Bitmap = this["$"];
            delete this["$"];this.onload=null;this.onerror=null;
            p.texture = null;
            if(compFunc!=null){
                compFunc.apply(thisObject, null);
            }
        }
        img.src = url;
        return bmp;
    }

}