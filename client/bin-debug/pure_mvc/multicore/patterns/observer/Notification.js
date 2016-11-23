//代码已完整
//INotification
//INotification功能有点像EVENT，是用来发送和接受的对象
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
        var d = __define,c=Notification,p=c.prototype;
        p.getName = function () {
            return this.name;
        };
        p.setBody = function (body) {
            this.body = body;
        };
        p.getBody = function () {
            return this.body;
        };
        p.setType = function (type) {
            this.type = type;
        };
        p.getType = function () {
            return this.type;
        };
        p.toString = function () {
            var msg = "Notification Name: " + this.getName();
            msg += ("\nBody: " + ((this.getBody() == null) ? "null" : this.getBody().toString()));
            msg += ("\nType: " + ((this.getType() == null) ? "null" : this.getType()));
            return msg;
        };
        return Notification;
    }());
    puremvc.Notification = Notification;
    egret.registerClass(Notification,'puremvc.Notification',["puremvc.INotification"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Notification.js.map