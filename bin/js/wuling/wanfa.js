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
    var wanfa = /** @class */ (function (_super) {
        __extends(wanfa, _super);
        function wanfa() {
            var _this = _super.call(this) || this;
            _this.shutBtn.on(Laya.Event.CLICK, _this, _this.onClick);
            return _this;
        }
        wanfa.prototype.onClick = function () {
            wuling.tishianniu.getInstances().DClisk();
            this.close();
        };
        return wanfa;
    }(ui.wanfaUI));
    wuling.wanfa = wanfa;
})(wuling || (wuling = {}));
//# sourceMappingURL=wanfa.js.map