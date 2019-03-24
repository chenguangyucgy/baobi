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
    var jings = /** @class */ (function (_super) {
        __extends(jings, _super);
        function jings() {
            var _this = _super.call(this) || this;
            Laya.timer.once(100, _this, function () {
                Laya.Tween.to(_this, { x: wuling.map.getInstance().pan.hScrollBar.value * 1.50 + wuling.Top.getInstance().jinImg.x, y: wuling.map.getInstance().pan.vScrollBar.value * 1.50 + 10 }, 300, null, Laya.Handler.create(_this, function () {
                    wuling.Top.getInstance().playjinbi();
                    _this.removeSelf();
                }));
            });
            return _this;
        }
        return jings;
    }(ui.jingsUI));
    wuling.jings = jings;
})(wuling || (wuling = {}));
//# sourceMappingURL=jings.js.map