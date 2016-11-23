//代码已经完整
//IMediator
//INotifier
//INotification

//Notifier

module puremvc {
	export class Mediator extends Notifier implements IMediator,INotifier{

		mediatorName:string = null;
		viewComponent:any = null;
		static NAME:string = "Mediator"

		public constructor(mediatorName:string =null,viewComponent:any=null) {
			super();
			this.mediatorName = (mediatorName !=null) ? mediatorName : Mediator.NAME;
			this.viewComponent = viewComponent;
		}


		getMediatorName():string{
			return this.mediatorName;
		}


		getViewComponent():any{
			return this.viewComponent;
		}


		setViewComponent(viewComponent:any):void{
			this.viewComponent = viewComponent;
		}


		listNotificationInterests():string[]{
			return new Array<string>();
		}


		handleNotification(notification:INotification):void{

		}


		onRegister():void{

		}
		

		onRemove():void{

		}
	}
}