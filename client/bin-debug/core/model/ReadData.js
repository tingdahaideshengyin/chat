//代码已经完整，源代码中“P”代码比分，张鹏改名为 readData
/**
 * 通过excel名称获得excel数据proxy
 */
var readData;
(function (readData) {
    /*-----------------------------------------------------------------------------------------
                                                excel数据
    -----------------------------------------------------------------------------------------*/
    /**
     * 这是1个读取excel数据的例子
     */
    function getTemplateDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    }
    readData.getTemplateDataProxy = getTemplateDataProxy;
    /*-----------------------------------------------------------------------------------------
                                                游戏其他数据
    -----------------------------------------------------------------------------------------*/
    /**
     * 这是1个读取游戏数据的例子
     */
    function getGameDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
    }
    readData.getGameDataProxy = getGameDataProxy;
    //----------------------------------------------------------------------------------------------
    //获取登陆数据
    //----------------------------------------------------------------------------------------------
    function getLoginProxy() {
        return game.AppFacade.getInstance().retrieveProxy(LoginProxy.NAME);
    }
    readData.getLoginProxy = getLoginProxy;
})(readData || (readData = {}));
//# sourceMappingURL=ReadData.js.map