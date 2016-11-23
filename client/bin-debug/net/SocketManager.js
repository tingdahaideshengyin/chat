//代码已经完整
/**
 * 网络公共类
 * 存放网络公共方法
 * 注意：是同步请求，不是异步
 */
var SocketManager;
(function (SocketManager) {
    var socket = new egret.WebSocket();
    /** 连接服务器 */
    function connectServer(host, port) {
        if (host === void 0) { host = ""; }
        if (port === void 0) { port = 8000; }
        Global.showWaritPanel();
        this.socket = new egret.WebSocket();
        this.socket.type = "webSocketTypeBinary";
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.connect(host, port);
    }
    SocketManager.connectServer = connectServer;
    //连接成功
    function onSocketOpen() {
        Global.hideWaritPanel();
        game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
    }
    SocketManager.onSocketOpen = onSocketOpen;
    //消息返回
    function onReceiveMessage() {
        Global.hideWaritPanel();
        var _arr = new egret.ByteArray();
        this.socket.readBytes(_arr);
        var mainId = _arr.readInt();
        var subId = _arr.readShort();
        var cmdDataBA = new egret.ByteArray();
        _arr.readBytes(cmdDataBA);
        /**
        //初始化template_proto
        var message = decodeIO.ProtoBuff.loadpRroto(RES.getRes("template_proto"));

        //创建user_login_class
        var user_login_class = message.build("user_login");

        //反序列化
        var new_user_login = user_login_class.decode(cmdDataBA.buffer);
        console.log("反序列化数据：", new_user_login)
        */
        console.log("mainId:", mainId);
        console.log("subId:", subId);
        game.AppFacade.getInstance().sendNotification("Processor_" + mainId + "_" + subId, cmdDataBA);
    }
    SocketManager.onReceiveMessage = onReceiveMessage;
    /** 向服务器发送消息 */
    function sendMessage(mainId, subId, message) {
        Global.showWaritPanel();
        var sendMessage = new egret.ByteArray();
        sendMessage.writeInt(mainId);
        sendMessage.writeShort(subId);
        sendMessage.writeBytes(new egret.ByteArray(message));
        this.socket.writeBytes(sendMessage);
    }
    SocketManager.sendMessage = sendMessage;
})(SocketManager || (SocketManager = {}));
//# sourceMappingURL=SocketManager.js.map