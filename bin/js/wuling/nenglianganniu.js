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
    var nenglianganniu = /** @class */ (function (_super) {
        __extends(nenglianganniu, _super);
        function nenglianganniu() {
            var _this = _super.call(this) || this;
            _this.DClisk();
            return _this;
        }
        /**添加点击事件 */
        nenglianganniu.prototype.DClisk = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        /**点击执函数 */
        nenglianganniu.prototype.onClick = function () {
            this.offAll();
            var nengliangtishi = new wuling.nengliangtishi;
            this.parent.addChild(nengliangtishi);
            nengliangtishi.width = Laya.stage.width;
            //打开页面
            nengliangtishi.popup(false, true);
        };
        nenglianganniu.getInstances = function () {
            if (this._instance == null) {
                this._instance = new nenglianganniu;
                this._instance.zOrder = 999999;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return nenglianganniu;
    }(ui.nenglianganniuUI));
    wuling.nenglianganniu = nenglianganniu;
})(wuling || (wuling = {}));
//# sourceMappingURL=nenglianganniu.js.map