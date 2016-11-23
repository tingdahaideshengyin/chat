//代码已经完整
//ICommand
//INotifier
//INotification

//Notifier


module puremvc {
	export class MacroCommand extends Notifier implements ICommand,INotifier{
		
		subCommands:Function[] = null;

		public constructor() {
			super();
			this.subCommands = new Array<Function>();
			this.initializeMacroCommand();
		}

		initializeMacroCommand():void{

		}

		public addSubCommand(commandClassRef:Function):void{
			this.subCommands.push(commandClassRef);
		}

		execute(notification:INotification):void{
			//notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
			var subCommands:Function[] = this.subCommands.slice(0);
			var length:number = this.subCommands.length;
			for(var i:number=0;i<length;i++){
				var commandClassRef:any = subCommands[i];
				var commandInstance:ICommand = <ICommand> new commandClassRef();
				commandInstance.initializeNotifier( this.multitonKey );
				commandInstance.execute( notification );
			}

			this.subCommands.splice(0);
		}
	}
}