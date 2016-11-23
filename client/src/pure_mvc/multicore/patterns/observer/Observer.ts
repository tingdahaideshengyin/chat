//代码已完整
//INotification
//IObserver

module puremvc {
	export class Observer implements IObserver {

		private notify:Function = null;

		private context:any = null;

		public constructor(notifyMethod:Function, notifyContext:any) {
			//notifyMethod = Controller.executeCommand
			//notifyContext = Controller
			this.setNotifyMethod(notifyMethod);
			this.setNotifyContext(notifyContext);
		}

		private getNotifyMethod():Function
		{
			return this.notify;
		}


		setNotifyMethod(notifyMethod:Function):void{
			this.notify = notifyMethod;
		}

		
		private getNotifyContext():any{
			return this.context;
		}


		setNotifyContext(notifyContext:any):void{
			this.context = notifyContext;
		}


		notifyObserver(notification:INotification):void{
			//this.getNotifyMethod() = Controller.executeCommand
			//notification = new Notification(AppFacade.STARTUP, GameLayerManager.gameLayer())
			//this.getNotifyContext() = Controller
			this.getNotifyMethod().call(this.getNotifyContext(), notification);
		}


		compareNotifyContext(object:any):boolean{
			return object === this.context;
		}
	}
}