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
    var manyiduanniu = /** @class */ (function (_super) {
        __extends(manyiduanniu, _super);
        function manyiduanniu() {
            var _this = _super.call(this) || this;
            _this.DClisk();
            return _this;
        }
        /**添加点击事件 */
        manyiduanniu.prototype.DClisk = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        /**点击执函数 */
        manyiduanniu.prototype.onClick = function () {
            this.offAll();
            var manyidutishi = new wuling.manyidutishi;
            this.parent.addChild(manyidutishi);
            manyidutishi.width = Laya.stage.width;
            //打开页面
            manyidutishi.popup(false, true);
        };
        manyiduanniu.getInstances = function () {
            if (this._instance == null) {
                this._instance = new manyiduanniu;
                this._instance.zOrder = 999999;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return manyiduanniu;
    }(ui.manyiduanniuUI));
    wuling.manyiduanniu = manyiduanniu;
})(wuling || (wuling = {}));
//# sourceMappingURL=manyiduanniu.js.map