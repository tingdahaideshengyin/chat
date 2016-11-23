//代码已完整
//IProxy
//INotifier

//Notifier

module puremvc {
	export class Proxy extends Notifier implements IProxy,INotifier{
		proxyName:string =null;
		data:any = null;

		static NAME:string = "Proxy";
		public constructor(proxyName:string=null, data:any=null) {
			super();
			this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;

			if(data != null){
				this.setData(data);
			}
		}


		getProxyName():string{
			return this.proxyName;
		}

		setData(data:any):void{
			this.data = data;
		}

		getData():any{
			return this.data;
		}

		onRegister():void{

		}

		onRemove():void{

		}
	}
}