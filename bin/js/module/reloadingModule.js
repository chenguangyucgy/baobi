/**
* 服装跟换数据
*/
var module;
(function (module) {
    var reloadingModule = /** @class */ (function () {
        function reloadingModule() {
            /**服装信息 */
            this._reloadingData = {};
            /**Item内容 */
            this._ItemData = [
                { id: 0, use: true, Lv: 0, BuySuit: "BuySuit1", jin: 0, class: "r0", nameImg: "reloading/huangName1.png" },
                { id: 1, use: false, Lv: 5, BuySuit: "BuySuit2", jin: 1000, class: "r1", nameImg: "reloading/huangName2.png" },
                { id: 2, use: false, Lv: 10, BuySuit: "BuySuit3", jin: 3000, class: "r2", nameImg: "reloading/huangName3.png" },
                { id: 3, use: false, Lv: 15, BuySuit: "BuySuit4", jin: 5000, class: "r3", nameImg: "reloading/huangName4.png" }
            ];
        }
        Object.defineProperty(reloadingModule.prototype, "reloadingData", {
            /**获取服装信息 */
            get: function () {
                return this._reloadingData;
            },
            /**设置服装信息 */
            set: function (content) {
                this._reloadingData = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(reloadingModule.prototype, "ItemData", {
            /**获取Item内容 */
            get: function () {
                return this._ItemData;
            },
            /**设置Item内容 */
            set: function (content) {
                this._ItemData = content;
            },
            enumerable: true,
            configurable: true
        });
        reloadingModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new reloadingModule;
            }
            return this._instance;
        };
        return reloadingModule;
    }());
    module.reloadingModule = reloadingModule;
})(module || (module = {}));
//# sourceMappingURL=reloadingModule.js.map