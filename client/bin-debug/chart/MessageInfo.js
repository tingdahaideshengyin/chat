var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var chart;
(function (chart) {
    var MessageInfo = (function () {
        /**
         * playerName=玩家名字
         * headIconName = 头像资源名字
         * saidText = 消息内容
         * type=消息类型；0=自己发送的消息，1=接受到别人的消息
         * time=发送消息的时间
         */
        function MessageInfo(playerName, headIconName, saidText, type, time) {
            this._data = new chart.MessageData(playerName, headIconName, saidText, type, time);
            this._view = new chart.MessageView(playerName, headIconName, saidText, type, time);
        }
        /*-----------------------------------------------------------------------------------------
                                                初始化UI
        -----------------------------------------------------------------------------------------*/
        //设置数据
        //设置视图
        //显示名字
        MessageInfo.prototype.showName = function () {
        };
        Object.defineProperty(MessageInfo.prototype, "view", {
            /*-----------------------------------------------------------------------------------------
                                                    公共方法
            -----------------------------------------------------------------------------------------*/
            /** 获取视图 */
            get: function () {
                return this._view;
            },
            enumerable: true,
            configurable: true
        });
        return MessageInfo;
    }());
    chart.MessageInfo = MessageInfo;
    __reflect(MessageInfo.prototype, "chart.MessageInfo");
})(chart || (chart = {}));
//# sourceMappingURL=MessageInfo.js.map