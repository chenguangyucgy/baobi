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
    var ditaiChexing = /** @class */ (function (_super) {
        __extends(ditaiChexing, _super);
        function ditaiChexing() {
            var _this = _super.call(this) || this;
            _this.dataArr = [
                { url: "ditaiChexing/310Wred.png", carname: "310W(红)", jin: 500, nen: 20 },
                { url: "ditaiChexing/310Wl.png", carname: "311W(蓝)", jin: 500, nen: 20 },
                { url: "ditaiChexing/310Wqh.png", carname: "312W(浅灰）", jin: 500, nen: 20 },
                { url: "ditaiChexing/320c.png", carname: "320(橙)", jin: 500, nen: 20 },
                { url: "ditaiChexing/320h.png", carname: "320(黄)", jin: 500, nen: 20 },
                { url: "ditaiChexing/320l.png", carname: "320(蓝)", jin: 500, nen: 20 },
                { url: "ditaiChexing/360b.png", carname: "360(白)", jin: 600, nen: 20 },
                { url: "ditaiChexing/360hui.png", carname: "360(灰)", jin: 600, nen: 20 },
                { url: "ditaiChexing/360l.png", carname: "360(蓝)", jin: 600, nen: 20 },
                { url: "ditaiChexing/510c.png", carname: "510(橙)", jin: 600, nen: 30 },
                { url: "ditaiChexing/510he.png", carname: "510(褐)", jin: 600, nen: 30 },
                { url: "ditaiChexing/510l.png", carname: "510(蓝)", jin: 600, nen: 30 },
                { url: "ditaiChexing/530hui.png", carname: "530(灰)", jin: 1000, nen: 30 },
                { url: "ditaiChexing/530l.png", carname: "530(褐)", jin: 1000, nen: 30 },
                { url: "ditaiChexing/530red.png", carname: "530(红)", jin: 1000, nen: 30 },
                { url: "ditaiChexing/730he.png", carname: "730(褐)", jin: 800, nen: 30 },
                { url: "ditaiChexing/730hei.png", carname: "730(黑)", jin: 800, nen: 30 },
                { url: "ditaiChexing/730l.png", carname: "730(蓝)", jin: 800, nen: 30 }
            ];
            _this.list.array = _this.dataArr;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.bg.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        ditaiChexing.getInstance = function () {
            if (this._instance == null) {
                this._instance = new ditaiChexing;
                Laya.stage.addChild(this._instance);
            }
            this._instance.popup(true, true);
            this._instance.list.array = this._instance.dataArr;
            return this._instance;
        };
        ditaiChexing.prototype.renderHandler = function (item, index) {
            // item.show(item, index);
            item.show(item, index);
        };
        ditaiChexing.prototype.onclick = function (event) {
            this.close();
            if (wuling.map.getInstance().guide == false) {
                wuling.map.getInstance().person1.figureStart();
                wuling.map.getInstance().person2.figureStart();
                wuling.map.getInstance().person3.figureStart();
                wuling.map.getInstance().person4.figureStart();
                wuling.map.getInstance().person5.figureStart();
                wuling.Bottom.getInstance().nanaOnClick();
            }
        };
        return ditaiChexing;
    }(ui.ditaiChexingUI));
    wuling.ditaiChexing = ditaiChexing;
})(wuling || (wuling = {}));
//# sourceMappingURL=ditaiChexing.js.map