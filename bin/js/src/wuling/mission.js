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
    var mission = /** @class */ (function (_super) {
        __extends(mission, _super);
        function mission() {
            var _this = _super.call(this) || this;
            _this.missionModule = module.missionModule.getInstance();
            var miss = [];
            for (var i = 1; i < 7; i++) {
                _this.missionModule.taskProgress[i];
            }
            //新手指引
            if (wuling.map.getInstance().guide == true) {
                // wuling.map.getInstance().nextStep();
                _this.tabAchi.visible = true;
                _this.tabMission.visible = false;
                _this.list.visible = false;
                _this.cen.visible = true;
            }
            //任务
            _this.dataArr = module.missionModule.getInstance().missionData;
            //成就
            _this.dataCenj = [
                { "vis": true, conditions: 100, name: "百次互动", jin: 1000, class: 1, id: 10001 },
                { "vis": true, conditions: 300, name: "三百互动", jin: 3000, class: 1, id: 10002 },
                { "vis": true, conditions: 500, name: "五百互动", jin: 5000, class: 1, id: 10003 },
                { "vis": true, conditions: 3, name: "不断解锁", jin: 2000, class: 2, id: 10004 },
                { "vis": true, conditions: 5, name: "解锁达人", jin: 4000, class: 3, id: 10005 },
                { "vis": true, conditions: 8, name: "解锁大师", jin: 7000, class: 4, id: 10006 },
                { "vis": true, conditions: 10, name: "解锁之神", jin: 10000, class: 4, id: 10007 },
                { "vis": true, conditions: 5, name: "大兴土木", jin: 1000, class: 5, id: 10008 },
                { "vis": true, conditions: 8, name: "初具规模", jin: 3000, class: 5, id: 10009 },
                { "vis": true, conditions: 12, name: "渐入佳境", jin: 5000, class: 5, id: 100010 },
                { "vis": true, conditions: 18, name: "大展宏图", jin: 8000, class: 5, id: 100011 },
                { "vis": true, conditions: 10, name: "过河拆桥", jin: 1000, class: 6, id: 100012 },
                { "vis": true, conditions: 20, name: "拆个痛快", jin: 2000, class: 6, id: 100013 },
                { "vis": true, conditions: 30, name: "拆屋队长", jin: 3000, class: 6, id: 100014 },
                { "vis": true, conditions: 40, name: "暴拆狂魔", jin: 4000, class: 6, id: 100015 },
            ];
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            _this.cen.array = _this.dataCenj;
            _this.cen.renderHandler = Laya.Handler.create(_this, _this.renderHandler2, null, false);
            _this.list.array = _this.dataArr;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            // this.tab.selectHandler = new Laya.Handler(this, this.onSelect);
            // this.onSelect(this.tab.selectedIndex);
            _this.tabM.on(Laya.Event.CLICK, _this, _this.onSelect);
            _this.tabA.on(Laya.Event.CLICK, _this, _this.onSelect);
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        mission.getInstance = function () {
            if (this._instance == null) {
                this._instance = new mission;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        mission.prototype.renderHandler = function (item, index) {
            item.miss(item, index);
        };
        mission.prototype.renderHandler2 = function (item, index) {
            item.miss(item, index);
        };
        mission.prototype.onSelect = function (event) {
            switch (event.currentTarget) {
                case this.tabM:
                    this.tabMission.visible = true;
                    this.tabAchi.visible = false;
                    this.list.visible = true;
                    this.cen.visible = false;
                    break;
                case this.tabA:
                    this.tabAchi.visible = true;
                    this.tabMission.visible = false;
                    this.list.visible = false;
                    this.cen.visible = true;
                    break;
                default:
                    break;
            }
            // if(index == 0){
            // 	this.list.visible = true;
            // 	this.cen.visible = false;
            // }else if(index == 1){
            // 	this.list.visible = false;
            // 	this.cen.visible = true;
            // }
        };
        mission.prototype.onclick = function (event) {
            this.close();
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().nanaOnClick();
            wuling.Bottom.getInstance().btmclick();
        };
        return mission;
    }(ui.missionUI));
    wuling.mission = mission;
})(wuling || (wuling = {}));
//# sourceMappingURL=mission.js.map