//代码已经完整
//INotification

module puremvc {
	export interface IObserver {

		setNotifyMethod(notifyMethod:Function):void;

		setNotifyContext(notifyContext:any):void;

		notifyObserver(notification:INotification):void;

		compareNotifyContext(object:any):boolean;
	}
}