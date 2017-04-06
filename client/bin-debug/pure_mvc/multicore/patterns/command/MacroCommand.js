//代码已经完整
//ICommand
//INotifier
//INotification
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Notifier
var puremvc;
(function (puremvc) {
    var MacroCommand = (function (_super) {
        __extends(MacroCommand, _super);
        function MacroCommand() {
            var _this = _super.call(this) || this;
            _this.subCommands = null;
            _this.subCommands = new Array();
            _this.initializeMacroCommand();
            return _this;
        }
        MacroCommand.prototype.initializeMacroCommand = function () {
        };
        MacroCommand.prototype.addSubCommand = function (commandClassRef) {
            this.subCommands.push(commandClassRef);
        };
        MacroCommand.prototype.execute = function (notification) {
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
    __reflect(MacroCommand.prototype, "puremvc.MacroCommand", ["puremvc.ICommand"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=MacroCommand.js.map