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
            _this.data = [];
            _this.data = [
                { text: "普通地台", odds: "48%" },
                { text: "增高地台", odds: "1%" },
                { text: "豪华地台", odds: "1%" },
                { text: "赛道地台", odds: "1%" },
                { text: "越野地台", odds: "5%" },
                { text: "自助餐吧", odds: "10%" },
                { text: "VR试驾台", odds: "1%" },
                { text: "制动系统展示台", odds: "1%" },
                { text: "发动机展示台", odds: "1%" },
                { text: "变速箱展示台", odds: "1%" },
                { text: "趣味游戏台", odds: "1%" },
                { text: "大型赠品电子墙", odds: "5%" },
                { text: "小型垃圾桶", odds: "10%" },
                { text: "大型饮料机", odds: "1%" },
                { text: "小型游戏操作台", odds: "1%" },
                { text: "交互操作台", odds: "1%" },
                { text: "大型信息屏", odds: "1%" },
                { text: "前台", odds: "5%" },
                { text: "AI控制台", odds: "5%" }
            ];
            _this.list.array = _this.data;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.onText, null, false);
            return _this;
        }
        clientDetails.prototype.oddsFen = function (str, od) {
            switch (str) {
                case "details/B.png":
                    for (var i1 = 0; i1 < 20; i1++) {
                        if (module.personText.getInstance().oddsArr[0][od][i1]) {
                            this.data[i1].odds = module.personText.getInstance().oddsArr[0][od][i1];
                        }
                    }
                    this.list.array = this.data;
                    break;
                case "details/A.png":
                    for (var i2 = 0; i2 < 20; i2++) {
                        if (module.personText.getInstance().oddsArr[1][od][i2]) {
                            this.data[i2].odds = module.personText.getInstance().oddsArr[1][od][i2];
                        }
                    }
                    this.list.array = this.data;
                    break;
                case "details/S.png":
                    for (var i3 = 0; i3 < 20; i3++) {
                        if (module.personText.getInstance().oddsArr[2][od][i3]) {
                            this.data[i3].odds = module.personText.getInstance().oddsArr[2][od][i3];
                        }
                    }
                    this.list.array = this.data;
                    break;
                case "details/SS.png":
                    for (var i4 = 0; i4 < 20; i4++) {
                        if (module.personText.getInstance().oddsArr[3][od][i4]) {
                            this.data[i4].odds = module.personText.getInstance().oddsArr[3][od][i4];
                        }
                    }
                    this.list.array = this.data;
                    break;
            }
        };
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