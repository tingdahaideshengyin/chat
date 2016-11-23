//代码已完整
//IView
//IObserver
//IMediator
//INotification

module puremvc {
	export class View implements IView {
		/**
		 * Mapping of <code>Medittor</code> names to <code>Medittor</code> instances.
		 * 
		 * @protected
		 */
		mediatorMap:Object = null;

		/**
		 * Mapping of <code>NOtification</code> names to <code>Observers</code> lists.
		 * 
		 * @protected
		 */
		observerMap:Object = null;

		/**
		 * Multiton key for this <code>View</code> instance.
		 * 
		 * @protected
		 */
		multitonKey:string = null;

		static instanceMap:Object = {};
		static MULTITON_MSG:string = "View instance for this multiton key already constructed !";
		
		public constructor(key:string) {
			if(View.instanceMap[key]){
				throw Error(View.MULTITON_MSG);
			}

			View.instanceMap[key] = this;

			this.multitonKey = key;
			this.mediatorMap = {};
			this.observerMap = {};

			this.initializeView();
		}

		initializeView():void{

		}


		registerObserver(notificationName:string,observer:IObserver):void{
			//notificationName = AppFacade.STARTUP
			//observer = new Observer(Controller.executeCommand,Controller)
			var obervers:IObserver[] = this.observerMap[ notificationName ];
			if(obervers){
				obervers.push( observer);
			} else {
				this.observerMap[ notificationName ] = [ observer ];
			}
		}


		removeObserver(notificationName:string,notifyContext:any):void{
			var observers:IObserver[] = this.observerMap[ notificationName ];
			var i:number = observers.length;
			while(i--){
				var observer:IObserver = observers[ i ];
				if(observer.compareNotifyContext(notifyContext))
				{
					observers.splice(i, 1);
					break;
				}
			}

			if( observers.length == 0){
				delete this.observerMap[ notificationName ];
			}
		}


		notifyObservers(notification:INotification):void{
			var notificationName:string = notification.getName();
			var observersRef = this.observerMap[ notificationName ];
			//notificationName = AppFacade.STARTUP
			//observersRef = new Observer(Controller.executeCommand,Controller)

			if(observersRef)
			{
				var observers = observersRef.slice(0);
				var len = observers.length;
				for(var i:number = 0; i<len; i++)
				{
					var observer = observers[ i ];
					observer.notifyObserver(notification);
				}
			}

		}

		registerMediator(mediator:IMediator):void{
			var name:string = mediator.getMediatorName();
			if(this.mediatorMap[ name ]){
				return;
			}
			mediator.initializeNotifier( this.multitonKey );
			this.mediatorMap[ name ] = mediator;
			var interests:string[] = mediator.listNotificationInterests();
			var len:number = interests.length;
			if(len > 0){
				var observer:IObserver = new Observer(mediator.handleNotification, mediator)
				for(var i:number =0; i<len; i++){
					this.registerObserver(interests[ i ], observer);
				}
			}

			mediator.onRegister();
		}

		retrieveMediator(mediatorName:string):IMediator{
			return this.mediatorMap[ mediatorName ] || null;
		}

		removeMediator(mediatorNmae:string):IMediator{
			var mediator:IMediator = this.mediatorMap[ mediatorNmae ];
			if(mediator){
				return null;
			}
			var interests:string[] = mediator.listNotificationInterests();
			var i:number = interests.length;
			while(i--){
				this.removeObserver( interests[i], mediator);
			}

			delete this.mediatorMap[ mediatorNmae ];

			mediator.onRemove();

			return mediator;
		}

		hasMediator(mediatorName:string):boolean{
			return this.mediatorMap[ mediatorName] != null;
		}

		static getInstance(key:string):IView{
			if(!View.instanceMap[ key ]){
				View.instanceMap[ key ] = new View( key );
			}

			return View.instanceMap[ key ];
		}

		static removeView( key:string ):void{
			delete View.instanceMap[ key ];
		}
	}
}