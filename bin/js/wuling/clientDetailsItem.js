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
    var clientDetailsItem = /** @class */ (function (_super) {
        __extends(clientDetailsItem, _super);
        function clientDetailsItem() {
            return _super.call(this) || this;
        }
        clientDetailsItem.prototype.details = function (item, index) {
            this.content.text = this.dataSource["text"];
            this.money.text = this.dataSource["odds"];
        };
        return clientDetailsItem;
    }(ui.clientDetailsItemUI));
    wuling.clientDetailsItem = clientDetailsItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=clientDetailsItem.js.map