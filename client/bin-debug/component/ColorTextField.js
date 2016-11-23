//原ETextField,代码已经完整
/**
  * 多颜色文本类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法：this.textTF.setText("haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa");
  */
var ColorTextField = (function (_super) {
    __extends(ColorTextField, _super);
    function ColorTextField() {
        _super.call(this);
    }
    var d = __define,c=ColorTextField,p=c.prototype;
    //demo
    //"haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
    p.setText = function (str) {
        if (str === void 0) { str = ""; }
        var styleParser = new egret.HtmlTextParser();
        this.textFlow = styleParser.parser(str);
    };
    return ColorTextField;
}(egret.TextField));
egret.registerClass(ColorTextField,'ColorTextField');
//# sourceMappingURL=ColorTextField.js.map