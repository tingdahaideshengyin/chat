//代码已经完整
//INotifier
//IProxy
//IMediator
//INotification

module puremvc {
	export interface IFacade extends INotifier{
		
		registerCommand(notificationName:string,commandClassRes:Function):void;

		removeCommand(notificationName:string):void;

		hasCommand(notificationName:string):boolean;

		registerProxy(proxy:IProxy):void;

		retrieveProxy(proxyName:string):IProxy;

		removeProxy(proxyName:string):IProxy;

		hasProxy(proxyName:string):boolean;

		registerMediator(mediator:IMediator):void;

		retrieveMediator(mediatorName:string):IMediator;

		removeMediator(mediatorName:string):IMediator;

		hasMediator(mediatorName:string):boolean;

		notifyObservers(notification:INotification):void;
	}
}