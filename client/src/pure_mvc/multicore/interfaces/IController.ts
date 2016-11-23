//代码已经完整

//INotification
module puremvc {
	export interface IController {
		
		executeCommand(notification:INotification):void;

		registerCommand(notificationName:string,commandCkassRef:Function):void;

		hasCommand(notificationName:string):boolean;

		removeCommand(notificationName:string):void;
	}
}