/**
* name
*/
var module;
(function (module) {
    var mapModule = /** @class */ (function () {
        function mapModule() {
            /**仓库 */
            this._canku = [];
            /**设施滚动位置 */
            this._buildinghS = 0;
            this.canZi = null;
            /**判断当map页面加载过一次才可调用 */
            this._loadingMap = false;
            this.shopZi = null;
        }
        Object.defineProperty(mapModule.prototype, "dataContent", {
            get: function () {
                return this.canZi;
            },
            set: function (content) {
                this.canZi = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mapModule.prototype, "dataContents", {
            get: function () {
                return this.shopZi;
            },
            set: function (content) {
                this.shopZi = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mapModule.prototype, "canku", {
            get: function () {
                return this._canku;
            },
            set: function (content) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mapModule.prototype, "objcanku", {
            get: function () {
                return this._objcanku;
            },
            set: function (content) {
                this._objcanku = content;
            },
            enumerable: true,
            configurable: true
        });
        mapModule.prototype.cankus = function (arr) {
            this._canku = arr;
        };
        mapModule.prototype.obgcanku = function () {
            if (Number(this._objcanku["money"]) <= wuling.Top.getInstance().jin) {
                wuling.Top.getInstance().jin = wuling.Top.getInstance().jin - Number(this._objcanku["money"]);
                wuling.Top.getInstance().gabi();
                for (var i = 0; i < this._canku.length; i++) {
                    if (this._canku[i]["url"] == this._objcanku["url"]) {
                        this._canku[i]["money"] = (Number(this._canku[i]["money"]) + 1) + "";
                        return;
                    }
                }
                this._canku.push({ url: this._objcanku["url"], money: this._objcanku["money"], sname: this._objcanku["sname"] });
                this._canku[i]["money"] = "1";
            }
        };
        Object.defineProperty(mapModule.prototype, "buildinghS", {
            get: function () {
                return this._buildinghS;
            },
            set: function (content) {
                this._buildinghS = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mapModule.prototype, "loadingMap", {
            /**获取map页面是否加载过一次 */
            get: function () {
                return this._loadingMap;
            },
            /**设置map页面加载 */
            set: function (content) {
                this._loadingMap = content;
            },
            enumerable: true,
            configurable: true
        });
        mapModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new mapModule;
            }
            return this._instance;
        };
        return mapModule;
    }());
    module.mapModule = mapModule;
})(module || (module = {}));
//# sourceMappingURL=mapModule.js.map