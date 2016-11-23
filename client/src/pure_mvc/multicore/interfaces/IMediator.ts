//代码已经完整
//INotification
//INotifier

module puremvc{
	export interface IMediator extends INotifier {
		
		getMediatorName():string;

		getViewComponent():any;

		setViewComponent(viewComponent:any):void;

		listNotificationInterests():string[];

		handleNotification(notification:INotification):void;

		onRegister():void;

		onRemove():void;
	}
}