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
var wuling;
(function (wuling) {
    var sange = /** @class */ (function (_super) {
        __extends(sange, _super);
        function sange() {
            var _this = _super.call(this) || this;
            //三方格动画
            _this.next();
            return _this;
        }
        sange.prototype.next = function () {
            Laya.Tween.to(this.zfxBig, { scaleX: 0.8, scaleY: 0.8 }, 500, null, Laya.Handler.create(this, this.next1));
            Laya.Tween.to(this.zfxSmall, { scaleX: 0.8, scaleY: 0.8 }, 500);
            Laya.Tween.to(this.zfxCen, { scaleX: 0.3, scaleY: 0.3 }, 500);
        };
        sange.prototype.next1 = function () {
            Laya.Tween.to(this.zfxBig, { scaleX: 0.3, scaleY: 0.3 }, 500, null, Laya.Handler.create(this, this.next));
            Laya.Tween.to(this.zfxSmall, { scaleX: 0.3, scaleY: 0.3 }, 500);
            Laya.Tween.to(this.zfxCen, { scaleX: 0.8, scaleY: 0.8 }, 500);
        };
        return sange;
    }(ui.sangeUI));
    wuling.sange = sange;
})(wuling || (wuling = {}));
//# sourceMappingURL=sange.js.map