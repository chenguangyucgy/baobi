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
            _this.listData = [
                { "pai": 10000, "num": 1 },
                { "pai": 9999, "num": 2 },
                { "pai": 9998, "num": 3 },
                { "pai": 9997, "num": 4 },
                { "pai": 9996, "num": 5 },
                { "pai": 9995, "num": 6 },
                { "pai": 9994, "num": 7 },
                { "pai": 9993, "num": 8 },
                { "pai": 9992, "num": 8 },
                { "pai": 9991, "num": 8 },
                { "pai": 9990, "num": 8 },
                { "pai": 9989, "num": 8 },
                { "pai": 9988, "num": 8 },
                { "pai": 9987, "num": 8 },
                { "pai": 9986, "num": 8 },
                { "pai": 9985, "num": 8 },
                { "pai": 9984, "num": 8 },
                { "pai": 9983, "num": 8 },
                { "pai": 9982, "num": 8 },
                { "pai": 9981, "num": 8 },
                { "pai": 9980, "num": 8 },
                { "pai": 9979, "num": 8 },
                { "pai": 9978, "num": 8 },
                { "pai": 9977, "num": 8 },
                { "pai": 9976, "num": 8 },
                { "pai": 9975, "num": 8 },
                { "pai": 9974, "num": 8 },
                { "pai": 9973, "num": 8 },
                { "pai": 9972, "num": 8 },
                { "pai": 9971, "num": 30 }
            ];
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            _this.list.array = _this.listData;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.gb.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        rankList.getInstance = function () {
            if (this._instance == null) {
                this._instance = new rankList;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        rankList.prototype.renderHandler = function (item, index) {
            item.rank(item, index);
        };
        rankList.prototype.onclick = function (event) {
            this.close();
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().nanaOnClick();
            wuling.Bottom.getInstance().btmclick();
        };
        return rankList;
    }(ui.rankListUI));
    wuling.rankList = rankList;
})(wuling || (wuling = {}));
//# sourceMappingURL=rankList.js.map