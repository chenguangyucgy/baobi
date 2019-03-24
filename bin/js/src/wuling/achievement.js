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
    var achievement = /** @class */ (function (_super) {
        __extends(achievement, _super);
        function achievement() {
            var _this = _super.call(this) || this;
            //新手指引
            if (wuling.map.getInstance().guide == true) {
                _this.on(Laya.Event.CLICK, _this, function () {
                    _this.boxcj.gray = false;
                    wuling.map.getInstance().newclick();
                    wuling.map.getInstance().nextStep();
                });
            }
            return _this;
        }
        achievement.prototype.miss = function (item, index) {
            this.boxcj.gray = this.dataSource["vis"];
            this.cjname.text = this.dataSource["name"];
        };
        return achievement;
    }(ui.achievementUI));
    wuling.achievement = achievement;
})(wuling || (wuling = {}));
//# sourceMappingURL=achievement.js.map