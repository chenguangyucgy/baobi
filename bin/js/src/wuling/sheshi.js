var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var wuling;
(function (wuling) {
    var sheshi = /** @class */ (function (_super) {
        __extends(sheshi, _super);
        function sheshi() {
            var _this = _super.call(this) || this;
            _this.gb.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        sheshi.getInstance = function () {
            if (this._instance == null) {
                this._instance = new sheshi;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        sheshi.prototype.onclick = function (event) {
            this.close();
        };
        return sheshi;
    }(ui.sheshiUI));
    wuling.sheshi = sheshi;
})(wuling || (wuling = {}));
//# sourceMappingURL=sheshi.js.map