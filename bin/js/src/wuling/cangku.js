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
    var cangku = /** @class */ (function (_super) {
        __extends(cangku, _super);
        function cangku() {
            var _this = _super.call(this) || this;
            var data = [
                { url: "shop/1x1ljt.png", money: "30" },
                { url: "shop/1x1ptdz.png", money: "80" },
                { url: "shop/1x2ltdz.png", money: "130" },
                { url: "shop/1x1ptggp.png", money: "80" },
            ];
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            _this.list.array = module.mapModule.getInstance()._canku;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        cangku.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.returnBtn:
                    this.close();
                    wuling.map.getInstance().person1.figureStart();
                    wuling.map.getInstance().person2.figureStart();
                    wuling.map.getInstance().person3.figureStart();
                    wuling.map.getInstance().person4.figureStart();
                    wuling.map.getInstance().person5.figureStart();
                    wuling.Bottom.getInstance().nanaOnClick();
                    wuling.Bottom.getInstance().btmclick();
                    break;
                default:
                    break;
            }
        };
        // private static _instance:cangku;
        // public static getInstance():cangku
        // {
        // 	if(this._instance == null)
        // 	{
        // 		this._instance = new cangku;
        // 		Laya.stage.addChild(this._instance);
        // 	}
        // 	return this._instance;
        // }
        cangku.prototype.renderHandler = function (item, index) {
            item.show(item, index);
        };
        return cangku;
    }(ui.cangkuUI));
    wuling.cangku = cangku;
})(wuling || (wuling = {}));
//# sourceMappingURL=cangku.js.map