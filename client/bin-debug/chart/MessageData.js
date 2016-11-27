var chart;
(function (chart) {
    var MessageData = (function () {
        /**
         * playerName=玩家名字
         * headIconName = 头像资源名字
         * saidText = 消息内容
         * type=消息类型；0=自己发送的消息，1=接受到别人的消息
         * time=发送消息的时间
         */
        function MessageData(playerName, headIconName, saidText, type, time) {
            /** 玩家名字 */
            this._playerName = "";
            /** 玩家头像ICON */
            this._playerHeadIconName = "";
            /** 消息内容 */
            this._playerSaidText = "";
            /** 消息时间 */
            this._time = 0;
            /** 消息类型0=自己，1=其他 */
            this._type = 0;
            this._playerName = playerName;
            this._playerHeadIconName = headIconName;
            this._playerSaidText = saidText;
            this._type = type;
            this._time = time;
        }
        var d = __define,c=MessageData,p=c.prototype;
        d(p, "playerName"
            /*-----------------------------------------------------------------------------------------
                                                    对外API
            -----------------------------------------------------------------------------------------*/
            /** 获取玩家名字 */
            ,function () {
                return this._playerName;
            }
            /** 设置玩家名字 */
            ,function (playerName) {
                this._playerName = playerName;
            }
        );
        d(p, "playerHeadIconName"
            /** 获取玩家头像资源名字 */
            ,function () {
                return this._playerHeadIconName;
            }
            /** 设置玩家头像资源名字 */
            ,function (headIconName) {
                this._playerHeadIconName = headIconName;
            }
        );
        d(p, "playerSaidText"
            /** 获取玩家消息内容 */
            ,function () {
                return this._playerSaidText;
            }
            /** 设置玩家消息内容 */
            ,function (saidText) {
                this._playerSaidText = saidText;
            }
        );
        d(p, "type"
            /** 获取玩家消息类型 */
            ,function () {
                return this._type;
            }
            /** 设置玩家消息类型 */
            ,function (type) {
                this._type = type;
            }
        );
        d(p, "time"
            /** 获取玩家消息时间 */
            ,function () {
                return this._time;
            }
            /** 获取玩家消息时间 */
            ,function (time) {
                this._time = time;
            }
        );
        return MessageData;
    }());
    chart.MessageData = MessageData;
    egret.registerClass(MessageData,'chart.MessageData');
})(chart || (chart = {}));
//# sourceMappingURL=MessageData.js.map