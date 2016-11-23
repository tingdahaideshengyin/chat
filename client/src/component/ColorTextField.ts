  //原ETextField,代码已经完整
  
  /**
    * 多颜色文本类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 使用方法：this.textTF.setText("haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa");
    */

class ColorTextField extends egret.TextField{

    public constructor(){
        super();
    }

    //demo
    //"haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
    public setText(str:string = ""):void {
        var styleParser = new egret.HtmlTextParser();     
        this.textFlow = styleParser.parser(str)
    }

}

