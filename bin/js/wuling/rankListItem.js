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
    var rankListItem = /** @class */ (function (_super) {
        __extends(rankListItem, _super);
        function rankListItem() {
            return _super.call(this) || this;
        }
        rankListItem.prototype.rank = function (item, index) {
            // this.renwu.text = this.dataSource["pai"];
            this.huizhang.skin = "rankList/top" + (index + 1) + ".png";
            this.playerName.text = wuling.rankList.getInstance().listData[index]["UserID"];
            this.score.text = wuling.rankList.getInstance().listData[index]["RoomCoin"];
        };
        return rankListItem;
    }(ui.rankItemUI));
    wuling.rankListItem = rankListItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=rankListItem.js.map