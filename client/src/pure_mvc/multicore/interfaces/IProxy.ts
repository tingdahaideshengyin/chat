//INotifier


module puremvc {
	export interface IProxy extends INotifier{
		/**
		 * get the name of the <code>Iproxy</code> interface.
		 * 
		 * @return
		 * 		The name of the <code>Iproxy</code> interface.
		 */
		getProxyName():string;


		/**
		 * set the data of the <code>Iproxy</code> interface.
		 * 
		 * @param data
		 * 		The data to set for the <code>Iproxy</code> interface.
		 */
		setData(data:any):void;
		

		/**
		 * get the data of the <code>Iproxy</code> interface.
		 * 
		 * @return
		 * 		The data held in the <code>Iproxy</code> interface.
		 */
		getData():any;


		/**
		 * called by the Model when the <code>IProxy</code> is registered. This method has to be
		 * overridden by the subclass to know when the interface is registered.
		 * 
		 */
		onRegister():void;

		/**
		 * called by the Model when the <code>IProxy</code> is removed. This method has to be
		 * overridden by the subclass to know when the interface is removed.
		 * 
		 */
		onRemove():void;
	}
}