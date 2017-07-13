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
    var Processor_Login = (function (_super) {
        __extends(Processor_Login, _super);
        function Processor_Login() {
            var _this = _super.call(this) || this;
            //多核版本，张鹏自己添加
            _this.initializeNotifier("mainGame");
            return _this;
        }
        /** 注册消息 */
        Processor_Login.prototype.register = function () {
            this.facade().registerCommand(LoginNotify.LOGIN_SUCCESS, Processor_Login);
            this.facade().registerCommand(LoginNotify.NOT_ACCOUNT_OR_PASSWORD, Processor_Login);
            this.facade().registerCommand(LoginNotify.ACCOUNT_OR_PASSWORD_ERROR, Processor_Login);
        };
        /** 收到消息后的处理函数 */
        Processor_Login.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            if (data == "") {
                return;
            }
            var jsonObject = JSON.parse(data);
            //this.dealtData(jsonObject);
        };
        return Processor_Login;
    }(puremvc.SimpleCommand));
    Processor_Login.NAME = "Processor_Login";
    game.Processor_Login = Processor_Login;
    __reflect(Processor_Login.prototype, "game.Processor_Login", ["puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=Processor_Login.js.map