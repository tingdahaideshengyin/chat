var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    /**
     * 输入框验证
     */
    var InputCheck = (function () {
        function InputCheck() {
        }
        /**
         * 用户账号验证
         */
        InputCheck.checkAccount = function (text) {
            var result = "";
            if (text == "" || text == null) {
                result = "账号不能为空";
                return result;
            }
            if (text.length <= 2 || text.length > 15) {
                result = "账号长度在3-15位之间";
                return result;
            }
        };
        InputCheck.checkPassword = function (text) {
            var result = "";
            if (text == "" || text == null) {
                result = "密码不能为空";
                return result;
            }
            if (text.length <= 4 || text.length > 15) {
                result = "密码长度在5-15位之间";
                return result;
            }
        };
        return InputCheck;
    }());
    utils.InputCheck = InputCheck;
    __reflect(InputCheck.prototype, "utils.InputCheck");
})(utils || (utils = {}));
//# sourceMappingURL=InputCheck.js.map