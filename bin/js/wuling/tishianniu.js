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
    var tishianniu = /** @class */ (function (_super) {
        __extends(tishianniu, _super);
        function tishianniu() {
            var _this = _super.call(this) || this;
            _this.DClisk();
            return _this;
        }
        /**添加点击事件 */
        tishianniu.prototype.DClisk = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        /**点击执函数 */
        tishianniu.prototype.onClick = function () {
            this.offAll();
            var wanfa = new wuling.wanfa;
            this.parent.addChild(wanfa);
            wanfa.width = Laya.stage.width;
            //打开页面
            wanfa.popup(false, true);
        };
        tishianniu.getInstances = function () {
            if (this._instance == null) {
                this._instance = new tishianniu;
                this._instance.zOrder = 999;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return tishianniu;
    }(ui.tishianniuUI));
    wuling.tishianniu = tishianniu;
})(wuling || (wuling = {}));
//# sourceMappingURL=tishianniu.js.map