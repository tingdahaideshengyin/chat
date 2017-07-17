/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module GlobalData {

    //我的名字
    export var myName: string = "dily";

    //服务器地址信息信息
    //private static serversData:Object = 
    export var serversData:any;
    /** 储存服务器地址信息 */
    export function setServerData() {
      serversData = RES.getRes("servers_json");
    }

    /** 账号服务器地址 */
    export function getAccountServer():string{
      return serversData.account_server;
    }
    //export var account_server:string = serversData.account_server;

    /** connect服务器地址 */
    export function getConnectServer():string{
      return serversData.connect_server;
    }
    //export var connect_server:string = serversData.connect_server;

    /** gate服务器地址 */
    export function getGateServer():string{
      return serversData.gate_server;
    }
    //export var gate_server:string = serversData.gate_server;

}