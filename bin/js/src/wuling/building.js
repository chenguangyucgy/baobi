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
            _this.arr2 = [
                // {url:"place1/m100014.png",id:1,jin:30,nen:10,name:"休息凳"}
                { url: "place1/m10002.png", id: 1, jin: 30, nen: 10, name: "休息凳" }
                // ,{url:"place1/m100015.png",id:2,jin:60,nen:10,name:"连体休息凳"}
                ,
                { url: "place1/m10003.png", id: 2, jin: 60, nen: 10, name: "连体休息凳" },
                { url: "place1/m10004.png", id: 1, jin: 100, nen: 20, name: "小型信息牌" }
                // ,{url:"place1/m100012.png",id:1,jin:80,nen:3,name:"小型信息牌"}
                ,
                { url: "place1/m10005.png", id: 2, jin: 100, nen: 20, name: "中型信息牌" }
                // ,{url:"place1/m100013.png",id:2,jin:100,nen:4,name:"中型信息牌"}
                ,
                { url: "place1/m10001.png", id: 1, jin: 200, nen: 20, name: "圆灯柱" }
                // ,{url:"place1/m100011.png",id:1,jin:200,nen:20,name:"圆灯柱"}
                ,
                { url: "place1/m10007.png", id: 1, jin: 30, nen: 10, name: "小圆草丛" },
                { url: "place1/m10009.png", id: 1, jin: 30, nen: 10, name: "小方草丛" },
                { url: "place1/m100010.png", id: 1, jin: 100, nen: 20, name: "草丛柱" },
                { url: "place1/m10006.png", id: 1, jin: 100, nen: 20, name: "圆形树柱" },
                { url: "place1/m10008.png", id: 1, jin: 300, nen: 20, name: "古典树柱" }
            ];
            _this.arr1 = [
                { url: "place1/d100016.png", id: 50, url2: "place/show1.png", jin: 200, nen: 20, name: "普通地台" },
                { url: "place1/d100015.png", id: 50, url2: "place/show2.png", jin: 400, nen: 20, name: "普通地台" },
                { url: "place1/d100014.png", id: 50, url2: "place/show3.png", jin: 600, nen: 20, name: "普通地台" },
                { url: "place1/d100013.png", id: 40, jin: 300, nen: 30, name: "自助餐吧" },
                // {url:"place1/d100029.png",id:40,jin:300,nen:30,name:"自助餐吧"},
                { url: "place1/d10008.png", id: 21, jin: 300, nen: 20, name: "VR试驾台" },
                // {url:"place1/d100023.png",id:21,jin:300,nen:20,name:"VR试驾台"},
                { url: "place1/d10009.png", id: 21, jin: 500, nen: 20, name: "制动系统展示" },
                // {url:"place1/d100010.png",id:21,jin:500,nen:20,name:"制动系统展示"},
                { url: "place1/d100024.png", id: 21, jin: 500, nen: 20, name: "发动机展示" },
                { url: "place1/d100026.png", id: 21, jin: 500, nen: 20, name: "变速箱展示" },
                // {url:"place1/d100030.png",id:30,jin:1000,nen:50,name:"趣味游戏台"},
                { url: "place1/d100031.png", id: 30, jin: 1000, nen: 50, name: "趣味游戏台" },
                { url: "place1/d100012.png", id: 31, jin: 1000, nen: 50, name: "大型赠品电子墙" },
                // {url:"place1/d100028.png",id:31,jin:1000,nen:50,name:"大型赠品电子墙"},
                { url: "place1/d10007.png", id: 1, jin: 100, nen: 10, name: "小型垃圾桶" },
                // {url:"place1/d100017.png",id:1,jin:100,nen:10,name:"小型垃圾桶"},
                // {url:"place1/d10006.png",id:21,jin:300,nen:20,name:"大型饮料机"},
                { url: "place1/d100022.png", id: 21, jin: 300, nen: 20, name: "大型饮料机" },
                // {url:"place1/d10003.png",id:2,jin:200,nen:20,name:"小型操作台"},
                { url: "place1/d100018.png", id: 2, jin: 200, nen: 20, name: "小型操作台" },
                { url: "place1/d10001.png", id: 21, jin: 500, nen: 30, name: "交互操作台" },
                // {url:"place1/d100021.png",id:21,jin:500,nen:30,name:"交互操作台"},
                { url: "place1/d10002.png", id: 3, jin: 500, nen: 30, name: "大型信息屏" },
            ];
            _this.arr31 = [
                { url: "place1/diban.png", id: 200, url2: "map/di1.png", jin: 0, nen: 0, name: "地板1" },
                { url: "place1/diban1.png", id: 200, url2: "map/di5.png", jin: 200, nen: 0, name: "地板2" },
                { url: "place1/diban2.png", id: 200, url2: "map/di9.png", jin: 250, nen: 0, name: "地板3" }
            ];
            _this.arr32 = [
                { url: "place1/diban.png", id: 200, url2: "map/di2.png" },
                { url: "place1/diban1.png", id: 200, url2: "map/di6.png" },
                { url: "place1/diban2.png", id: 200, url2: "map/di10.png" }
            ];
            _this.arr33 = [
                { url: "place1/diban.png", id: 200, url2: "map/di3.png" },
                { url: "place1/diban1.png", id: 200, url2: "map/di7.png" },
                { url: "place1/diban2.png", id: 200, url2: "map/di11.png" }
            ];
            _this.arr34 = [
                { url: "place1/diban.png", id: 200, url2: "map/di4.png" },
                { url: "place1/diban1.png", id: 200, url2: "map/di8.png" },
                { url: "place1/diban2.png", id: 200, url2: "map/di12.png" }
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
                if (module.mapModule.getInstance().buildinghS == 2) {
                    Laya.timer.once(100, _this, function () {
                        _this.list.scrollBar.value = 1402;
                    });
                }
            }
            return _this;
        }
        building.prototype.renderHandler = function (item, index) {
            item.show(index);
            item.on(Laya.Event.CLICK, this, this.onclick);
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
                    if (RoomClass["RoomLevel"] >= 0 && RoomClass["RoomLevel"] < 9) {
                        this.list.array = this.arr31;
                    }
                    if (RoomClass["RoomLevel"] >= 9 && RoomClass["RoomLevel"] < 17) {
                        this.list.array = this.arr32;
                    }
                    if (RoomClass["RoomLevel"] >= 17 && RoomClass["RoomLevel"] < 25) {
                        this.list.array = this.arr33;
                    }
                    if (RoomClass["RoomLevel"] >= 25) {
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