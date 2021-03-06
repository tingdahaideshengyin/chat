//代码已完整
//IFacade
//IModel
//IView
//IController
//IProxy
//IMediator
//INotification

//Controller
//Model
//View
//Notification


module puremvc {
	export class Facade implements IFacade{
		
		model:IModel = null;
		view:IView = null;
		controller:IController = null;

		multitonKey:string = null;

		static instanceMap:Object = {};
		static MULTITON_MSG:string = "Facade instance for this multiton key already constructed !";


		public constructor(key:string) {
			if(Facade.instanceMap[key]){
				throw Error(Facade.MULTITON_MSG);
			}
			//multitonKey赋值
			this.initializeNotifier(key);
			//创建单例引用
			Facade.instanceMap[key] = this;
			this.initializeFacade();
		}

		initializeFacade():void{
			this.initializeModel();
			this.initializeController();
			this.initializeView();
		}

		initializeModel():void{
			if(!this.model){
				this.model = Model.getInstance(this.multitonKey);
			}
		}

		initializeController():void{
			if(!this.controller){
				this.controller = Controller.getInstance(this.multitonKey);
			}
		}

		initializeView():void{
			if(!this.view){
				this.view = View.getInstance(this.multitonKey);
			}
		}


		/**
		 * 注册1个 Icommand 对象，该 Icommand 对象使用 IController 接口,
		 * 收到 notificationName 消息后，由 commandClassRes 对象执行相关操作
		 * 
		 * @param notificationName
		 *        消息发送者，以及其包含的信息名字
		 * 
		 * @param commandClassRes
		 *        收到 notificationName 消息后，由 commandClassRes 对象执行相关操作
		 */
		registerCommand(notificationName:string,commandClassRes:Function):void{
			//notificationName = AppFacade.STARTUP
			//commandClassRes = StartupCommand
			this.controller.registerCommand(notificationName, commandClassRes);
		}

		removeCommand(notificationName:string):void{
			this.controller.removeCommand( notificationName );
		}

		hasCommand(notificationName:string):boolean{
			return this.controller.hasCommand( notificationName );
		}

		registerProxy(proxy:IProxy):void{
			this.model.registerProxy( proxy );
		}

		retrieveProxy(proxyName:string):IProxy{
			return this.model.retrieveProxy( proxyName );
		}

		removeProxy(proxyName:string):IProxy{
			var proxy:IProxy;
			if(this.model){
				proxy = this.model.removeProxy( proxyName );
			}
			return proxy;
		}

		hasProxy(proxyName:string):boolean{
			return this.model.hasProxy( proxyName );
		}

		registerMediator(mediator:IMediator):void{
			if(this.view){
				this.view.registerMediator( mediator );
			}
		}

		retrieveMediator(mediatorName:string):IMediator{
			return this.view.retrieveMediator( mediatorName );
		}

		removeMediator(mediatorName:string):IMediator{
			var mediator:IMediator;
			if(this.view){
				mediator = this.view.removeMediator( mediatorName );
			}
			return mediator;
		}

		hasMediator(mediatorName:string):boolean{
			return this.view.hasMediator( mediatorName );
		}

		/**
		 * 将消息通知给view对象中得观察者
		 */
		notifyObservers(notification:INotification):void{
			if(this.view){
				this.view.notifyObservers( notification );
			}
		}

		/**
		 * 发送消息，所有的消息都是直接或者间接通过facade发送，将消息通知给view对象中得观察者。
		 * 
		 * name 消息名字 body 消息内容 type 消息类型
		 */
		sendNotification(name:string,body?:any,type?:string):void{
			//name = AppFacade.STARTUP
			//body = GameLayerManager.gameLayer()
			this.notifyObservers( new Notification(name, body, type));
		}

		initializeNotifier(key:string):void{
			this.multitonKey = key;
		}

		static getInstance( key:string ):IFacade{
			if( !Facade.instanceMap[ key ] ){
				Facade.instanceMap[ key ] = new Facade( key );
			}

			return Facade.instanceMap[ key ];
		}

		static hasCore( key:string ):boolean{
			return Facade.instanceMap[ key ] ? true:false;
		}

		static removeCore( key:string ):void{
			if( !Facade.instanceMap[ key ]){
				return;
			}
			Model.removeModel( key );
			View.removeView( key );
			Controller.removeController( key );
			
			delete Facade.instanceMap[ key ];
		}
	}
}