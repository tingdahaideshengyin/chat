//代码已经完整，源代码中“P”代码比分，张鹏改名为 readData
/**
 * 通过excel名称获得excel数据proxy
 */
module readData {

	/*-----------------------------------------------------------------------------------------
										        excel数据
	-----------------------------------------------------------------------------------------*/
    /**
     * 这是1个读取excel数据的例子
     */
    export function getTemplateDataProxy():TemplateProxy
    {
        return <TemplateProxy><any> game.AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    }


    /*-----------------------------------------------------------------------------------------
										        游戏其他数据
	-----------------------------------------------------------------------------------------*/
    /**
     * 这是1个读取游戏数据的例子
     */
    export function getGameDataProxy():GameProxy
    {
        return <GameProxy><any>game.AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
    }
    
    //----------------------------------------------------------------------------------------------
    //获取登陆数据
    //----------------------------------------------------------------------------------------------
    export function getLoginProxy():LoginProxy
    {
        return <LoginProxy><any>game.AppFacade.getInstance().retrieveProxy(LoginProxy.NAME);
    }
}