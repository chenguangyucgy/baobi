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
    var huoDong = /** @class */ (function (_super) {
        __extends(huoDong, _super);
        function huoDong() {
            var _this = _super.call(this) || this;
            Laya.timer.once(5000, _this, function () {
                _this.returnBtn.on(Laya.Event.CLICK, _this, _this.DClick);
            });
            return _this;
        }
        huoDong.prototype.DClick = function () {
            this.removeSelf();
        };
        huoDong.getInstances = function () {
            if (this._instance == null) {
                this._instance = new huoDong;
                this._instance.zOrder = 999999999;
                this._instance.width = Laya.stage.width;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return huoDong;
    }(ui.huoDongUI));
    wuling.huoDong = huoDong;
})(wuling || (wuling = {}));
//# sourceMappingURL=huoDong.js.map