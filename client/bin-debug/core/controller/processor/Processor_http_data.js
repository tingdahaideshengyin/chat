var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var Processor_http_data = (function (_super) {
        __extends(Processor_http_data, _super);
        function Processor_http_data() {
            var _this = _super.call(this) || this;
            //多核版本，张鹏自己添加
            _this.initializeNotifier("mainGame");
            return _this;
        }
        /** 注册消息 */
        Processor_http_data.prototype.register = function () {
            //this.facade().registerCommand("Processor_http_data",  Processor_http_data);
            this.facade().registerCommand(SysNotify.RECEIVE_HTTP_DATA, Processor_http_data);
        };
        Processor_http_data.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            if (data == "") {
                return;
            }
            var jsonObject = JSON.parse(data);
            this.dealtData(jsonObject);
        };
        //处理http服务器返回的数据
        Processor_http_data.prototype.dealtData = function (jsonObject) {
            var code = jsonObject.code;
            switch (code) {
                case 200:
                    this.facade().sendNotification(LoginNotify.LOGIN_SUCCESS, jsonObject);
                    readData.getLoginProxy().authToken = jsonObject.token;
                    break;
                case 500:
                    this.facade().sendNotification(LoginNotify.NOT_ACCOUNT_OR_PASSWORD);
                    break;
                case 501:
                    this.facade().sendNotification(LoginNotify.ACCOUNT_OR_PASSWORD_ERROR);
                    break;
                case 502:
                    this.facade().sendNotification(LoginNotify.ACCOUNT_OR_PASSWORD_ERROR);
                    break;
                case 601:
                    this.facade().sendNotification(LoginNotify.ACCOUNT_IS_EXISTENT);
                    break;
                case 602:
                    this.facade().sendNotification(LoginNotify.ACCOUNT_CREATE_ERROR);
                    break;
            }
        };
        return Processor_http_data;
    }(puremvc.SimpleCommand));
    Processor_http_data.NAME = "Processor_http_data";
    game.Processor_http_data = Processor_http_data;
    __reflect(Processor_http_data.prototype, "game.Processor_http_data", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=Processor_http_data.js.map