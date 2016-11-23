//代码已完整
//INotifier
//IFacade

//Facade

//相当于事件发送者，继承该类，即可发送Notification事件
//事件必须通过 Facade 实例对象来发送

module puremvc {
	export class Notifier implements INotifier{

		public static MULTITON_MSG:string = "multitonKey for this INotifier not yet initialized !";
		
		public multitonKey:string = null;

		public initializeNotifier(key:string):void{
			this.multitonKey = key;
		}
		

		//？表示可选参数，可不填写
		public sendNotification(name:string,body?:any,type?:string):void{
			if( this.facade() ){
				this.facade().sendNotification( name, body , type );
			}
		}

		public facade():IFacade{
			if(this.multitonKey == null){
				throw Error(Notifier.MULTITON_MSG);
			}

			return Facade.getInstance( this.multitonKey );
		}
	}
}