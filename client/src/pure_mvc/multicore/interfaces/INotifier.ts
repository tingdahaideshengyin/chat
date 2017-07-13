//代码已完整
//相当于事件发送者，继承该类，即可发送Notification事件

module puremvc{

	export interface INotifier {
		/**
		 * Create and send a <code>Notification</code>.
		 * 
		 * keeps us from having to construct new <code>Notification</code> instances in our
		 * implementation code.
		 * 
		 * @param name
		 * 		The name of the notification to send.
		 * 		消息的名字,string类型
		 * 
		 * @param body
		 * 		The body of the notification (optional).
		 * 		消息的数据，类型any
		 * 
		 * @param type
		 * 		The type of the notification (optional).
		 * 		消息的类型，tring类型
		 */
		sendNotification(name:string,body?:any,type?:string):void;

		/**
		 * Initialize this INotifier interface.
		 * 
		 * This is how a Notifier gets its multitonKey.Call to sendNotification or to access the
		 * facade will fail until after this method has been called
		 * 
		 * @param key
		 * 		The multiton key for this <code>INotifier</code> to use.
		 * 		初始化消息通知者，key，多核标识
		 * 
		 */
		initializeNotifier(key:string):void;
	}
}