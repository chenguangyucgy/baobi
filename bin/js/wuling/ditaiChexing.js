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
                { url: "ditaiChexing/Wred310.png", carname: "310W(金属红)", jin: 500, nen: 20, suo: 1 },
                { url: "ditaiChexing/Wl310.png", carname: "310W(星夜蓝)", jin: 500, nen: 20, suo: 1 },
                { url: "ditaiChexing/Wqh310.png", carname: "310W(极光银）", jin: 500, nen: 20, suo: 1 },
                { url: "ditaiChexing/c320.png", carname: "310(闪晶橙)", jin: 500, nen: 20, suo: 2 },
                { url: "ditaiChexing/h320.png", carname: "310(糖果白)", jin: 500, nen: 20, suo: 2 },
                { url: "ditaiChexing/l320.png", carname: "310(碧海蓝)", jin: 500, nen: 20, suo: 2 },
                { url: "ditaiChexing/b360.png", carname: "360(糖果白)", jin: 600, nen: 20, suo: 10 },
                { url: "ditaiChexing/hui360.png", carname: "360(极光银)", jin: 600, nen: 20, suo: 10 },
                { url: "ditaiChexing/l360.png", carname: "360(星夜蓝)", jin: 600, nen: 20, suo: 10 },
                { url: "ditaiChexing/c510.png", carname: "510(闪晶橙)", jin: 600, nen: 30, suo: 15 },
                { url: "ditaiChexing/he510.png", carname: "510(水晶棕)", jin: 600, nen: 30, suo: 15 },
                { url: "ditaiChexing/l510.png", carname: "510(星夜蓝)", jin: 600, nen: 30, suo: 15 },
                { url: "ditaiChexing/hui530.png", carname: "530(极光银)", jin: 1000, nen: 30, suo: 25 },
                { url: "ditaiChexing/l530.png", carname: "530(大地棕)", jin: 1000, nen: 30, suo: 25 },
                { url: "ditaiChexing/red530.png", carname: "530(琉璃红)", jin: 1000, nen: 30, suo: 25 },
                { url: "ditaiChexing/he730.png", carname: "730(大地棕)", jin: 800, nen: 30, suo: 20 },
                { url: "ditaiChexing/hei730.png", carname: "730(星夜黑)", jin: 800, nen: 30, suo: 20 },
                { url: "ditaiChexing/l730.png", carname: "730(星夜蓝)", jin: 800, nen: 30, suo: 20 }
            ];
            _this.list.array = module.buildingModule.getInstance().buildingChoose(_this.dataArr);
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.bg.on(Laya.Event.CLICK, _this, _this.onclick);
            //隐藏开始任务提示
            wuling.Bottom.getInstance().missionPrompt();
            return _this;
        }
        ditaiChexing.getInstance = function () {
            if (this._instance == null) {
                this._instance = new ditaiChexing;
                this._instance.width = Laya.stage.width;
                Laya.stage.addChild(this._instance);
            }
            this._instance.popup(true, true);
            this._instance.list.array = module.buildingModule.getInstance().buildingChoose(this._instance.dataArr);
            //新手指引
            if (wuling.map.getInstance().guide == true) {
                this._instance.list.scrollBar.touchScrollEnable = false;
            }
            else {
                this._instance.list.scrollBar.touchScrollEnable = true;
            }
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