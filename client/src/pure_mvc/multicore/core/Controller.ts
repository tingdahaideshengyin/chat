//已完整
//IController
//IView
//INotification
//ICommand

//Observer
//View


module puremvc {
	export class Controller implements IController{
		view:IView = null;
		commandMap:Object = null;
		multitonKey:string = null;

		static instanceMap:Object = {};//多核版本

		static MULTITON_MSG:string = "Controller instance for this multiton key already constructed !";

		public constructor(key:string) {
			if(Controller.instanceMap[key]){
				throw Error(Controller.MULTITON_MSG);
			}
			
			Controller.instanceMap[key] = this;

			this.multitonKey = key;

			this.commandMap = {};
			this.initializeController();

		}


		initializeController():void{
			this.view = View.getInstance(this.multitonKey);
		}


		executeCommand(notification:INotification):void{
			var commandClassRef:any = this.commandMap[ notification.getName()];
			//notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
			//commandClassRef = game.StartupCommand

			if(commandClassRef)
			{
				var command:ICommand = <ICommand> new commandClassRef();
				command.initializeNotifier( this.multitonKey );
				command.execute( notification );
			}
		}


		registerCommand(notificationName:string,commandCkassRef:Function):void{
			//notificationName = AppFacade.STARTUP
			//commandCkassRef = game.StartupCommand
			if(!this.commandMap[ notificationName ])
			{
				this.view.registerObserver( notificationName, new Observer( this.executeCommand, this) );
				this.commandMap[ notificationName ] = commandCkassRef;
			}
		}


		hasCommand(notificationName:string):boolean{

			return this.commandMap[ notificationName ] != null;
		}


		removeCommand(notificationName:string):void{
			if( this.hasCommand( notificationName ) )
			{
				this.view.removeObserver(notificationName, this);
				delete this.commandMap[ notificationName ];
			}
		}


		static getInstance(key:string):IController{
			if(!Controller.instanceMap[ key ]){
				Controller.instanceMap[ key ] = new Controller( key );
			}

			return Controller.instanceMap[ key ];
		}

		static removeController( key:string ):void
		{
			delete Controller.instanceMap[ key ];
		}
	}
}