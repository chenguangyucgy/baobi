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
    var begin = /** @class */ (function (_super) {
        __extends(begin, _super);
        function begin() {
            var _this = _super.call(this) || this;
            Laya.Tween.to(_this.zhmd, { y: 210 }, 400, null, Laya.Handler.create(_this, _this.zhTween), 800);
            _this.into.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        begin.prototype.onclick = function () {
            this.visible = false;
            wuling.map.getInstance();
            wuling.Bottom.getInstance();
            wuling.Top.getInstance();
            this.removeSelf();
        };
        begin.prototype.zhTween = function () {
            var _this = this;
            Laya.Tween.to(this.zhmd, { y: 194 }, 100, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(_this.zhmd, { y: 204 }, 100);
            }));
            Laya.Tween.to(this.into, { alpha: 1, scaleX: 0.7, scaleY: 0.7 }, 300, null, Laya.Handler.create(this, this.intoTween));
        };
        begin.prototype.intoTween = function () {
            Laya.Tween.to(this.into, { alpha: 0.7, scaleX: 0.555, scaleY: 0.555 }, 400, null, Laya.Handler.create(this, this.intoTween2));
        };
        begin.prototype.intoTween2 = function () {
            Laya.Tween.to(this.into, { alpha: 1, scaleX: 0.7, scaleY: 0.7 }, 400, null, Laya.Handler.create(this, this.intoTween));
        };
        begin.getInstance = function () {
            if (this._instance == null) {
                this._instance = new begin;
                Laya.stage.addChild(this._instance);
                this._instance.zOrder = 999999;
            }
            return this._instance;
        };
        return begin;
    }(ui.beginUI));
    wuling.begin = begin;
})(wuling || (wuling = {}));
//# sourceMappingURL=begin.js.map