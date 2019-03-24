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
var wuling;
(function (wuling) {
    var shop = /** @class */ (function (_super) {
        __extends(shop, _super);
        function shop() {
            var _this = _super.call(this) || this;
            var data = [
                { url: "place1/m10001.png", money: "80", sname: "圆灯柱" },
                { url: "place1/m100011.png", money: "80", sname: "圆灯柱" },
                { url: "place1/m10002.png", money: "130", sname: "小凳子" },
                { url: "place1/m10003.png", money: "80", sname: "凳子" },
                { url: "place1/m10004.png", money: "80", sname: "小广告牌" },
                { url: "place1/m10005.png", money: "120", sname: "中广告牌" },
                { url: "place1/d100013.png", money: "250", sname: "餐台" },
                { url: "place1/d100029.png", money: "250", sname: "餐台" },
                { url: "place1/d10001.png", money: "150", sname: "操作台" },
                { url: "place1/d100021.png", money: "150", sname: "操作台" },
                { url: "place1/d10002.png", money: "80", sname: "大型信息屏" },
                { url: "place1/d100019.png", money: "80", sname: "大型信息屏" },
                { url: "place1/d10003.png", money: "360", sname: "小型门店游戏操作台" }
            ];
            _this.list.array = data;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        shop.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.returnBtn:
                    this.close();
                    wuling.Bottom.getInstance().text1.visible = true;
                    wuling.Bottom.getInstance().text2.visible = false;
                    wuling.Bottom.getInstance().text3.visible = false;
                    wuling.Bottom.getInstance().goumai.visible = false;
                    wuling.Bottom.getInstance().btmclick();
                    break;
                default:
                    break;
            }
        };
        // private static _instance:shop;
        // public static getInstance():shop
        // {
        // 	if(this._instance == null)
        // 	{
        // 		this._instance = new shop;
        // 		Laya.stage.addChild(this._instance);
        // 	}
        // 	return this._instance;
        // }
        shop.prototype.renderHandler = function (item, index) {
            item.show(item, index);
        };
        return shop;
    }(ui.shopUI));
    wuling.shop = shop;
})(wuling || (wuling = {}));
//# sourceMappingURL=shop.js.map