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
* 成就
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
                    module.missionModule.getInstance().kaimission = false;
                    util.HttpRequestUtil.sendUpdateAchievement("RoomID=" + module.Room.getInstance().RoomID + "&GetAchievement1=1");
                });
            }
            return _this;
        }
        achievement.prototype.miss = function (item, index) {
            var _this = this;
            this.boxcj.gray = this.dataSource["vis"];
            this.cjname.text = this.dataSource["name"];
            var naClass = this.dataSource["naClass"];
            var tao = this.dataSource["tao"];
            this.cjimg.skin = this.dataSource["url"];
            var achgetData = module.achievemenModule.getInstance().getData;
            if (achgetData.length > 0) {
                var achData = module.achievemenModule.getInstance().getData[0][naClass];
                if (achData == true) {
                    this.boxcj.gray = false;
                }
                else {
                    this.boxcj.gray = true;
                }
            }
            if (module.missionModule.getInstance().taskProgress.length > 0) {
                if (module.missionModule.getInstance().taskProgress[0][tao] > 0) {
                    this.on(Laya.Event.CLICK, this, function () {
                        if (_this.boxcj.gray == true) {
                            _this.boxcj.gray = false;
                            util.HttpRequestUtil.sendUpdateAchievement("RoomID=" + module.Room.getInstance().RoomID + "&" + naClass + "=1");
                        }
                    });
                }
            }
        };
        return achievement;
    }(ui.achievementUI));
    wuling.achievement = achievement;
})(wuling || (wuling = {}));
//# sourceMappingURL=achievement.js.map