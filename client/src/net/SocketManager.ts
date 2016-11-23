//代码已经完整

/**
 * 网络公共类
 * 存放网络公共方法
 * 注意：是同步请求，不是异步
 */
module SocketManager{
    var socket:egret.WebSocket = new egret.WebSocket();

    /** 连接服务器 */
    export function connectServer(host:string="", port:number=8000){
        Global.showWaritPanel();
        this.socket = new egret.WebSocket();
        this.socket.type = "webSocketTypeBinary";
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        
        this.socket.connect(host, port);
    }


    //连接成功
    export function onSocketOpen():void{
        Global.hideWaritPanel();
        game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
    }


    //消息返回
    export function onReceiveMessage():void{
        Global.hideWaritPanel();
        var _arr:egret.ByteArray = new egret.ByteArray();
        this.socket.readBytes(_arr);
        var mainId = _arr.readInt();
        var subId = _arr.readShort();
        var cmdDataBA:egret.ByteArray = new egret.ByteArray();
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


    /** 向服务器发送消息 */
    export function sendMessage(mainId:number, subId:number, message:any):void{
        Global.showWaritPanel();
        var sendMessage:egret.ByteArray = new egret.ByteArray();
        sendMessage.writeInt(mainId);
        sendMessage.writeShort(subId);
        sendMessage.writeBytes( new egret.ByteArray(message));
        this.socket.writeBytes(sendMessage);
    }
}