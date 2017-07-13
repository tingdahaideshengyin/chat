//代码已完整
//INotification
//IObserver

module puremvc {
	export class Observer implements IObserver {

		//收到消息通知后，需要执行的函数
		private notify:Function = null;

		//收到消息通知后，需要执行notify函数 的对象
		private context:any = null;

		public constructor(notifyMethod:Function, notifyContext:any) {
			//notifyMethod = Controller.executeCommand
			//notifyContext = Controller
			this.setNotifyMethod(notifyMethod);
			this.setNotifyContext(notifyContext);
		}

		/** 收到消息通知后，需要执行的函数 */
		private getNotifyMethod():Function
		{
			return this.notify;
		}


		setNotifyMethod(notifyMethod:Function):void{
			this.notify = notifyMethod;
		}

		/** 收到消息通知后，需要执行该函数的对象 */
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