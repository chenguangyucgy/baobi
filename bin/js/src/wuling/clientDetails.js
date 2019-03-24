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
    var clientDetails = /** @class */ (function (_super) {
        __extends(clientDetails, _super);
        function clientDetails() {
            var _this = _super.call(this) || this;
            var data = [
                { text: "饮水机", money: "10" },
                { text: "面包车展台", money: "23" },
                { text: "跑车展台", money: "33" },
                { text: "饮料机", money: "45" },
                { text: "广告牌", money: "55" },
                { text: "互动屏", money: "67" }
            ];
            _this.list.array = data;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.onText, null, false);
            return _this;
        }
        clientDetails.getInstance = function () {
            if (this._instance == null) {
                this._instance = new clientDetails;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        clientDetails.prototype.onText = function (item, index) {
            item.details(item, index);
        };
        return clientDetails;
    }(ui.clientDetailsUI));
    wuling.clientDetails = clientDetails;
})(wuling || (wuling = {}));
//# sourceMappingURL=clientDetails.js.map