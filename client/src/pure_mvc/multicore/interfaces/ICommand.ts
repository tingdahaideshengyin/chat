//代码已经完整
//INotification
//INotifier

module puremvc {
	export interface ICommand extends INotifier {
		
		execute(notification:INotification):void;
	}
}