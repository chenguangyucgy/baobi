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
    var building = /** @class */ (function (_super) {
        __extends(building, _super);
        function building() {
            var _this = _super.call(this) || this;
            _this.buildingModules = module.buildingModule.getInstance();
            _this.arr2 = _this.buildingModules.buildingChoose(_this.buildingModules.buildingChooseData1);
            _this.arr1 = _this.buildingModules.buildingChoose(_this.buildingModules.buildingChooseData2);
            _this.arr31 = [
                { url: "place1/diban.png", id: 200, url2: "map/di1.png", jin: 0, nen: 20, name: "浅灰", suo: 1 },
                { url: "place1/diban1.png", id: 200, url2: "map/di5.png", jin: 200, nen: 20, name: "深灰", suo: 1 },
                { url: "place1/diban2.png", id: 200, url2: "map/di9.png", jin: 300, nen: 20, name: "木板", suo: 1 },
                { url: "place1/diban3.png", id: 200, url2: "map/di13.png", jin: 500, nen: 20, name: "优雅", suo: 1 },
                { url: "place1/diban4.png", id: 200, url2: "map/di17.png", jin: 500, nen: 20, name: "简约", suo: 1 },
                { url: "place1/diban5.png", id: 200, url2: "map/di21.png", jin: 500, nen: 20, name: "粉红", suo: 1 },
                { url: "place1/diban6.png", id: 200, url2: "map/di25.png", jin: 500, nen: 20, name: "鲜橙", suo: 1 },
            ];
            _this.arr32 = [
                { url: "place1/diban.png", id: 200, url2: "map/di2.png", jin: 0, nen: 20, name: "浅灰", suo: 1 },
                { url: "place1/diban1.png", id: 200, url2: "map/di6.png", jin: 200, nen: 20, name: "深灰", suo: 1 },
                { url: "place1/diban2.png", id: 200, url2: "map/di10.png", jin: 300, nen: 20, name: "木板", suo: 1 },
                { url: "place1/diban3.png", id: 200, url2: "map/di14.png", jin: 500, nen: 20, name: "优雅", suo: 1 },
                { url: "place1/diban4.png", id: 200, url2: "map/di18.png", jin: 500, nen: 20, name: "简约", suo: 1 },
                { url: "place1/diban5.png", id: 200, url2: "map/di22.png", jin: 500, nen: 20, name: "粉红", suo: 1 },
                { url: "place1/diban6.png", id: 200, url2: "map/di26.png", jin: 500, nen: 20, name: "鲜橙", suo: 1 },
            ];
            _this.arr33 = [
                { url: "place1/diban.png", id: 200, url2: "map/di3.png", jin: 0, nen: 20, name: "浅灰", suo: 1 },
                { url: "place1/diban1.png", id: 200, url2: "map/di7.png", jin: 200, nen: 20, name: "深灰", suo: 1 },
                { url: "place1/diban2.png", id: 200, url2: "map/di11.png", jin: 300, nen: 20, name: "木板", suo: 1 },
                { url: "place1/diban3.png", id: 200, url2: "map/di15.png", jin: 500, nen: 20, name: "优雅", suo: 1 },
                { url: "place1/diban4.png", id: 200, url2: "map/di19.png", jin: 500, nen: 20, name: "简约", suo: 1 },
                { url: "place1/diban5.png", id: 200, url2: "map/di23.png", jin: 500, nen: 20, name: "粉红", suo: 1 },
                { url: "place1/diban6.png", id: 200, url2: "map/di27.png", jin: 500, nen: 20, name: "鲜橙", suo: 1 },
            ];
            _this.arr34 = [
                { url: "place1/diban.png", id: 200, url2: "map/di4.png", jin: 0, nen: 20, name: "浅灰", suo: 1 },
                { url: "place1/diban1.png", id: 200, url2: "map/di8.png", jin: 200, nen: 20, name: "深灰", suo: 1 },
                { url: "place1/diban2.png", id: 200, url2: "map/di12.png", jin: 300, nen: 20, name: "木板", suo: 1 },
                { url: "place1/diban3.png", id: 200, url2: "map/di16.png", jin: 500, nen: 20, name: "优雅", suo: 1 },
                { url: "place1/diban4.png", id: 200, url2: "map/di20.png", jin: 500, nen: 20, name: "简约", suo: 1 },
                { url: "place1/diban5.png", id: 200, url2: "map/di24.png", jin: 500, nen: 20, name: "粉红", suo: 1 },
                { url: "place1/diban6.png", id: 200, url2: "map/di28.png", jin: 500, nen: 20, name: "鲜橙", suo: 1 },
            ];
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.box1.on(Laya.Event.CLICK, _this, _this.switchClass);
            _this.box2.on(Laya.Event.CLICK, _this, _this.switchClass);
            _this.box3.on(Laya.Event.CLICK, _this, _this.switchClass);
            _this.backImg1.visible = true;
            _this.blackBtn1.visible = true;
            _this.whiteBtn1.visible = false;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.list.array = _this.arr1;
            if (module.personModule.getInstance().addFigure == true) {
                wuling.map.getInstance().person1.figureStatic();
                wuling.map.getInstance().person2.figureStatic();
                wuling.map.getInstance().person3.figureStatic();
                wuling.map.getInstance().person4.figureStatic();
                wuling.map.getInstance().person5.figureStatic();
            }
            if (wuling.map.getInstance().guide == true) {
                wuling.map.getInstance().newclick();
                _this.list.scrollBar.touchScrollEnable = false;
                if (module.mapModule.getInstance().buildinghS == 2) {
                    Laya.timer.once(100, _this, function () {
                        _this.list.scrollBar.value = 1402;
                    });
                }
            }
            return _this;
            //隐藏开始任务提示
            // wuling.Bottom.getInstance().missionPrompt();
        }
        building.prototype.renderHandler = function (item, index) {
            item.show(index);
            item.bakeImg.on(Laya.Event.CLICK, this, this.onclick);
        };
        building.prototype.onclick = function (event) {
            //关闭页面
            this.close();
            //新手教程改
            if (wuling.map.getInstance().guide == false) {
                wuling.Bottom.getInstance().btmclick();
            }
            switch (event.currentTarget) {
                case this.returnBtn:
                    if (wuling.map.getInstance().guide == false) {
                        wuling.map.getInstance().person1.figureStart();
                        wuling.map.getInstance().person2.figureStart();
                        wuling.map.getInstance().person3.figureStart();
                        wuling.map.getInstance().person4.figureStart();
                        wuling.map.getInstance().person5.figureStart();
                        wuling.Bottom.getInstance().nanaOnClick();
                    }
                    break;
            }
        };
        //切换效果
        building.prototype.switchClass = function (event) {
            switch (event.currentTarget) {
                case this.box1:
                    this.list.array = this.arr1;
                    this.backImg1.visible = true;
                    this.blackBtn1.visible = true;
                    this.whiteBtn1.visible = false;
                    this.backImg2.visible = false;
                    this.blackBtn2.visible = false;
                    this.whiteBtn2.visible = true;
                    this.backImg3.visible = false;
                    this.blackBtn3.visible = false;
                    this.whiteBtn3.visible = true;
                    break;
                case this.box2:
                    this.list.array = this.arr2;
                    this.backImg1.visible = false;
                    this.blackBtn1.visible = false;
                    this.whiteBtn1.visible = true;
                    this.backImg2.visible = true;
                    this.blackBtn2.visible = true;
                    this.whiteBtn2.visible = false;
                    this.backImg3.visible = false;
                    this.blackBtn3.visible = false;
                    this.whiteBtn3.visible = true;
                    if (wuling.map.getInstance().guide == true) {
                        wuling.map.getInstance().nextStep();
                    }
                    if (module.mapModule.getInstance().buildinghS == 1) {
                        this.list.scrollBar.value = 148;
                    }
                    break;
                case this.box3:
                    var RoomClass = module.Room.getInstance().RoomClass;
                    if (RoomClass["RoomLevel"] >= 0 && RoomClass["RoomLevel"] < 4) {
                        this.list.array = this.arr31;
                    }
                    if (RoomClass["RoomLevel"] >= 4 && RoomClass["RoomLevel"] < 9) {
                        this.list.array = this.arr32;
                    }
                    if (RoomClass["RoomLevel"] >= 9 && RoomClass["RoomLevel"] < 14) {
                        this.list.array = this.arr33;
                    }
                    if (RoomClass["RoomLevel"] >= 14) {
                        this.list.array = this.arr34;
                    }
                    this.backImg1.visible = false;
                    this.blackBtn1.visible = false;
                    this.whiteBtn1.visible = true;
                    this.backImg2.visible = false;
                    this.blackBtn2.visible = false;
                    this.whiteBtn2.visible = true;
                    this.backImg3.visible = true;
                    this.blackBtn3.visible = true;
                    this.whiteBtn3.visible = false;
                    break;
                default:
                    break;
            }
        };
        return building;
    }(ui.buildingUI));
    wuling.building = building;
})(wuling || (wuling = {}));
//# sourceMappingURL=building.js.map