/**
* name
*/
var module;
(function (module) {
    var achievemenModule = /** @class */ (function () {
        function achievemenModule() {
            this._getData = [];
        }
        Object.defineProperty(achievemenModule.prototype, "getData", {
            get: function () {
                return this._getData;
            },
            set: function (data) {
                this._getData = data;
            },
            enumerable: true,
            configurable: true
        });
        achievemenModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new achievemenModule;
            }
            return this._instance;
        };
        return achievemenModule;
    }());
    module.achievemenModule = achievemenModule;
})(module || (module = {}));
//# sourceMappingURL=achievemenModule.js.map