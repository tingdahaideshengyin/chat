//代码已经完整
//ICommand
//INotifier
//INotification

//Notifier

module puremvc {
	export class SimpleCommand extends Notifier implements ICommand,INotifier{
		
		
		execute(notification:INotification):void{

		}
	}
}