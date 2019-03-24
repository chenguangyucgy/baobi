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
    var ssInfo = /** @class */ (function (_super) {
        __extends(ssInfo, _super);
        function ssInfo() {
            var _this = _super.call(this) || this;
            _this.gb.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.imgBtn.skin = "place1/" + module.buildingModule.getInstance().buildingImg + ".png";
            _this.buidingname.text = module.buildingVo[module.buildingModule.getInstance().buildingImg];
            return _this;
        }
        ssInfo.prototype.onclick = function () {
            this.close();
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().nanaOnClick();
        };
        return ssInfo;
    }(ui.ssInfoUI));
    wuling.ssInfo = ssInfo;
})(wuling || (wuling = {}));
//# sourceMappingURL=ssInfo.js.map