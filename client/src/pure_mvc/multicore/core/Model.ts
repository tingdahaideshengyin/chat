//已完整
//IModel
//IProxy

//Model保持对Proxy对象的引用，Proxy负责操作数据模型，与远程服务通信存储数据
//这样保证了Moldel层的可移植性

module puremvc{
	export class Model implements IModel{

		/**
		 * HashTable of <code>IProxy</code> registered with ths <code>Model</code>.
		 * 
		 * @protected
		 */
		proxyMap:Object = null;

		/**
		 * Multiton key for this core.
		 * 
		 * @protected
		 */
		multitonKey:string = null;

		/**
		 * <code>Model</code> singleton instance map;
		 * 
		 * @protected
		 */
		static instanceMap:Object = {};

		static MULTITON_MSG:string = "Modle instance for this multiton key already constructed";



		public constructor(key:string) {
			if(Model.instanceMap[key]){
				throw Error(Model.MULTITON_MSG);
			}

			Model.instanceMap[key] = this;
			this.multitonKey = key;
			this.proxyMap = {};

			this.initializeModel();
		}

		/**
		 * Initialize the mutiton <code>Model</code> instance.
		 * 
		 * Called automatically by the constructor. this is the opportunity to Initialize the
		 * multiton instance in a subclass ....
		 * 
		 * @protected
		 */
		initializeModel():void{

		}


		/**
		 * register an <code>IProxy</code> with the <code>Model</code>.
		 * 
		 * @param proxy
		 * 		An <code>IProxy</code> to be held by the <code>Model</code>.
		 * 
		 */
		registerProxy(proxy:IProxy):void{
			proxy.initializeNotifier( this.multitonKey );
			this.proxyMap[ proxy.getProxyName() ] = proxy;
			proxy.onRegister();
		}


		/**
		 * remove an <code>IProxy</code> with the <code>Model</code>.
		 * 
		 * @param proxyName
		 * 		The name of the <code>IProxy</code> interface to be removed.
		 * 
		 * @return
		 * 		The <code>IProxy</code> that was removed from the <code>Model</code> or an
		 * 		explicit <code>null</null> if the <code>IProxy</code> didn't exist.
		 * 
		 */
		removeProxy(proxyName:string):IProxy{
			var proxy:IProxy = this.proxyMap[ proxyName ];
			if(proxy){
				delete this.proxyMap[ proxyName ];
				proxy.onRemove();
			}
			return proxy;
		}


		/**
		 * Retrieve an <code>IProxy</code> from the <code>Model</code>.
		 * 
		 * @param proxyName
		 * 		The <code>IProxy</code> name to retrieve from the <code>Model</code>.
		 * 
		 * @return
		 * 		The <code>IProxy</code> that was removed from the <code>Model</code> or an
		 * 		explicit <code>null</null> if the <code>IProxy</code> didn't exist.
		 * 
		 */
		retrieveProxy(proxyName:string):IProxy{
			return this.proxyMap[ proxyName ] || null;
		}


		/**
		 * Check if a Proxy is registerred.
		 * 
		 * @param proxyName
		 * 		The name of the <code>IProxy</code> to verify the existence of its registration.
		 * 
		 * @return
		 * 		A Proxy is currently registered with the given <code>proxyName</code> 
		 * 
		 */
		hasProxy(proxyName:string):boolean{
			return this.proxyMap[ proxyName ] != null;
		}

		static getInstance(key:string):IModel{
			if(!Model.instanceMap[ key ]){
				Model.instanceMap[ key ] = new Model( key );
			}

			return Model.instanceMap[ key ];
		}

		static removeModel( key ):void
		{
			delete Model.instanceMap[ key ];
		}
	}
}