var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpManager = (function () {
    function HttpManager() {
    }
    /** 连接服务器 */
    HttpManager.connectServer = function (url, data) {
        if (data === void 0) { data = ""; }
        Global.showWaritPanel();
        if (!this.httpRequest) {
            this.httpRequest = new egret.HttpRequest();
        }
        this.httpRequest.responseType = egret.HttpResponseType.TEXT;
        this.httpRequest.open(url, egret.HttpMethod.POST);
        //默认以表单形式发送，可不写，本身就是表单形式，官方说法：不可修改消息头，可能引起兼容性问题
        this.httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if (data != "") {
            this.httpRequest.send(data);
        }
        this.httpRequest.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        this.httpRequest.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        //httpRequest.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
    };
    /** 消息请求完成 */
    HttpManager.onPostComplete = function (event) {
        Global.hideWaritPanel();
        this.httpRequest.removeEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        var request = event.currentTarget;
        var msg = request.response;
        game.AppFacade.getInstance().sendNotification(LoginNotify.RECEIVE_CHART_MESSAGE, msg);
    };
    /** 请求消息出错 */
    HttpManager.onPostIOError = function (event) {
        Global.hideWaritPanel();
        this.httpRequest.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        egret.log("post error : " + event);
    };
    /** 消息进度 */
    HttpManager.onPostProgress = function (event) {
        this.httpRequest.removeEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
        egret.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return HttpManager;
}());
__reflect(HttpManager.prototype, "HttpManager");
//# sourceMappingURL=HttpManager.js.map