module utils {
	/**
	 * 输入框验证
	 */
	export class InputCheck {
		
		/**
		 * 用户账号验证
		 */
		public static checkAccount(text:string):string{
			var result:string = "";
			if (text == "" || text == null){
				result = "账号不能为空"
				return result;
			}

			if(text.length <=2 || text.length>15){
				result = "账号长度在3-15位之间"
				return result;
			}
		}

		public static checkPassword(text:string):string{
			var result:string = "";
			if (text == "" || text == null){
				result = "密码不能为空"
				return result;
			}

			if(text.length <=4 || text.length>15){
				result = "密码长度在5-15位之间"
				return result;
			}
		}
	}
}