//代码已完整
//INotification功能有点像EVENT，是用来发送和接受的对象

module puremvc {
	export interface INotification {
		
		getName():string;

		setBody(body:any):void;

		getBody():any;

		setType(type:string):void;

		getType():string;

		toString():string;
	}
}