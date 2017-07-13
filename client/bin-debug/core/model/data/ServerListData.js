var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ServerListData = (function () {
    function ServerListData() {
    }
    return ServerListData;
}());
//服务器名字
ServerListData.serverName = "";
//服务器IP
ServerListData.serverIp = "";
//服务器端口
//服务器状态
ServerListData.serverList = {};
__reflect(ServerListData.prototype, "ServerListData");
//# sourceMappingURL=ServerListData.js.map