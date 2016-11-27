
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/dragonBones/dragonBones.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/chart/MessageData.js",
	"bin-debug/chart/MessageInfo.js",
	"bin-debug/chart/MessageView.js",
	"bin-debug/component/ColorTextField.js",
	"bin-debug/component/ImageButton.js",
	"bin-debug/component/KuaYuLoadImage.js",
	"bin-debug/config/GameConfig.js",
	"bin-debug/config/GlobalData.js",
	"bin-debug/constants/MainNotify.js",
	"bin-debug/constants/PanelNotify.js",
	"bin-debug/constants/SceneNotify.js",
	"bin-debug/constants/SysNotify.js",
	"bin-debug/constants/panel/ChartNotify.js",
	"bin-debug/constants/panel/UserInfoNotify.js",
	"bin-debug/pure_mvc/multicore/patterns/facade/Facade.js",
	"bin-debug/core/AppFacade.js",
	"bin-debug/pure_mvc/multicore/patterns/observer/Notifier.js",
	"bin-debug/pure_mvc/multicore/patterns/command/SimpleCommand.js",
	"bin-debug/core/controller/ControllerPrepCommand.js",
	"bin-debug/core/controller/ModelPrepCommand.js",
	"bin-debug/pure_mvc/multicore/patterns/command/MacroCommand.js",
	"bin-debug/core/controller/StartupCommand.js",
	"bin-debug/core/controller/ViewPrepCommand.js",
	"bin-debug/core/controller/processor/Processor_100_1.js",
	"bin-debug/core/controller/request/UserInfoRequest.js",
	"bin-debug/core/model/ReadData.js",
	"bin-debug/pure_mvc/multicore/patterns/proxy/Proxy.js",
	"bin-debug/core/model/ResourceProxyBase.js",
	"bin-debug/core/model/proxy/GameProxy.js",
	"bin-debug/core/model/proxy/TemplateProxy.js",
	"bin-debug/core/model/vo/GameVO.js",
	"bin-debug/core/view/GameLayerManager.js",
	"bin-debug/core/view/MainMansger.js",
	"bin-debug/core/view/SceneManager.js",
	"bin-debug/core/view/main/ActivityBar.js",
	"bin-debug/core/view/main/FunctionBar.js",
	"bin-debug/core/view/main/MainUI.js",
	"bin-debug/core/view/main/RoleInfo.js",
	"bin-debug/pure_mvc/multicore/patterns/mediator/Mediator.js",
	"bin-debug/core/view/pannel/BaseMediator.js",
	"bin-debug/core/view/pannel/PopUpManager.js",
	"bin-debug/core/view/pannel/mediator/BackpackMediator.js",
	"bin-debug/core/view/pannel/mediator/ChuangDangMediator.js",
	"bin-debug/core/view/pannel/mediator/MapMediator.js",
	"bin-debug/core/view/pannel/mediator/MessagePanelMediator.js",
	"bin-debug/core/view/pannel/mediator/QiangHuaMediator.js",
	"bin-debug/core/view/pannel/mediator/RoleMediator.js",
	"bin-debug/core/view/pannel/mediator/ShopMediator.js",
	"bin-debug/core/view/pannel/mediator/ZhaoXianMediator.js",
	"bin-debug/core/view/pannel/pannel/Backpack.js",
	"bin-debug/core/view/pannel/pannel/ChuangDang.js",
	"bin-debug/core/view/pannel/pannel/MapPanel.js",
	"bin-debug/core/view/pannel/pannel/MessagePanel.js",
	"bin-debug/core/view/pannel/pannel/QiangHuaPanel.js",
	"bin-debug/core/view/pannel/pannel/RolePanel.js",
	"bin-debug/core/view/pannel/pannel/ShopPanel.js",
	"bin-debug/core/view/pannel/pannel/ZhaoXian.js",
	"bin-debug/core/view/scene/HomeCity.js",
	"bin-debug/loading/LoadingUI.js",
	"bin-debug/loading/LoadingUI2.js",
	"bin-debug/loading/WaitPanel.js",
	"bin-debug/net/SocketManager.js",
	"bin-debug/pure_mvc/multicore/core/Controller.js",
	"bin-debug/pure_mvc/multicore/core/Model.js",
	"bin-debug/pure_mvc/multicore/core/View.js",
	"bin-debug/pure_mvc/multicore/interfaces/ICommand.js",
	"bin-debug/pure_mvc/multicore/interfaces/IController.js",
	"bin-debug/pure_mvc/multicore/interfaces/IFacade.js",
	"bin-debug/pure_mvc/multicore/interfaces/IMediator.js",
	"bin-debug/pure_mvc/multicore/interfaces/IModel.js",
	"bin-debug/pure_mvc/multicore/interfaces/INotification.js",
	"bin-debug/pure_mvc/multicore/interfaces/INotifier.js",
	"bin-debug/pure_mvc/multicore/interfaces/IObserver.js",
	"bin-debug/pure_mvc/multicore/interfaces/IProxy.js",
	"bin-debug/pure_mvc/multicore/interfaces/IView.js",
	"bin-debug/pure_mvc/multicore/patterns/observer/Notification.js",
	"bin-debug/pure_mvc/multicore/patterns/observer/Observer.js",
	"bin-debug/utils/EffectUtils.js",
	"bin-debug/utils/Global.js",
	"bin-debug/utils/NativeApi.js",
	"bin-debug/utils/RegUtils.js",
	"bin-debug/utils/TipsManager.js",
	"bin-debug/utils/TipsPanel.js",
	"bin-debug/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/utils/UtilsClass/TipsUtils.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};