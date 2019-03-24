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
            /**判断是否跳出函数false为跳出turn为不跳出 */
            _this.dapFun = true;
            //禁止nana点击
            wuling.Bottom.getInstance().nanaicon.offAll();
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            _this.gb.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.imgBtn.skin = "place1/" + buildingImg["img"] + ".png";
            _this.buidingname.text = module.buildingVo[buildingImg["img"]];
            _this.lvimg.skin = "ssInfo/org" + buildingImg["ObjectLevel"] + ".png";
            //满意度
            _this.manNum(buildingImg["img"]);
            //接待人数
            _this.JdNum(buildingImg["Jd"]);
            if (buildingImg["id"] == "fixed") {
                //前台
                _this.shenBtn.on(Laya.Event.CLICK, _this, _this.frontDesks);
                if (buildingImg["ObjectLevel"] == 0) {
                    _this.lvimg.skin = "ssInfo/org1.png";
                }
            }
            else if (buildingImg["id"] == "fixed1") {
                //AI控制台
                _this.shenBtn.on(Laya.Event.CLICK, _this, _this.Operation);
                if (buildingImg["ObjectLevel"] == 0) {
                    _this.lvimg.skin = "ssInfo/org1.png";
                }
            }
            else {
                //建筑
                _this.shenBtn.on(Laya.Event.CLICK, _this, _this.onHander);
            }
            //升级条件
            var upgrade = module.upgrade[buildingImg["img"]];
            if (module.buildingShen[buildingImg["img"]] == undefined || buildingImg["ObjectLevel"] >= upgrade["deLv"] || module.Room.getInstance().RoomClass["RoomLevel"] < (upgrade["Lv"] - 1) || wuling.Top.getInstance().zanNum < upgrade["man"]) {
                _this.shenBtn.visible = false;
                if (module.buildingShen[buildingImg["img"]] != undefined && buildingImg["ObjectLevel"] < upgrade["deLv"]) {
                    _this.tiaoBox.visible = true;
                    _this.tiaoLv();
                }
            }
            if (_this.shenBtn.visible == true) {
                //对话框内容
                var duiData = "升级需要" + upgrade["jin"] + "宝币和" + upgrade["nen"] + "能量";
                //显示nana对话框
                wuling.Bottom.getInstance().missionText(duiData);
            }
            return _this;
        }
        ssInfo.prototype.onclick = function () {
            this.close();
            //隐藏nana对话框
            wuling.Bottom.getInstance().ShutDownMission();
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().nanaOnClick();
        };
        /**条件等级 条件满意度*/
        ssInfo.prototype.tiaoLv = function () {
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            //升级条件
            var upgrade = module.upgrade[buildingImg["img"]];
            var nowNum = upgrade["Lv"];
            nowNum = Math.abs(nowNum);
            for (var i = 1; i < 3; i++) {
                if (nowNum > 0) {
                    this["tLvImg" + i].alpha = 1;
                    this["tLvImg" + i].skin = "ssInfo/" + (nowNum % 10) + ".png";
                    var a = nowNum % 10;
                    nowNum = Math.floor(nowNum / 10);
                }
                else {
                    this["tLvImg" + i].alpha = 0;
                }
            }
            var ManNum = upgrade["man"];
            for (var i = 1; i < 6; i++) {
                if (ManNum > 0) {
                    this["manImg" + i].alpha = 1;
                    this["manImg" + i].skin = "ssInfo/" + (ManNum % 10) + ".png";
                    var a = ManNum % 10;
                    ManNum = Math.floor(ManNum / 10);
                }
                else {
                    this["manImg" + i].alpha = 0;
                }
            }
        };
        /**满意度数据设置 */
        ssInfo.prototype.manNum = function (name) {
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            //升级条件
            var upgrade = module.upgrade[buildingImg["img"]];
            //判断是否为车台
            if (upgrade["classID"] == 1) {
                var zi = buildingImg["zi"];
                if (zi.carClass.skin != null) {
                    var car1 = zi.carClass.skin;
                    var car2 = car1.slice(13);
                    var car3 = car2.slice(0, -4);
                    var carName = buildingImg["img"];
                    var now1Num = module.buildingMan[carName];
                    var now2Num = module.buildingMan[car3];
                    var nowNum = now1Num + now2Num;
                }
                else {
                    var nowNum = module.buildingMan[name];
                }
            }
            else {
                var nowNum = module.buildingMan[name];
            }
            nowNum = Math.abs(nowNum);
            for (var i = 1; i <= 3; i++) {
                if (nowNum > 0) {
                    this["man" + i].alpha = 1;
                    this["man" + i].skin = "ssInfo/bo" + (nowNum % 10) + ".png";
                    var a = nowNum % 10;
                    nowNum = Math.floor(nowNum / 10);
                }
                else {
                    this["man" + i].alpha = 0;
                    this["man1"].alpha = 1;
                }
            }
        };
        /**互动人数数据设置 */
        ssInfo.prototype.JdNum = function (Num) {
            var nowNum = Num;
            nowNum = Math.abs(nowNum);
            for (var i = 1; i <= 6; i++) {
                if (nowNum > 0) {
                    this["Jd" + i].alpha = 1;
                    this["Jd" + i].skin = "ssInfo/bo" + (nowNum % 10) + ".png";
                    var a = nowNum % 10;
                    nowNum = Math.floor(nowNum / 10);
                }
                else {
                    this["Jd" + i].alpha = 0;
                    this["Jd1"].alpha = 1;
                }
            }
        };
        /**判断宝币或者能量是否满足 */
        ssInfo.prototype.judgeConditions = function () {
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            //升级条件
            var upgrade = module.upgrade[buildingImg["img"]];
            //判断不足条件
            if (upgrade["jin"] > wuling.Top.getInstance().jin && upgrade["nen"] > wuling.Top.getInstance().nen) {
                //宝币和能量不足
                wuling.Bottom.getInstance().boxText.text = "宝币和能量不足";
                this.dapFun = false;
                return;
            }
            if (upgrade["jin"] > wuling.Top.getInstance().jin) {
                //宝币不足
                wuling.Bottom.getInstance().boxText.text = "宝币不足";
                this.dapFun = false;
                return;
            }
            if (upgrade["nen"] > wuling.Top.getInstance().nen) {
                //能量不足
                wuling.Bottom.getInstance().boxText.text = "能量不足";
                this.dapFun = false;
                return;
            }
            this.dapFun = true;
        };
        /**升级消耗宝币和能量 */
        ssInfo.prototype.consumeJinNen = function () {
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            //升级条件
            var upgrade = module.upgrade[buildingImg["img"]];
            //减少宝币和能量
            util.HttpRequestUtil.Modifybaobi(-upgrade["jin"]);
            // wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-upgrade["jin"];
            wuling.Top.getInstance().nen = wuling.Top.getInstance().nen - upgrade["nen"];
            // wuling.Top.getInstance().gabi();
            wuling.Top.getInstance().nens();
        };
        ssInfo.prototype.onHander = function () {
            this.judgeConditions();
            if (this.dapFun == false) {
                return;
            }
            this.close();
            //隐藏nana对话框
            wuling.Bottom.getInstance().ShutDownMission();
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            //升级条件
            var upgrade = module.upgrade[buildingImg["img"]];
            if (upgrade["classID"] == 2) {
                var zi = buildingImg["zi"];
                zi._mc.visible = true;
                //加载建筑棚动画资源
                module.AnimationModule.getInstance().aniCling(zi._mc);
                zi._mc.zOrder = zi.zOrder + 0.5;
                Laya.timer.once(19 * 100, this, function () {
                    zi._mc.stop();
                    zi._mc.visible = false;
                });
                if (buildingImg["ObjectLevel"] == 1) {
                    //升级
                    util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + buildingImg["RoomObjectID"] + "&ObjectLevel=2");
                    zi.imgBtn.skin = "place/" + buildingImg["img"] + "a.png";
                    zi.ObjectLevel = 2;
                }
                if (buildingImg["ObjectLevel"] == 2) {
                    //升级
                    util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + buildingImg["RoomObjectID"] + "&ObjectLevel=3");
                    zi.imgBtn.skin = "place/" + buildingImg["img"] + "b.png";
                    zi.ObjectLevel = 3;
                }
                zi.buiAin();
            }
            //    var sli:string = buildingImg["img"];
            //    if(sli.slice(0,4)=="show")
            if (upgrade["classID"] == 1) {
                var zicar = buildingImg["zi"];
                zicar._mc1.visible = true;
                //加载建筑棚动画资源
                module.AnimationModule.getInstance().aniCling(zicar._mc1);
                zicar._mc1.zOrder = zicar.zOrder + 0.5;
                Laya.timer.once(19 * 100, this, function () {
                    zicar._mc1.stop();
                    zicar._mc1.visible = false;
                });
                if (buildingImg["ObjectLevel"] == 1) {
                    //升级
                    util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + buildingImg["RoomObjectID"] + "&ObjectLevel=2");
                    zicar.show1.skin = "place/" + buildingImg["img"] + "a.png";
                    zicar.show1.x = 75;
                    zicar.show1.y = -22;
                    zicar.ObjectLevel = 2;
                    if (buildingImg["img"] == "show4" || buildingImg["img"] == "show5") {
                        zicar.show0.skin = "place/" + buildingImg["img"] + "a.png";
                    }
                }
                if (buildingImg["ObjectLevel"] == 2) {
                    //升级
                    util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + buildingImg["RoomObjectID"] + "&ObjectLevel=3");
                    zicar.show1.skin = "place/" + buildingImg["img"] + "b.png";
                    zicar.show1.x = 90;
                    zicar.show1.y = -25;
                    zicar.ObjectLevel = 3;
                }
                zicar.buiAin();
            }
            this.consumeJinNen();
            this.figureStart();
        };
        //前台点击
        ssInfo.prototype.frontDesks = function () {
            this.judgeConditions();
            if (this.dapFun == false) {
                return;
            }
            this.close();
            //隐藏nana对话框
            wuling.Bottom.getInstance().ShutDownMission();
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            var ciling = new Laya.Animation();
            //加载建筑棚动画
            module.AnimationModule.getInstance().aniCling(ciling);
            if (buildingImg["ObjectLevel"] == 1) {
                // ciling.x = ciling.x-16;
                // ciling.y = ciling.y-33;
                wuling.map.getInstance().qiantai.load("res/swf/frontDesk1.swf", true);
                wuling.map.getInstance().frontDesk.y = wuling.map.getInstance().frontDesk.y - 12;
                util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&FrontLevel=2");
            }
            if (buildingImg["ObjectLevel"] == 2) {
                // ciling.x = ciling.x-30;
                // ciling.y = ciling.y-15;
                wuling.map.getInstance().qiantai.load("res/swf/frontDesk2.swf", true);
                wuling.map.getInstance().frontDesk.x += 14;
                wuling.map.getInstance().frontDesk.y = wuling.map.getInstance().frontDesk.y - 18;
                util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&FrontLevel=3");
            }
            wuling.map.getInstance().qiantai.alpha = 0;
            ciling.zOrder = wuling.map.getInstance().frontDesk.zOrder;
            ciling.x = wuling.map.getInstance().frontDesk.x - 50;
            ciling.y = wuling.map.getInstance().frontDesk.y - 30;
            Laya.timer.once(19 * 100, this, function () {
                ciling.destroy();
                wuling.map.getInstance().qiantai.alpha = 1;
                wuling.map.getInstance().qiantai.playTo(0, 1);
            });
            // Laya.timer.once(300,this,()=>{
            // 	wuling.map.getInstance().qiantai.playTo(0,1);
            // });
            this.consumeJinNen();
            this.figureStart();
        };
        //互动台点击
        ssInfo.prototype.Operation = function () {
            this.judgeConditions();
            if (this.dapFun == false) {
                return;
            }
            this.close();
            //隐藏nana对话框
            wuling.Bottom.getInstance().ShutDownMission();
            //建筑数据
            var buildingImg = module.buildingModule.getInstance().buildingImg;
            var ciling = new Laya.Animation();
            //加载建筑棚动画
            module.AnimationModule.getInstance().aniCling(ciling);
            if (buildingImg["ObjectLevel"] == 1) {
                // ciling.x = ciling.x-16;
                wuling.map.getInstance().platform.load("res/swf/operatingFloor1.swf", true);
                wuling.map.getInstance().platform_ball.y = wuling.map.getInstance().platform_ball.y - 22;
                wuling.map.getInstance().platform_ball.x = wuling.map.getInstance().platform_ball.x - 22;
                util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&OperationLevel=2");
            }
            if (buildingImg["ObjectLevel"] == 2) {
                // ciling.x = ciling.x-30;
                // ciling.y = ciling.y-15;
                wuling.map.getInstance().platform.load("res/swf/operatingFloor2.swf", true);
                wuling.map.getInstance().platform_ball.x += 14;
                wuling.map.getInstance().platform_ball.y = wuling.map.getInstance().platform_ball.y + 10;
                util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&OperationLevel=3");
            }
            wuling.map.getInstance().platform.alpha = 0;
            ciling.zOrder = wuling.map.getInstance().platform_ball.zOrder;
            ciling.x = wuling.map.getInstance().platform_ball.x - 20;
            ciling.y = wuling.map.getInstance().platform_ball.y - 10;
            Laya.timer.once(19 * 100, this, function () {
                ciling.destroy();
                wuling.map.getInstance().platform.alpha = 1;
            });
            // Laya.timer.once(300,this,()=>{
            // 	wuling.map.getInstance().platform.playTo(0,1);
            // });
            this.consumeJinNen();
            this.figureStart();
        };
        /**恢复人物行动和nana点击事件 */
        ssInfo.prototype.figureStart = function () {
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