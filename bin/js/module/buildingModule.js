/**
* 建筑数据处理页面,含有用户登录时读取数据库自动生成建筑
*/
var module;
(function (module) {
    var buildingModule = /** @class */ (function () {
        function buildingModule() {
            /**建筑ID */
            this._RoomObjectID = null;
            /**设施数据*/
            this._buildingImg = {};
            //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            /**placeItemModule数据*/
            this._placeItemModule = module.placeItemModule.getInstance();
            //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            /**建筑选择界面数据1 */
            this.buildingChooseData1 = [
                // {url:"place1/m100014.png",id:1,jin:30,nen:10,name:"休息凳",suo:1}
                { url: "place1/m10002.png", id: 1, jin: 30, nen: 10, name: "休息凳", suo: 1 }
                // ,{url:"place1/m100015.png",id:2,jin:60,nen:10,name:"连体休息凳",suo:2}
                ,
                { url: "place1/m10003.png", id: 22, jin: 60, nen: 10, name: "连体休息凳", suo: 2 },
                { url: "place1/m10004.png", id: 1, jin: 100, nen: 20, name: "小型信息牌", suo: 3 }
                // ,{url:"place1/m100012.png",id:1,jin:80,nen:3,name:"小型信息牌",suo:3}
                ,
                { url: "place1/m10005.png", id: 22, jin: 100, nen: 20, name: "中型信息牌", suo: 6 }
                // ,{url:"place1/m100013.png",id:2,jin:100,nen:4,name:"中型信息牌",suo:6}
                ,
                { url: "place1/m10001.png", id: 1, jin: 200, nen: 20, name: "圆灯柱", suo: 6 },
                { url: "place1/m100016.png", id: 1, jin: 300, nen: 20, name: "锥形灯柱", suo: 8 },
                { url: "place1/m100017.png", id: 1, jin: 500, nen: 30, name: "立体摆件", suo: 12 },
                { url: "place1/m100018.png", id: 1, jin: 500, nen: 30, name: "罗马柱", suo: 12 },
                { url: "place1/m100019.png", id: 1, jin: 1200, nen: 30, name: "三环摆件", suo: 14 },
                { url: "place1/m100020.png", id: 1, jin: 1200, nen: 30, name: "陶瓷摆件", suo: 14 }
                // ,{url:"place1/m100011.png",id:1,jin:200,nen:20,name:"圆灯柱",suo:6}
                ,
                { url: "place1/m10007.png", id: 1, jin: 30, nen: 10, name: "小圆草丛", suo: 1 },
                { url: "place1/m10009.png", id: 1, jin: 30, nen: 10, name: "小方草丛", suo: 4 },
                { url: "place1/m100021.png", id: 22, jin: 60, nen: 10, name: "大方草丛", suo: 11 },
                { url: "place1/m100010.png", id: 1, jin: 100, nen: 20, name: "草丛柱", suo: 11 },
                { url: "place1/m10006.png", id: 1, jin: 100, nen: 20, name: "圆形树柱", suo: 25 },
                { url: "place1/m10008.png", id: 1, jin: 300, nen: 20, name: "古典树柱", suo: 25 }
            ];
            /**建筑选择界面数据1 */
            this.buildingChooseData2 = [
                { url: "place1/d100016.png", id: 50, url2: "place/show1.png", jin: 200, nen: 20, name: "普通地台", suo: 1 },
                { url: "place1/d100015.png", id: 50, url2: "place/show2.png", jin: 400, nen: 20, name: "增高地台", suo: 4 },
                { url: "place1/d100014.png", id: 50, url2: "place/show3.png", jin: 600, nen: 20, name: "豪华地台", suo: 15 },
                { url: "place1/d100032.png", id: 50, url2: "place/show4.png", jin: 1200, nen: 30, name: "公路地台", suo: 20 },
                { url: "place1/d100033.png", id: 50, url2: "place/show5.png", jin: 1200, nen: 30, name: "越野地台", suo: 20 },
                { url: "place1/d100013.png", id: 40, jin: 300, nen: 30, name: "自助餐吧", suo: 1 },
                // {url:"place1/d100029.png",id:40,jin:300,nen:30,name:"自助餐吧",suo:1},
                { url: "place1/d10008.png", id: 21, jin: 300, nen: 20, name: "VR试驾台", suo: 10 },
                // {url:"place1/d100023.png",id:21,jin:300,nen:20,name:"VR试驾台",suo:10},
                // {url:"place1/d10009.png",id:21,jin:500,nen:20,name:"制动系统展示",suo:5},
                { url: "place1/d100010.png", id: 43, jin: 500, nen: 20, name: "制动系统展示", suo: 5 },
                { url: "place1/d100024.png", id: 43, jin: 500, nen: 20, name: "发动机展示", suo: 5 },
                { url: "place1/d100026.png", id: 43, jin: 500, nen: 20, name: "变速箱展示", suo: 5 },
                // {url:"place1/d100030.png",id:30,jin:1000,nen:50,name:"趣味游戏台",suo:1},
                { url: "place1/d100031.png", id: 40, jin: 1000, nen: 50, name: "趣味游戏台", suo: 5 },
                { url: "place1/d100012.png", id: 40, jin: 1000, nen: 50, name: "大型赠品电子墙", suo: 8 },
                // {url:"place1/d100028.png",id:31,jin:1000,nen:50,name:"大型赠品电子墙",suo:1},
                { url: "place1/d10007.png", id: 1, jin: 100, nen: 10, name: "小型垃圾桶", suo: 1 },
                // {url:"place1/d100017.png",id:1,jin:100,nen:10,name:"小型垃圾桶",suo:1},
                // {url:"place1/d10006.png",id:21,jin:300,nen:20,name:"大型饮料机",suo:2},
                { url: "place1/d100022.png", id: 32, jin: 300, nen: 20, name: "大型饮料机", suo: 2 },
                // {url:"place1/d10003.png",id:2,jin:200,nen:20,name:"小型操作台",suo:3},
                { url: "place1/d100018.png", id: 42, jin: 200, nen: 20, name: "小型操作台", suo: 3 },
                { url: "place1/d10001.png", id: 42, jin: 500, nen: 30, name: "交互操作台", suo: 4 },
                // {url:"place1/d100021.png",id:21,jin:500,nen:30,name:"交互操作台",suo:4},
                { url: "place1/d10002.png", id: 43, jin: 500, nen: 30, name: "大型信息屏", suo: 8 },
                // {url:"place1/d100019.png",id:3,jin:500,nen:30,name:"大型信息屏",suo:8},
                { url: "place1/d10005.png", id: 42, jin: 250, nen: 15, name: "儿童互动台", suo: 1 },
            ];
        }
        Object.defineProperty(buildingModule.prototype, "buildingImg", {
            /**获取设施数据 */
            get: function () {
                return this._buildingImg;
            },
            /**设置设施数据 */
            set: function (ID) {
                this._buildingImg = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(buildingModule.prototype, "RoomObjectID", {
            /**获取建筑ID */
            get: function () {
                return this._RoomObjectID;
            },
            /**设置建筑ID */
            set: function (ID) {
                this._RoomObjectID = ID;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(buildingModule.prototype, "buildingAll", {
            /**获取全部建筑数据 */
            get: function () {
                return this._buildingAll;
            },
            /**设置全部建筑数据 */
            set: function (data) {
                this._buildingAll = data;
                // wuling.Top.getInstance().zan();
                // this.reduction(data);
            },
            enumerable: true,
            configurable: true
        });
        /**登录添加物品 */
        buildingModule.prototype.reduction = function (Arr) {
            if (Arr != undefined) {
                for (var i = 0; i < Arr.length; i++) {
                    if (Arr[i]["ObjectPosX"] != 0) {
                        if (Arr[i]["IdentifierCode"] == "50") {
                            var sprite1 = new wuling.PlaceItem1;
                            wuling.map.getInstance().arrPla(sprite1);
                            sprite1.show0.skin = "place/" + Arr[i]["ResourceName"] + ".png";
                            if (Arr[i]["Commons"] != "") {
                                sprite1.carClass.skin = "ditaiChexing/" + Arr[i]["Commons"] + ".png";
                            }
                            sprite1.RoomObjectID = Arr[i]["RoomObjectID"];
                            sprite1.x = Arr[i]["ObjectPosX"];
                            sprite1.y = Arr[i]["ObjectPosY"];
                            sprite1.zOrder = Arr[i]["Hierarchy"];
                            sprite1._zb = Number(Arr[i]["Area"]);
                            sprite1.imgBtn.name = Arr[i]["IdentifierCode"];
                            sprite1.ObjectLevel = Arr[i]["ObjectLevel"];
                            sprite1.Jd = Arr[i]["InteractionNum"];
                            sprite1._mc1.x = sprite1.x - 140;
                            sprite1._mc1.y = sprite1.y - 210;
                            sprite1.shieldingCoordinates();
                            //判断地板更改属性
                            if (Arr[i]["ResourceName"] == "d100016") {
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
                            if (Arr[i]["ResourceName"] == "d100015") {
                                sprite1.show1.skin = "place/show2.png";
                                if (Arr[i]["ObjectLevel"] == 2) {
                                    sprite1.show1.skin = "place/show2a.png";
                                }
                                if (Arr[i]["ObjectLevel"] == 3) {
                                    sprite1.show1.skin = "place/show2ab.png";
                                }
                            }
                            if (Arr[i]["ResourceName"] == "d100014") {
                                sprite1.show1.skin = "place/show3.png";
                                if (Arr[i]["ObjectLevel"] == 2) {
                                    sprite1.show1.skin = "place/show3a.png";
                                }
                                if (Arr[i]["ObjectLevel"] == 3) {
                                    sprite1.show1.skin = "place/show3ab.png";
                                }
                            }
                            //-----------------------------------------
                            if (Arr[i]["ResourceName"] == "d100016") {
                                if (Arr[i]["ObjectLevel"] == 2) {
                                    sprite1.show1.skin = "place/show1a.png";
                                }
                                if (Arr[i]["ObjectLevel"] == 3) {
                                    sprite1.show1.skin = "place/show1ab.png";
                                }
                            }
                            if (Arr[i]["ResourceName"] == "d100032") {
                                sprite1.show1.skin = "place/show4.png";
                                sprite1.show1.visible = false;
                                sprite1.show1Ani.visible = false;
                                sprite1.show0.y = sprite1.show0.y + 10;
                                sprite1.show0.x = sprite1.show0.x + 15;
                                sprite1.show0Ani.y = sprite1.show0Ani.y + 10;
                                sprite1.show0Ani.x = sprite1.show0Ani.x + 15;
                                sprite1.carClass.y += 20;
                                sprite1.carClassAni.y += 20;
                                if (Arr[i]["ObjectLevel"] == 2) {
                                    sprite1.show1.skin = "place/show4a.png";
                                    sprite1.show0.skin = "place/show4a.png";
                                }
                            }
                            if (Arr[i]["ResourceName"] == "d100033") {
                                sprite1.show1.skin = "place/show5.png";
                                sprite1.show1.visible = false;
                                sprite1.show1Ani.visible = false;
                                if (Arr[i]["ObjectLevel"] == 2) {
                                    sprite1.show1.skin = "place/show5a.png";
                                    sprite1.show0.skin = "place/show5a.png";
                                }
                            }
                            sprite1.imgBtn.offAll();
                            this._placeItemModule.editMode = false;
                            sprite1.imgBtn.on(Laya.Event.CLICK, sprite1, sprite1.showDom);
                            sprite1.cancel.visible = false;
                            sprite1.ensure.visible = false;
                            sprite1.imgBtn.gray = false;
                            sprite1.buiAin();
                            wuling.map.getInstance().mapImg.addChild(sprite1);
                        }
                        else {
                            var sprite = new wuling.PlaceItem2;
                            wuling.map.getInstance().arrPla2(sprite);
                            sprite.imgBtn.skin = "place/" + Arr[i]["ResourceName"] + ".png";
                            this.setClass(sprite, i, Arr);
                            sprite.RoomObjectID = Arr[i]["RoomObjectID"];
                            sprite.x = Arr[i]["ObjectPosX"];
                            sprite.y = Arr[i]["ObjectPosY"];
                            sprite.zOrder = Arr[i]["Hierarchy"];
                            sprite._zb = Number(Arr[i]["Area"]);
                            sprite._i = Arr[i]["CreatedBy"];
                            sprite.ObjectLevel = Arr[i]["ObjectLevel"];
                            sprite.Jd = Arr[i]["InteractionNum"];
                            if (Arr[i]["ObjectLevel"] == 2) {
                                sprite.imgBtn.skin = "place/" + Arr[i]["ResourceName"] + "a.png";
                            }
                            if (Arr[i]["ObjectLevel"] == 3) {
                                sprite.imgBtn.skin = "place/" + Arr[i]["ResourceName"] + "ab.png";
                            }
                            sprite._mc.zOrder = sprite._placeItemModule.zuobiao[sprite._i][0]["c"] + 0.5;
                            sprite._mczOrder = sprite._placeItemModule.zuobiao[sprite._i][0]["c"] + 0.5;
                            sprite._mc.x = this._placeItemModule.zuobiao[sprite._i][0]["x"] - 37;
                            sprite._mc.y = this._placeItemModule.zuobiao[sprite._i][0]["y"] - 200;
                            sprite.shieldingCoordinates();
                            sprite.imgBtn.offAll();
                            this._placeItemModule.editMode = false;
                            sprite.imgBtn.on(Laya.Event.CLICK, sprite, sprite.showDom);
                            sprite.cancel.visible = false;
                            sprite.ensure.visible = false;
                            sprite.imgBtn.gray = false;
                            sprite.abiImg.gray = false;
                            sprite.abiImg.x = sprite.imgBtn.x;
                            sprite.abiImg.y = sprite.imgBtn.y;
                            sprite.abiImg.width = sprite.imgBtn.width;
                            sprite.abiImg.height = sprite.imgBtn.height;
                            sprite.buiAin();
                            wuling.map.getInstance().mapImg.addChild(sprite);
                        }
                    }
                }
            }
            wuling.map.getInstance().digeBox.visible = false;
            wuling.map.getInstance().diClick.visible = true;
        };
        /**
         * 设置属性
         * @param sprite 设置对象
         * @param index 下标
         * @param Arr 全部建筑数据
         */
        buildingModule.prototype.setClass = function (sprite, index, Arr) {
            //1x1
            if (Arr[index]["IdentifierCode"] == "1") {
                sprite.imgBtn.width = 76;
                sprite.imgBtn.height = 181;
                sprite.imgBtn.x = 133;
                sprite.imgBtn.y = 210;
                sprite.imgBtn.name = "1";
            }
            //1x2
            if (Arr[index]["IdentifierCode"] == "2") {
                sprite.imgBtn.width = 110;
                sprite.imgBtn.height = 141;
                sprite.imgBtn.x = 140;
                sprite.imgBtn.y = 248;
                sprite.imgBtn.name = "2";
            }
            //1x4
            if (Arr[index]["IdentifierCode"] == "3") {
                sprite.imgBtn.width = 175;
                sprite.imgBtn.height = 206;
                sprite.imgBtn.x = 135;
                sprite.imgBtn.y = 182;
                sprite.imgBtn.name = "3";
            }
            //2x1
            if (Arr[index]["IdentifierCode"] == "22") {
                sprite.imgBtn.width = 105;
                sprite.imgBtn.height = 139;
                sprite.imgBtn.x = 97;
                sprite.imgBtn.y = 243;
                sprite.imgBtn.name = "22";
            }
            //2x2
            if (Arr[index]["IdentifierCode"] == "20") {
                sprite.imgBtn.width = 153;
                sprite.imgBtn.height = 171;
                sprite.imgBtn.x = 89;
                sprite.imgBtn.y = 223;
                sprite.imgBtn.name = "20";
            }
            //2x3
            if (Arr[index]["IdentifierCode"] == "21") {
                sprite.imgBtn.width = 191;
                sprite.imgBtn.height = 244;
                sprite.imgBtn.x = 95;
                sprite.imgBtn.y = 141;
                sprite.imgBtn.name = "21";
            }
            //3x2
            if (Arr[index]["IdentifierCode"] == "32") {
                sprite.imgBtn.width = 191;
                sprite.imgBtn.height = 241;
                sprite.imgBtn.x = 54;
                sprite.imgBtn.y = 145;
                sprite.imgBtn.name = "32";
            }
            //3x4
            if (Arr[index]["IdentifierCode"] == "30") {
                sprite.imgBtn.width = 246;
                sprite.imgBtn.height = 173;
                sprite.imgBtn.x = 58;
                sprite.imgBtn.y = 210;
                sprite.imgBtn.name = "30";
            }
            //3x5
            if (Arr[index]["IdentifierCode"] == "31") {
                sprite.imgBtn.width = 280;
                sprite.imgBtn.height = 281;
                sprite.imgBtn.x = 80;
                sprite.imgBtn.y = 115;
                sprite.imgBtn.name = "31";
            }
            //4x5
            if (Arr[index]["IdentifierCode"] == "40") {
                sprite.imgBtn.width = 323;
                sprite.imgBtn.height = 317;
                sprite.imgBtn.x = 23;
                sprite.imgBtn.y = 68;
                sprite.imgBtn.name = "40";
            }
            //4x2
            if (Arr[index]["IdentifierCode"] == "42") {
                sprite.imgBtn.width = 180;
                sprite.imgBtn.height = 262;
                sprite.imgBtn.x = 50;
                sprite.imgBtn.y = 119;
                sprite.imgBtn.name = "42";
            }
            //4x3
            if (Arr[index]["IdentifierCode"] == "43") {
                sprite.imgBtn.width = 230;
                sprite.imgBtn.height = 270;
                sprite.imgBtn.x = 39;
                sprite.imgBtn.y = 115;
                sprite.imgBtn.name = "43";
            }
        };
        /**重新排列建筑数组 */
        buildingModule.prototype.buildingChoose = function (arr) {
            //buArr1:已解锁数据,buArr2:未解锁数据
            var buArr1 = [];
            var buArr2 = [];
            var buArr3 = [];
            var LvNum = module.Room.getInstance().RoomClass["RoomLevel"] + 1;
            for (var i = 0; i < arr.length; i++) {
                if (LvNum >= arr[i]["suo"]) {
                    buArr1.push(arr[i]);
                }
                else {
                    buArr2.push(arr[i]);
                }
            }
            buArr3 = buArr1.concat(buArr2);
            return buArr3;
        };
        //剪切place1的img路径得出物品名
        buildingModule.prototype.shearStr = function (plstr) {
            var str = plstr.slice(6);
            var str2 = str.slice(0, -4);
            return str2;
        };
        //剪切place的img路径得出物品名
        buildingModule.prototype.shearStr1 = function (plstr) {
            var str = plstr.slice(5);
            var str2 = str.slice(0, -4);
            return str2;
        };
        //剪切车的img路径得出物品名
        buildingModule.prototype.shearStrCar = function (plstr) {
            var str = plstr.slice(13);
            var str2 = str.slice(0, -4);
            return str2;
        };
        buildingModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new buildingModule;
            }
            return this._instance;
        };
        return buildingModule;
    }());
    module.buildingModule = buildingModule;
})(module || (module = {}));
//# sourceMappingURL=buildingModule.js.map