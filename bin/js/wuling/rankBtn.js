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
    var rankBtn = /** @class */ (function (_super) {
        __extends(rankBtn, _super);
        function rankBtn() {
            var _this = _super.call(this) || this;
            _this.DClisk();
            return _this;
        }
        /**添加点击事件 */
        rankBtn.prototype.DClisk = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        /**点击执函数 */
        rankBtn.prototype.onClick = function () {
            util.HttpRequestUtil.Modifybaobi(10000);
            this.offAll();
            util.HttpRequestUtil.sendGetRank();
        };
        rankBtn.getInstances = function () {
            if (this._instance == null) {
                this._instance = new rankBtn;
                this._instance.right = 20;
                this._instance.y = 160;
                this._instance.zOrder = 999;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return rankBtn;
    }(ui.rankBtnUI));
    wuling.rankBtn = rankBtn;
})(wuling || (wuling = {}));
//# sourceMappingURL=rankBtn.js.map