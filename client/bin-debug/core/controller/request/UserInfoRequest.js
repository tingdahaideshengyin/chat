//代码已经完整
/**
 * 请求用户信息例子
 */
var UserInfoRequest;
(function (UserInfoRequest) {
    function sendUserInfo(userId, userName) {
        //创建user_login_class
        var user_login_class = Global.getMessage("user_login");
        console.log(user_login_class);
        //创建一条消息
        var user_login = new user_login_class({
            "userId": userId,
            "userName": userName
        });
        //序列化
        var bytes = user_login.toArrayBuffer();
        SocketManager.sendMessage(100, 1, bytes);
    }
    UserInfoRequest.sendUserInfo = sendUserInfo;
})(UserInfoRequest || (UserInfoRequest = {}));
//# sourceMappingURL=UserInfoRequest.js.map