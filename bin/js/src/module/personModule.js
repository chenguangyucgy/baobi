/**
* name
*/
var module;
(function (module) {
    var personModule = /** @class */ (function () {
        function personModule() {
            /**路线数 */
            this._routeNum = 3;
            /**新手互动 */
            this._interactNew = true;
            /**人物控制 */
            this._figureControl = true;
            //互动概率
            this._huNum = 7;
            //**判断是否添加了人物 */
            this._addFigure = false;
        }
        Object.defineProperty(personModule.prototype, "routeNum", {
            /**获取路线数 */
            get: function () {
                return this._routeNum;
            },
            /**设置路线数 */
            set: function (content) {
                this._routeNum = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personModule.prototype, "interactNew", {
            /**获取新手互动 */
            get: function () {
                return this._interactNew;
            },
            /**设置新手互动 */
            set: function (content) {
                this._interactNew = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personModule.prototype, "figureControl", {
            /**获取人物控制 */
            get: function () {
                return this._figureControl;
            },
            /**设置人物控制 */
            set: function (content) {
                this._figureControl = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personModule.prototype, "huNum", {
            /**获取互动概率 */
            get: function () {
                return this._huNum;
            },
            /**设置互动概率 */
            set: function (content) {
                this._huNum = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(personModule.prototype, "addFigure", {
            /**获取人物控制 */
            get: function () {
                return this._addFigure;
            },
            /**设置人物控制 */
            set: function (content) {
                this._addFigure = content;
            },
            enumerable: true,
            configurable: true
        });
        personModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new personModule;
            }
            return this._instance;
        };
        return personModule;
    }());
    module.personModule = personModule;
})(module || (module = {}));
//# sourceMappingURL=personModule.js.map