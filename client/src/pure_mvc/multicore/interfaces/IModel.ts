//代码已经完整

//IProxy

//Model保持对Proxy对象的引用，Proxy负责操作数据模型，与远程服务通信存储数据
//这样保证了Moldel层的可移植性

module puremvc {

	export interface IModel {
		/**
		 * register an <code>IProxy</code> with the <code>Model</code>.
		 * 
		 * @param proxy
		 * 		An <code>IProxy</code> to be held by the <code>Model</code>.
		 * 
		 */
		registerProxy(proxy:IProxy):void;


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
		removeProxy(proxyName:string):IProxy;


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
		retrieveProxy(proxyName:string):IProxy;


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
		hasProxy(proxyName:string):boolean;
	}
}