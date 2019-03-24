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
            _this.start();
            return _this;
        }
        mission.prototype.showToReceive = function () {
            this.renImg.visible = true;
        };
        mission.prototype.hiddenToReceive = function () {
            this.renImg.visible = false;
        };
        mission.prototype.start = function () {
            //隐藏开始任务提示
            // wuling.Bottom.getInstance().missionPrompt();
            var miss = [];
            for (var i = 1; i < 7; i++) {
                this.missionModule.taskProgress[i];
            }
            this.list.visible = true;
            this.tabMission.visible = true;
            this.cen.visible = false;
            this.tabAchi.visible = false;
            //任务
            this.dataArr = module.missionModule.getInstance().missionData;
            //成就
            this.dataCenj = [
                { vis: true, conditions: 2, name: "初来乍到", jin: 100, class: 1, id: 10001, naClass: "GetAchievement1", tao: "Mission141", url: "achievement/7.png" },
                { vis: true, conditions: 300, name: "渐入佳境", jin: 3000, class: 1, id: 10002, naClass: "GetAchievement2", tao: "Mission140", url: "achievement/8.png" },
                { vis: true, conditions: 500, name: "经营达人", jin: 5000, class: 1, id: 10003, naClass: "GetAchievement3", tao: "Mission139", url: "achievement/9.png" },
                { vis: true, conditions: 3, name: "镇店大神", jin: 2000, class: 2, id: 10004, naClass: "GetAchievement4", tao: "Mission138", url: "achievement/10.png" },
                { vis: true, conditions: 5, name: "生财有道", jin: 4000, class: 3, id: 10005, naClass: "GetAchievement5", tao: "Mission137", url: "achievement/3.png" },
                { vis: true, conditions: 8, name: "万元大户", jin: 7000, class: 4, id: 10006, naClass: "GetAchievement6", tao: "Mission136", url: "achievement/4.png" },
                { vis: true, conditions: 10, name: "财源滚滚", jin: 10000, class: 4, id: 10007, naClass: "GetAchievement7", tao: "Mission135", url: "achievement/2.png" },
                { vis: true, conditions: 5, name: "百万富翁", jin: 1000, class: 5, id: 10008, naClass: "GetAchievement8", tao: "Mission134", url: "achievement/1.png" },
                { vis: true, conditions: 8, name: "宾至如归", jin: 3000, class: 5, id: 10009, naClass: "GetAchievement9", tao: "Mission133", url: "achievement/5.png" },
                { vis: true, conditions: 12, name: "客似云来", jin: 5000, class: 5, id: 100010, naClass: "GetAchievement10", tao: "Mission132", url: "achievement/6.png" },
                { vis: true, conditions: 18, name: "新人店长", jin: 8000, class: 5, id: 100011, naClass: "GetAchievement11", tao: "Mission131", url: "achievement/13.png" },
                { vis: true, conditions: 10, name: "熟手店长", jin: 1000, class: 6, id: 100012, naClass: "GetAchievement12", tao: "Mission130", url: "achievement/12.png" },
                { vis: true, conditions: 20, name: "资深店长", jin: 2000, class: 6, id: 100013, naClass: "GetAchievement13", tao: "Mission129", url: "achievement/14.png" },
                { vis: true, conditions: 30, name: "金牌店长", jin: 3000, class: 6, id: 100014, naClass: "GetAchievement14", tao: "Mission128", url: "achievement/11.png" },
            ];
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
            this.cen.array = this.dataCenj;
            this.cen.renderHandler = Laya.Handler.create(this, this.renderHandler2, null, false);
            this.list.array = this.missionModule.missionChoose(this.dataArr);
            this.list.renderHandler = Laya.Handler.create(this, this.renderHandler, null, false);
            //任务提示
            // wuling.Bottom.getInstance().text1.text = this.list.array[0]["tuiText"];
            // this.tab.selectHandler = new Laya.Handler(this, this.onSelect);
            // this.onSelect(this.tab.selectedIndex);
            this.tabM.on(Laya.Event.CLICK, this, this.onSelect);
            this.tabA.on(Laya.Event.CLICK, this, this.onSelect);
            this.returnBtn.on(Laya.Event.CLICK, this, this.onclick);
            this.cen.scrollBar.touchScrollEnable = true;
            //新手指引
            if (wuling.map.getInstance().guide == true) {
                // this.tabAchi.visible = true;
                // this.tabMission.visible = false;
                // this.list.visible = false;
                // this.cen.scrollBar.touchScrollEnable = false;
                // this.cen.visible = true;
            }
        };
        mission.prototype.onDon = function () {
            this.returnBtn.visible = false;
            this.list.scrollBar.touchScrollEnable = false;
        };
        mission.prototype.Don = function () {
            this.returnBtn.visible = false;
            this.list.scrollBar.touchScrollEnable = true;
        };
        //更改任务数据
        mission.prototype.newData = function () {
            this.list.array = this.missionModule.missionChoose(this.dataArr);
        };
        mission.getInstance = function () {
            if (this._instance == null) {
                this._instance = new mission;
                Laya.stage.addChild(this._instance);
            }
            //任务完成提示
            this._instance.renwan();
            //允许调用mission单例
            module.missionModule.getInstance().kaimission = true;
            this._instance.start();
            return this._instance;
        };
        /**任务完成提示 */
        mission.prototype.renwan = function () {
            var strData = module.missionModule.getInstance().randomDialogue();
            //弹出小nana
            // if(wuling.Bottom.getInstance().text1.visible==false||wuling.Bottom.getInstance().text1.alpha==0)
            // {
            // 	wuling.Bottom.getInstance().missionText(strData);
            // }
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
                    // this.tabAchi.visible = true;
                    // this.tabMission.visible = false;
                    // this.list.visible = false;
                    // this.cen.visible = true;
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
            this.list.scrollBar.value = 1;
            this.close();
            wuling.Bottom.getInstance().renwu.visible = false;
            if (wuling.Bottom.getInstance().boximg.visible == true) {
                wuling.Bottom.getInstance().ShutDownMission();
            }
            // this.removeSelf();
            module.missionModule.getInstance().kaimission = false;
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