var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var pomelo;
(function (pomelo) {
    var PomeloSocker = (function () {
        function PomeloSocker() {
        }
        /** 连接服务器 */
        PomeloSocker.connectServer = function (host, port) {
            if (host === void 0) { host = ""; }
            if (port === void 0) { port = 80; }
            Global.showWaritPanel();
            if (!this.socket) {
                this.socket = new egret.WebSocket();
            }
            //以二进制格式发送数据
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.socket.connect(host, port);
        };
        //连接成功
        PomeloSocker.onSocketOpen = function () {
            Global.hideWaritPanel();
            game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
        };
        //收到服务器消息
        PomeloSocker.onReceiveMessage = function () {
            Global.hideWaritPanel();
            //var msg = this.socket.readUTF();
            //game.AppFacade.getInstance().sendNotification(ChartNotify.RECEIVE_CHART_MESSAGE, msg);
            var _arr = new egret.ByteArray();
            this.socket.readBytes(_arr);
            //var mainId = _arr.readInt();
            //var subId = _arr.readShort();
            var cmdDataBA = new egret.ByteArray();
            _arr.readBytes(cmdDataBA);
            game.AppFacade.getInstance().sendNotification(SysNotify.SERVER_BACK_DATA, cmdDataBA);
        };
        /** 向服务器发送消息 */
        PomeloSocker.sendMessage = function (message) {
            Global.showWaritPanel();
            if (message != null) {
                this.socket.writeUTF(message);
            }
        };
        /** 断开连接 */
        PomeloSocker.closeNet = function () {
            if (this.socket.connected == true) {
                this.socket.close();
            }
        };
        return PomeloSocker;
    }());
    pomelo.PomeloSocker = PomeloSocker;
    __reflect(PomeloSocker.prototype, "pomelo.PomeloSocker");
})(pomelo || (pomelo = {}));
//# sourceMappingURL=PomeloSocker.js.map