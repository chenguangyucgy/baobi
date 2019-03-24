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
    var rankList = /** @class */ (function (_super) {
        __extends(rankList, _super);
        function rankList() {
            var _this = _super.call(this) || this;
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            // this.list.array = this.listData;
            _this.gb.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            return _this;
        }
        rankList.getInstance = function () {
            if (this._instance == null) {
                this._instance = new rankList;
                this._instance.width = Laya.stage.width;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        rankList.prototype.getRankData = function () {
            util.HttpRequestUtil.sendGetRank();
        };
        rankList.prototype.setRankData = function (listData) {
            this.listData = listData;
            this.list.array = this.listData;
        };
        rankList.prototype.renderHandler = function (item, index) {
            item.rank(item, index);
        };
        rankList.prototype.onclick = function (event) {
            wuling.rankBtn.getInstances().DClisk();
            this.close();
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().nanaOnClick();
            wuling.Bottom.getInstance().btmclick();
        };
        rankList.prototype.rank = function (item, index) {
            this.myRank.text = wuling.rankList.getInstance().listData[index]["RoomLevel"];
        };
        return rankList;
    }(ui.rankListUI));
    wuling.rankList = rankList;
})(wuling || (wuling = {}));
//# sourceMappingURL=rankList.js.map