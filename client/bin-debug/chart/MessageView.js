var chart;
(function (chart) {
    var MessageView = (function (_super) {
        __extends(MessageView, _super);
        /**
         * playerName=玩家名字
         * headIconName = 头像资源名字
         * saidText = 消息内容
         * type=消息类型；0=自己发送的消息，1=接受到别人的消息
         * time=发送消息的时间
         */
        function MessageView(playerName, headIconName, saidText, type, time) {
            _super.call(this);
            /** 消息类型0=自己，1=其他 */
            this._type = 0;
            /** 玩家名字 */
            this._playerName = "";
            /** 玩家名字最大长度 */
            this.nameMaxLength = 12;
            /** 玩家头像宽度 */
            this.playerHeadIconWidth = 80;
            /** 玩家头像高度 */
            this.playerHeadIconHeight = 80;
            /** 消息文本框最大宽度 */
            this.textInfoMaxWidth = 400;
            //消息宽度，eui类 尺寸一旦固定，就无法自动改变，除非通过代码变
            this._messageWidth = 0;
            //消息高度，eui类 尺寸一旦固定，就无法自动改变，除非通过代码变
            this._messageHeight = 0;
            //消息背景面板与头像之间的间隔
            this._dis_backGrounpImage_playerHeadIcon = 5;
            this._type = type;
            this.setPlayerIcon(headIconName);
            this.setPlayerName(playerName);
            this.setMessageText(saidText);
            this.showMessage();
        }
        var d = __define,c=MessageView,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /*-----------------------------------------------------------------------------------------
                                                显示相关函数
        -----------------------------------------------------------------------------------------*/
        /**
         * 设置玩家头像
         */
        p.setPlayerIcon = function (iconName) {
            if (!this.playerHeadIcon) {
                this.playerHeadIcon = new egret.Bitmap();
                this.playerHeadIcon.texture = RES.getRes(iconName);
                this.playerHeadIcon.width = this.playerHeadIconWidth;
                this.playerHeadIcon.height = this.playerHeadIconHeight;
                //this.addChild(this.playerHeadIcon);
                return;
            }
            this.playerHeadIcon.texture = RES.getRes(iconName);
        };
        /**
         * 设置玩家名字
         * name = 玩家名字
         */
        p.setPlayerName = function (name) {
            if (!this.nameText) {
                this.nameText = new egret.TextField();
                this.nameText.textColor = 0x000000;
            }
            this._playerName = name;
            this.nameText.text = name;
        };
        /**
         * 设置消息内容
         * text = 发送消息的文字内容
         */
        p.setMessageText = function (text) {
            if (!this.textInfo) {
                this.backGrounpImage = new egret.Bitmap();
                this.backGrounpImage.texture = RES.getRes("tipsBg_png");
                this.addChild(this.backGrounpImage);
                this.textInfo = new egret.TextField();
                this.textInfo.textColor = 0x000000;
            }
            //设置文本显示方式
            this.textInfo.text = text;
            if (this.textInfo.width > this.textInfoMaxWidth) {
                this.textInfo.width = this.textInfoMaxWidth;
            }
        };
        //调整位置
        p.showMessage = function () {
            //背景框大小
            this.backGrounpImage.width = this.textInfo.width + 20;
            this.backGrounpImage.height = this.textInfo.height + 30;
            //玩家自己的消息
            if (this._type == 0) {
                this.backGrounpImage.x = 0;
                this.backGrounpImage.y = 0;
                this.playerHeadIcon.x = this.backGrounpImage.x + this.backGrounpImage.width + 5;
            }
            //其他人的消息
            if (this._type == 1) {
                this.playerHeadIcon.x = 5;
                this.playerHeadIcon.y = 5;
                this.nameText.x = this.playerHeadIcon.x + this.playerHeadIcon.width + 5;
                this.nameText.y = this.playerHeadIcon.y;
                this.backGrounpImage.x = this.nameText.x;
                this.backGrounpImage.y = this.nameText.y + this.nameText.height + 5;
            }
            //文本消息位置
            this.textInfo.x = this.backGrounpImage.x + 15;
            this.textInfo.y = this.backGrounpImage.y + 15;
            //显示对象
            if (this._type == 1) {
                this.addChild(this.nameText);
            }
            this.addChild(this.playerHeadIcon);
            this.addChild(this.textInfo);
            this._messageWidth = this.backGrounpImage.width + 5 + this.playerHeadIcon.width;
            this._messageHeight = this.backGrounpImage.height > this.playerHeadIcon.height ? this.backGrounpImage.height : this.playerHeadIcon.height;
        };
        /*-----------------------------------------------------------------------------------------
                                                对外API
        -----------------------------------------------------------------------------------------*/
        /**
         * 创建1个消息视图
         * headIconName = 头像资源名称
         * playerName = 玩家名字
         * textInfo = 消息文本
         */
        p.updateView = function (playerName, headIconName, saidText, type, time) {
            this._type = type;
            this.setPlayerIcon(headIconName);
            this.setPlayerName(playerName);
            this.setMessageText(saidText);
            this.showMessage();
        };
        d(p, "messageWidth"
            /** 获取消息宽度 */
            ,function () {
                return this._messageWidth;
            }
        );
        d(p, "messageHeight"
            /** 获取消息高度 */
            ,function () {
                return this._messageHeight;
            }
        );
        return MessageView;
    }(eui.Group));
    chart.MessageView = MessageView;
    egret.registerClass(MessageView,'chart.MessageView');
})(chart || (chart = {}));
//# sourceMappingURL=MessageView.js.map