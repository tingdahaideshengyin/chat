//代码已经完整
//ICommand
//INotifier
//INotification
//Notifier
var puremvc;
(function (puremvc) {
    var MacroCommand = (function (_super) {
        __extends(MacroCommand, _super);
        function MacroCommand() {
            _super.call(this);
            this.subCommands = null;
            this.subCommands = new Array();
            this.initializeMacroCommand();
        }
        var d = __define,c=MacroCommand,p=c.prototype;
        p.initializeMacroCommand = function () {
        };
        p.addSubCommand = function (commandClassRef) {
            this.subCommands.push(commandClassRef);
        };
        p.execute = function (notification) {
            //notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
            var subCommands = this.subCommands.slice(0);
            var length = this.subCommands.length;
            for (var i = 0; i < length; i++) {
                var commandClassRef = subCommands[i];
                var commandInstance = new commandClassRef();
                commandInstance.initializeNotifier(this.multitonKey);
                commandInstance.execute(notification);
            }
            this.subCommands.splice(0);
        };
        return MacroCommand;
    }(puremvc.Notifier));
    puremvc.MacroCommand = MacroCommand;
    egret.registerClass(MacroCommand,'puremvc.MacroCommand',["puremvc.ICommand","puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=MacroCommand.js.map