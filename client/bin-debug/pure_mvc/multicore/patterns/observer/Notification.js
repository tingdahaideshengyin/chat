//代码已完整
//INotification
//INotification功能有点像EVENT，是用来发送和接受的对象
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var puremvc;
(function (puremvc) {
    var Notification = (function () {
        function Notification(name, body, type) {
            if (body === void 0) { body = null; }
            if (type === void 0) { type = null; }
            this.name = null;
            this.body = null;
            this.type = null;
            this.name = name;
            this.body = body;
            this.type = type;
        }
        Notification.prototype.getName = function () {
            return this.name;
        };
        Notification.prototype.setBody = function (body) {
            this.body = body;
        };
        Notification.prototype.getBody = function () {
            return this.body;
        };
        Notification.prototype.setType = function (type) {
            this.type = type;
        };
        Notification.prototype.getType = function () {
            return this.type;
        };
        Notification.prototype.toString = function () {
            var msg = "Notification Name: " + this.getName();
            msg += ("\nBody: " + ((this.getBody() == null) ? "null" : this.getBody().toString()));
            msg += ("\nType: " + ((this.getType() == null) ? "null" : this.getType()));
            return msg;
        };
        return Notification;
    }());
    puremvc.Notification = Notification;
    __reflect(Notification.prototype, "puremvc.Notification", ["puremvc.INotification"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Notification.js.map