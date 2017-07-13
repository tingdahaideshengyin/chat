var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UserInfoRequest;
(function (UserInfoRequest) {
    var LoginRequest = (function () {
        function LoginRequest() {
        }
        LoginRequest.loginToAccountServer = function (url, data) {
            if (url === void 0) { url = ""; }
            if (data === void 0) { data = ""; }
        };
        ;
        return LoginRequest;
    }());
    UserInfoRequest.LoginRequest = LoginRequest;
    __reflect(LoginRequest.prototype, "UserInfoRequest.LoginRequest");
})(UserInfoRequest || (UserInfoRequest = {}));
//# sourceMappingURL=LoginRequest.js.map