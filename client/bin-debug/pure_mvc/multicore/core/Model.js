//已完整
//IModel
//IProxy
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//Model保持对Proxy对象的引用，Proxy负责操作数据模型，与远程服务通信存储数据
//这样保证了Moldel层的可移植性
var puremvc;
(function (puremvc) {
    var Model = (function () {
        function Model(key) {
            /**
             * HashTable of <code>IProxy</code> registered with ths <code>Model</code>.
             *
             * @protected
             */
            this.proxyMap = null;
            /**
             * Multiton key for this core.
             *
             * @protected
             */
            this.multitonKey = null;
            if (Model.instanceMap[key]) {
                throw Error(Model.MULTITON_MSG);
            }
            Model.instanceMap[key] = this;
            this.multitonKey = key;
            this.proxyMap = {};
            this.initializeModel();
        }
        /**
         * Initialize the mutiton <code>Model</code> instance.
         *
         * Called automatically by the constructor. this is the opportunity to Initialize the
         * multiton instance in a subclass ....
         *
         * @protected
         */
        Model.prototype.initializeModel = function () {
        };
        /**
         * register an <code>IProxy</code> with the <code>Model</code>.
         *
         * @param proxy
         * 		An <code>IProxy</code> to be held by the <code>Model</code>.
         *
         */
        Model.prototype.registerProxy = function (proxy) {
            proxy.initializeNotifier(this.multitonKey);
            this.proxyMap[proxy.getProxyName()] = proxy;
            proxy.onRegister();
        };
        /**
         * remove an <code>IProxy</code> with the <code>Model</code>.
         *
         * @param proxyName
         * 		The name of the <code>IProxy</code> interface to be removed.
         *
         * @return
         * 		The <code>IProxy</code> that was removed from the <code>Model</code> or an
         * 		explicit <code>null</null> if the <code>IProxy</code> didn't exist.
         *
         */
        Model.prototype.removeProxy = function (proxyName) {
            var proxy = this.proxyMap[proxyName];
            if (proxy) {
                delete this.proxyMap[proxyName];
                proxy.onRemove();
            }
            return proxy;
        };
        /**
         * Retrieve an <code>IProxy</code> from the <code>Model</code>.
         *
         * @param proxyName
         * 		The <code>IProxy</code> name to retrieve from the <code>Model</code>.
         *
         * @return
         * 		The <code>IProxy</code> that was removed from the <code>Model</code> or an
         * 		explicit <code>null</null> if the <code>IProxy</code> didn't exist.
         *
         */
        Model.prototype.retrieveProxy = function (proxyName) {
            return this.proxyMap[proxyName] || null;
        };
        /**
         * Check if a Proxy is registerred.
         *
         * @param proxyName
         * 		The name of the <code>IProxy</code> to verify the existence of its registration.
         *
         * @return
         * 		A Proxy is currently registered with the given <code>proxyName</code>
         *
         */
        Model.prototype.hasProxy = function (proxyName) {
            return this.proxyMap[proxyName] != null;
        };
        Model.getInstance = function (key) {
            if (!Model.instanceMap[key]) {
                Model.instanceMap[key] = new Model(key);
            }
            return Model.instanceMap[key];
        };
        Model.removeModel = function (key) {
            delete Model.instanceMap[key];
        };
        return Model;
    }());
    /**
     * <code>Model</code> singleton instance map;
     *
     * @protected
     */
    Model.instanceMap = {};
    Model.MULTITON_MSG = "Modle instance for this multiton key already constructed";
    puremvc.Model = Model;
    __reflect(Model.prototype, "puremvc.Model", ["puremvc.IModel"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Model.js.map