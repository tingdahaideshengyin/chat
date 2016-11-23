//代码已经完整
//ICommand
//INotifier
//INotification
//Notifier
var puremvc;
(function (puremvc) {
    var SimpleCommand = (function (_super) {
        __extends(SimpleCommand, _super);
        function SimpleCommand() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SimpleCommand,p=c.prototype;
        p.execute = function (notification) {
        };
        return SimpleCommand;
    }(puremvc.Notifier));
    puremvc.SimpleCommand = SimpleCommand;
    egret.registerClass(SimpleCommand,'puremvc.SimpleCommand',["puremvc.ICommand","puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=SimpleCommand.js.map