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
    var buildingItem = /** @class */ (function (_super) {
        __extends(buildingItem, _super);
        function buildingItem() {
            var _this = _super.call(this) || this;
            /**placeItemModule数据*/
            _this._placeItemModule = module.placeItemModule.getInstance();
            return _this;
        }
        buildingItem.prototype.show = function (index) {
            this.fanImg.skin = this.dataSource["url"];
            this.nametext.text = this.dataSource["name"];
            if ((module.Room.getInstance().RoomClass["RoomLevel"] + 1) >= this.dataSource["suo"]) {
                this.suoImg.visible = false;
                this.on(Laya.Event.CLICK, this, this.onclick);
            }
            else {
                this.suoImg.visible = true;
                this.off(Laya.Event.CLICK, this, this.onclick);
            }
            this.jings();
            this.nens();
            if (this.dataSource["id"] == 200) {
                this.fanImg.scale(0.5, 0.5);
                this.fanImg.y = 52;
            }
            else {
                this.fanImg.scale(1, 1);
                this.fanImg.y = 26;
            }
            ;
            this.pictureSet();
        };
        /**宝币 */
        buildingItem.prototype.jings = function () {
            var jinLen = "" + this.dataSource["jin"] + "";
            switch (jinLen.length) {
                case 0:
                    this.jin1.index = 0;
                    this.jin2.alpha = 0;
                    this.jin3.alpha = 0;
                    break;
                case 1:
                    this.jin1.index = this.dataSource["jin"];
                    this.jin2.alpha = 0;
                    this.jin3.alpha = 0;
                    break;
                case 2:
                    this.jin1.index = Number(jinLen.slice(0, 1));
                    this.jin2.index = Number(jinLen.slice(1));
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 0;
                    break;
                case 3:
                    this.jin1.index = Number(jinLen.slice(0, 1));
                    this.jin2.index = Number(jinLen.slice(1, 2));
                    this.jin3.index = Number(jinLen.slice(2));
                    this.jin2.alpha = 1;
                    this.jin3.alpha = 1;
                    break;
            }
        };
        /**能量 */
        buildingItem.prototype.nens = function () {
            var nenLen = "" + this.dataSource["nen"] + "";
            switch (nenLen.length) {
                case 0:
                    this.nen1.index = 0;
                    this.nen2.alpha = 0;
                    this.nen3.alpha = 0;
                    break;
                case 1:
                    this.nen1.index = this.dataSource["nen"];
                    this.nen2.alpha = 0;
                    this.nen3.alpha = 0;
                    break;
                case 2:
                    this.nen1.index = Number(nenLen.slice(0, 1));
                    this.nen2.index = Number(nenLen.slice(1));
                    this.nen2.alpha = 1;
                    this.nen3.alpha = 0;
                    break;
                case 3:
                    this.nen1.index = Number(nenLen.slice(0, 1));
                    this.nen2.index = Number(nenLen.slice(1, 2));
                    this.nen3.index = Number(nenLen.slice(2));
                    this.nen2.alpha = 1;
                    this.nen3.alpha = 1;
                    break;
            }
        };
        buildingItem.prototype.onclick = function () {
            if (this._placeItemModule.editMode == false) { /**禁止nana点击 */
                wuling.Bottom.getInstance().nanaicon.offAll();
                this.buildingSet();
                //新手教程
                if (wuling.map.getInstance().guide == true) {
                    wuling.map.getInstance().newclick();
                }
            }
        };
        /**设置显示图片属性 */
        buildingItem.prototype.pictureSet = function () {
        };
        /**添加设置建筑 */
        buildingItem.prototype.buildingSet = function () {
            if (this.dataSource["jin"] <= wuling.Top.getInstance().jin && this.dataSource["nen"] <= wuling.Top.getInstance().nen) {
                if (this.dataSource["id"] != 50 && this.dataSource["id"] != 200) {
                    var sprite = new wuling.PlaceItem2;
                    sprite.builObj = this.dataSource;
                    sprite.imgBtn.skin = "place" + this.dataSource["url"].slice(6);
                    this._placeItemModule.editMode = true;
                    //设置属性
                    //1x1
                    if (this.dataSource["id"] == 1) {
                        sprite.imgBtn.width = 76;
                        sprite.imgBtn.height = 181;
                        sprite.imgBtn.x = 133;
                        sprite.imgBtn.y = 210;
                        sprite.imgBtn.name = "1";
                    }
                    //1x2
                    if (this.dataSource["id"] == 2) {
                        sprite.imgBtn.width = 110;
                        sprite.imgBtn.height = 141;
                        sprite.imgBtn.x = 140;
                        sprite.imgBtn.y = 248;
                        sprite.imgBtn.name = "2";
                    }
                    //1x4
                    if (this.dataSource["id"] == 3) {
                        sprite.imgBtn.width = 175;
                        sprite.imgBtn.height = 206;
                        sprite.imgBtn.x = 135;
                        sprite.imgBtn.y = 182;
                        sprite.imgBtn.name = "3";
                    }
                    //2x1
                    if (this.dataSource["id"] == 22) {
                        sprite.imgBtn.width = 105;
                        sprite.imgBtn.height = 139;
                        sprite.imgBtn.x = 100;
                        sprite.imgBtn.y = 250;
                        sprite.imgBtn.name = "22";
                    }
                    //2x2
                    if (this.dataSource["id"] == 20) {
                        sprite.imgBtn.width = 153;
                        sprite.imgBtn.height = 171;
                        sprite.imgBtn.x = 89;
                        sprite.imgBtn.y = 223;
                        sprite.imgBtn.name = "20";
                    }
                    //2x3
                    if (this.dataSource["id"] == 21) {
                        sprite.imgBtn.width = 191;
                        sprite.imgBtn.height = 244;
                        sprite.imgBtn.x = 95;
                        sprite.imgBtn.y = 141;
                        sprite.imgBtn.name = "21";
                    }
                    //3x2
                    if (this.dataSource["id"] == 32) {
                        sprite.imgBtn.width = 191;
                        sprite.imgBtn.height = 241;
                        sprite.imgBtn.x = 54;
                        sprite.imgBtn.y = 145;
                        sprite.imgBtn.name = "32";
                    }
                    //3x4
                    if (this.dataSource["id"] == 30) {
                        sprite.imgBtn.width = 246;
                        sprite.imgBtn.height = 173;
                        sprite.imgBtn.x = 58;
                        sprite.imgBtn.y = 210;
                        sprite.imgBtn.name = "30";
                    }
                    //3x5
                    if (this.dataSource["id"] == 31) {
                        sprite.imgBtn.width = 280;
                        sprite.imgBtn.height = 281;
                        sprite.imgBtn.x = 80;
                        sprite.imgBtn.y = 115;
                        sprite.imgBtn.name = "31";
                    }
                    //4x5
                    if (this.dataSource["id"] == 40) {
                        sprite.imgBtn.width = 323;
                        sprite.imgBtn.height = 317;
                        sprite.imgBtn.x = 23;
                        sprite.imgBtn.y = 68;
                        sprite.imgBtn.name = "40";
                    }
                    //4x2
                    if (this.dataSource["id"] == 42) {
                        sprite.imgBtn.width = 180;
                        sprite.imgBtn.height = 262;
                        sprite.imgBtn.x = 50;
                        sprite.imgBtn.y = 119;
                        sprite.imgBtn.name = "42";
                    }
                    //4x3
                    if (this.dataSource["id"] == 43) {
                        sprite.imgBtn.width = 230;
                        sprite.imgBtn.height = 270;
                        sprite.imgBtn.x = 39;
                        sprite.imgBtn.y = 115;
                        sprite.imgBtn.name = "43";
                    }
                    sprite.abiImg.x = sprite.imgBtn.x;
                    sprite.abiImg.y = sprite.imgBtn.y;
                    sprite.abiImg.width = sprite.imgBtn.width;
                    sprite.abiImg.height = sprite.imgBtn.height;
                    //获取对应图片名字
                    var imgPng = sprite.imgBtn.skin.slice(6);
                    var imgName = imgPng.slice(0, -4);
                    wuling.map.getInstance().arrPla2(sprite);
                    var map = wuling.map.getInstance().mapImg;
                    var mapZ = wuling.map.getInstance()._diClick;
                    if (this._placeItemModule.showStage[mapZ - 1] != undefined) {
                        sprite.x = this._placeItemModule.showStage[mapZ - 1]["x"] - 70;
                        sprite.y = this._placeItemModule.showStage[mapZ - 1]["y"] - 70;
                    }
                    else {
                        sprite.x = wuling.map.getInstance().pan.hScrollBar.value * 1.50 + 400;
                        sprite.y = wuling.map.getInstance().pan.vScrollBar.value * 1.50 + 500;
                    }
                    //新手教程
                    if (wuling.map.getInstance().guide == true) {
                        if (this.dataSource["url"] == "place1/d100013.png") {
                            sprite.x = 1210;
                            sprite.y = 1490;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite.ensure.gray = false;
                            sprite._zb = 0;
                        }
                        if (this.dataSource["url"] == "place1/m10001.png") {
                            sprite.x = 1771;
                            sprite.y = 1407;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite._zb = 2;
                        }
                        if (this.dataSource["url"] == "place1/m100011.png") {
                            sprite.x = 2016;
                            sprite.y = 1567;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite._zb = 3;
                        }
                        if (this.dataSource["url"] == "place1/m10002.png") {
                            sprite.x = 2051;
                            sprite.y = 1232;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite._zb = 5;
                        }
                        if (this.dataSource["url"] == "place1/m10004.png") {
                            sprite.x = 1799;
                            sprite.y = 1066;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite._zb = 4;
                        }
                        if (this.dataSource["url"] == "place1/d10006.png") {
                            sprite.x = 2259;
                            sprite.y = 1458;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite._zb = 6;
                            sprite._i = 6;
                        }
                    }
                    //_________________________________________________________
                    // util.HttpRequestUtil.sendAddBuilding2("RoomID="+module.Room.getInstance().RoomID+"&ResourceName="+imgName+"&IdentifierCode="+this.dataSource["id"]+"&RoomCoin="+wuling.Top.getInstance().jin+"&RoomPower="+wuling.Top.getInstance().nen);
                    util.HttpRequestUtil.sendAddBuilding2("RoomID=" + module.Room.getInstance().RoomID + "&ResourceName=" + imgName + "&IdentifierCode=" + this.dataSource["id"] + "&ObjectLevel=1");
                    //_________________________________________________________
                    wuling.map.getInstance().mapImg.addChild(sprite);
                    sprite.buiAin();
                }
                if (this.dataSource["id"] == 50) {
                    var sprite1 = new wuling.PlaceItem1;
                    sprite1.builObj = this.dataSource;
                    wuling.map.getInstance().arrPla(sprite1);
                    sprite1.show0.skin = "place" + this.dataSource["url"].slice(6);
                    sprite1.show1.skin = this.dataSource["url2"];
                    if (this.dataSource["url2"] == "place/show5.png") {
                        sprite1.show1.visible = false;
                        sprite1.show1Ani.visible = false;
                    }
                    //获取对应图片名字
                    var imgPng1 = sprite1.show0.skin.slice(6);
                    var imgName1 = imgPng1.slice(0, -4);
                    //判断地板更改属性
                    if (sprite1.show0.skin == "place/d100016.png") {
                        sprite1.carClass.y = -32;
                        sprite1.carClassAni.y = -32;
                        sprite1.imgBtn.x += 5;
                        sprite1.imgBtn.y += -3;
                    }
                    else {
                        sprite1.carClass.y = -52;
                        sprite1.carClassAni.y = -52;
                        sprite1.imgBtn.x += 10;
                        sprite1.imgBtn.y += (-4);
                    }
                    if (this.dataSource["url2"] == "place/show4.png") {
                        sprite1.show1.visible = false;
                        sprite1.show1Ani.visible = false;
                        sprite1.show0.y = sprite1.show0.y + 10;
                        sprite1.show0.x = sprite1.show0.x + 15;
                        sprite1.show0Ani.y = sprite1.show0Ani.y + 10;
                        sprite1.show0Ani.x = sprite1.show0Ani.x + 15;
                        sprite1.carClass.y += 20;
                        sprite1.carClassAni.y += 20;
                    }
                    // if(this._placeItemModule.aaa<=0)
                    // {
                    this._placeItemModule.editMode = true;
                    // }
                    //_________________________________________________________
                    util.HttpRequestUtil.sendAddBuilding1("RoomID=" + module.Room.getInstance().RoomID + "&ResourceName=" + imgName1 + "&IdentifierCode=50" + "&ObjectLevel=1");
                    //_________________________________________________________
                    var map = wuling.map.getInstance().mapImg;
                    var mapZ = wuling.map.getInstance()._diClick;
                    if (this._placeItemModule.showStage[mapZ - 1] != undefined) {
                        sprite1.x = this._placeItemModule.showStage[mapZ - 1]["x"];
                        sprite1.y = this._placeItemModule.showStage[mapZ - 1]["y"];
                    }
                    else {
                        sprite1.x = wuling.map.getInstance().pan.hScrollBar.value * 1.50 + 400;
                        sprite1.y = wuling.map.getInstance().pan.vScrollBar.value * 1.50 + 500;
                    }
                    //新手教程
                    if (wuling.map.getInstance().guide == true) {
                        sprite1.x = 1592;
                        sprite1.y = 1337;
                        sprite1.imgBtn.gray = false;
                        sprite1.ensure.gray = false;
                        sprite1._zb = 1;
                    }
                    sprite1.buiAin();
                    wuling.map.getInstance().mapImg.addChild(sprite1);
                    // wuling.PlaceItem1.getInstance();
                }
                if (this.dataSource["id"] == 200) {
                    var RoomClass = module.Room.getInstance().RoomClass;
                    // wuling.map.getInstance().diImg.skin = this.dataSource["url2"];
                    util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&RoomStyle=" + this.dataSource["url2"] + "&RoomCoin=" + wuling.Top.getInstance().jin + "&RoomPower=" + wuling.Top.getInstance().nen);
                    // wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-this.dataSource["jin"];
                    util.HttpRequestUtil.Modifybaobi(-this.dataSource["jin"]);
                    wuling.Top.getInstance().nen = wuling.Top.getInstance().nen - this.dataSource["nen"];
                    // wuling.Top.getInstance().gabi();
                    wuling.Top.getInstance().nens();
                    //更换地板任务
                    if (module.missionModule.getInstance().ToreceiveSituation.length > 0) {
                        var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission3Prize"];
                        // var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission3"];
                        if (ToreceiveSituation == true) {
                            module.missionModule.getInstance().onbaobi("Mission4", 1);
                        }
                    }
                    wuling.map.getInstance().person1.figureStart();
                    wuling.map.getInstance().person2.figureStart();
                    wuling.map.getInstance().person3.figureStart();
                    wuling.map.getInstance().person4.figureStart();
                    wuling.map.getInstance().person5.figureStart();
                    wuling.Bottom.getInstance().nanaOnClick();
                }
                //新手教程改
                if (wuling.map.getInstance().guide == false) {
                    wuling.Bottom.getInstance().btmclick();
                }
                // wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-this.dataSource["jin"];
                // wuling.Top.getInstance().nen =wuling.Top.getInstance().nen-this.dataSource["nen"];
                // wuling.Top.getInstance().gabi();
                // wuling.Top.getInstance().nens();
                return;
            }
            else {
                //判断不足条件
                if (this.dataSource["jin"] > wuling.Top.getInstance().jin) {
                    //宝币不足
                    wuling.Bottom.getInstance().noJin();
                }
                else {
                    //能量不足
                    wuling.Bottom.getInstance().noNen();
                }
                if (this.dataSource["jin"] > wuling.Top.getInstance().jin && this.dataSource["nen"] > wuling.Top.getInstance().nen) {
                    //宝币和能量不足
                    wuling.Bottom.getInstance().noJinNen();
                }
            }
            if (wuling.map.getInstance().guide == false) {
                wuling.map.getInstance().person1.figureStart();
                wuling.map.getInstance().person2.figureStart();
                wuling.map.getInstance().person3.figureStart();
                wuling.map.getInstance().person4.figureStart();
                wuling.map.getInstance().person5.figureStart();
                wuling.Bottom.getInstance().nanaOnClick();
            }
        };
        return buildingItem;
    }(ui.buildingItemUI));
    wuling.buildingItem = buildingItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=buildingItem.js.map