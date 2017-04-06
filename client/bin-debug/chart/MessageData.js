var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
        Object.defineProperty(MessageData.prototype, "playerName", {
            /*-----------------------------------------------------------------------------------------
                                                    对外API
            -----------------------------------------------------------------------------------------*/
            /** 获取玩家名字 */
            get: function () {
                return this._playerName;
            },
            /** 设置玩家名字 */
            set: function (playerName) {
                this._playerName = playerName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MessageData.prototype, "playerHeadIconName", {
            /** 获取玩家头像资源名字 */
            get: function () {
                return this._playerHeadIconName;
            },
            /** 设置玩家头像资源名字 */
            set: function (headIconName) {
                this._playerHeadIconName = headIconName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MessageData.prototype, "playerSaidText", {
            /** 获取玩家消息内容 */
            get: function () {
                return this._playerSaidText;
            },
            /** 设置玩家消息内容 */
            set: function (saidText) {
                this._playerSaidText = saidText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MessageData.prototype, "type", {
            /** 获取玩家消息类型 */
            get: function () {
                return this._type;
            },
            /** 设置玩家消息类型 */
            set: function (type) {
                this._type = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MessageData.prototype, "time", {
            /** 获取玩家消息时间 */
            get: function () {
                return this._time;
            },
            /** 获取玩家消息时间 */
            set: function (time) {
                this._time = time;
            },
            enumerable: true,
            configurable: true
        });
        return MessageData;
    }());
    chart.MessageData = MessageData;
    __reflect(MessageData.prototype, "chart.MessageData");
})(chart || (chart = {}));
//# sourceMappingURL=MessageData.js.map