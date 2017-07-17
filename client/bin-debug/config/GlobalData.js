/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var GlobalData;
(function (GlobalData) {
    //我的名字
    GlobalData.myName = "dily";
    /** 储存服务器地址信息 */
    function setServerData() {
        GlobalData.serversData = RES.getRes("servers_json");
    }
    GlobalData.setServerData = setServerData;
    /** 账号服务器地址 */
    function getAccountServer() {
        return GlobalData.serversData.account_server;
    }
    GlobalData.getAccountServer = getAccountServer;
    //export var account_server:string = serversData.account_server;
    /** connect服务器地址 */
    function getConnectServer() {
        return GlobalData.serversData.connect_server;
    }
    GlobalData.getConnectServer = getConnectServer;
    //export var connect_server:string = serversData.connect_server;
    /** gate服务器地址 */
    function getGateServer() {
        return GlobalData.serversData.gate_server;
    }
    GlobalData.getGateServer = getGateServer;
    //export var gate_server:string = serversData.gate_server;
})(GlobalData || (GlobalData = {}));
//# sourceMappingURL=GlobalData.js.map