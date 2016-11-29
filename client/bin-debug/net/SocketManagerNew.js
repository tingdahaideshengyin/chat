var socketManagerNew;
(function (socketManagerNew) {
    var SocketManagerNew = (function () {
        function SocketManagerNew() {
        }
        var d = __define,c=SocketManagerNew,p=c.prototype;
        /** 连接服务器 */
        SocketManagerNew.connectServer = function (host, port) {
            if (host === void 0) { host = ""; }
            if (port === void 0) { port = 80; }
            Global.showWaritPanel();
            if (!this.socket) {
                this.socket = new egret.WebSocket();
            }
            //默认就是字符串，所以不用
            //this.socket.type = egret.WebSocket.TYPE_STRING;
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.socket.connect(host, port);
        };
        //连接成功
        SocketManagerNew.onSocketOpen = function () {
            Global.hideWaritPanel();
            game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
        };
        //收到服务器消息
        SocketManagerNew.onReceiveMessage = function () {
            Global.hideWaritPanel();
            var msg = this.socket.readUTF();
            game.AppFacade.getInstance().sendNotification(ChartNotify.RECEIVE_CHART_MESSAGE, msg);
        };
        /** 向服务器发送消息 */
        SocketManagerNew.sendMessage = function (message) {
            Global.showWaritPanel();
            if (message != null) {
                this.socket.writeUTF(message);
            }
        };
        return SocketManagerNew;
    }());
    socketManagerNew.SocketManagerNew = SocketManagerNew;
    egret.registerClass(SocketManagerNew,'socketManagerNew.SocketManagerNew');
})(socketManagerNew || (socketManagerNew = {}));
//# sourceMappingURL=SocketManagerNew.js.map