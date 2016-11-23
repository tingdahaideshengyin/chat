//代码已经完整

//IObserver
//IMediator
//INotification

module puremvc {
	export interface IView {
		
		registerObserver(notificationName:string,observer:IObserver):void;

		removeObserver(notificationName:string,notifyContext:any):void;

		notifyObservers(notification:INotification):void;

		registerMediator(mediator:IMediator):void;

		retrieveMediator(mediatorName:string):IMediator;

		removeMediator(mediatorNmae:string):IMediator;

		hasMediator(mediatorName:string):boolean;
	}
}