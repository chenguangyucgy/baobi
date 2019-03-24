/**
* name
*/
var module;
(function (module) {
    var buildingModule = /** @class */ (function () {
        function buildingModule() {
            /**建筑ID */
            this._RoomObjectID = null;
            /**设施图片 */
            this._buildingImg = "";
            /**placeItemModule数据*/
            this._placeItemModule = module.placeItemModule.getInstance();
        }
        Object.defineProperty(buildingModule.prototype, "buildingImg", {
            /**获取设施图片 */
            get: function () {
                return this._buildingImg;
            },
            /**设置设施图片 */
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
                // this.reduction(data);
            },
            enumerable: true,
            configurable: true
        });
        /**添加物品 */
        buildingModule.prototype.reduction = function (Arr) {
            if (Arr != undefined) {
                for (var i = 0; i < Arr.length; i++) {
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
                        sprite1.shieldingCoordinates();
                        //判断地板更改属性
                        if (Arr[i]["ResourceName"] == "d100016") {
                            sprite1.show1.skin = "place/show1.png";
                            sprite1.carClass.y = -22;
                            sprite1.spani.y = -153;
                        }
                        else {
                            sprite1.carClass.y = -42;
                            sprite1.spani.y = -173;
                        }
                        if (Arr[i]["ResourceName"] == "d100015") {
                            sprite1.show1.skin = "place/show2.png";
                        }
                        if (Arr[i]["ResourceName"] == "d100014") {
                            sprite1.show1.skin = "place/show1.png";
                        }
                        sprite1.imgBtn.offAll();
                        this._placeItemModule.editMode = false;
                        sprite1.imgBtn.on(Laya.Event.CLICK, sprite1, sprite1.showDom);
                        sprite1.cancel.visible = false;
                        sprite1.ensure.visible = false;
                        sprite1.imgBtn.gray = false;
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
                        sprite._i = Arr[i]["IsDeleted"];
                        sprite.shieldingCoordinates();
                        sprite.imgBtn.offAll();
                        this._placeItemModule.editMode = false;
                        sprite.imgBtn.on(Laya.Event.CLICK, sprite, sprite.showDom);
                        sprite.cancel.visible = false;
                        sprite.ensure.visible = false;
                        sprite.imgBtn.gray = false;
                        wuling.map.getInstance().mapImg.addChild(sprite);
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
                sprite.imgBtn.x = 128;
                sprite.imgBtn.y = 209;
                sprite.imgBtn.name = "1";
            }
            //1x2
            if (Arr[index]["IdentifierCode"] == "2") {
                sprite.imgBtn.width = 110;
                sprite.imgBtn.height = 141;
                sprite.imgBtn.x = 133;
                sprite.imgBtn.y = 244;
                sprite.imgBtn.name = "2";
            }
            //1x4
            if (Arr[index]["IdentifierCode"] == "3") {
                sprite.imgBtn.width = 175;
                sprite.imgBtn.height = 206;
                sprite.imgBtn.x = 132;
                sprite.imgBtn.y = 178;
                sprite.imgBtn.name = "3";
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
            //3x4
            if (Arr[index]["IdentifierCode"] == "30") {
                sprite.imgBtn.width = 246;
                sprite.imgBtn.height = 173;
                sprite.imgBtn.x = 58;
                sprite.imgBtn.y = 218;
                sprite.imgBtn.name = "30";
            }
            //3x5
            if (Arr[index]["IdentifierCode"] == "31") {
                sprite.imgBtn.width = 280;
                sprite.imgBtn.height = 281;
                sprite.imgBtn.x = 65;
                sprite.imgBtn.y = 130;
                sprite.imgBtn.name = "31";
            }
            //4x5
            if (Arr[index]["IdentifierCode"] == "40") {
                sprite.imgBtn.width = 319;
                sprite.imgBtn.height = 290;
                sprite.imgBtn.x = 28;
                sprite.imgBtn.y = 98;
                sprite.imgBtn.name = "40";
            }
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