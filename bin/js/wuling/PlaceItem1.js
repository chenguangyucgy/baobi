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
    var PlaceItem1 = /** @class */ (function (_super) {
        __extends(PlaceItem1, _super);
        function PlaceItem1() {
            var _this = _super.call(this) || this;
            /**获取map页面*/
            _this._map = wuling.map.getInstance();
            /**placeItemModule数据*/
            _this._placeItemModule = module.placeItemModule.getInstance();
            /**当前放置的坐标的下标*/
            _this._zb = null;
            _this._i = 0;
            //建筑等级
            _this.ObjectLevel = 1;
            //建筑数据
            _this.builObj = {};
            //接待人数
            _this.Jd = 0;
            //宝币
            _this.jin = new wuling.goldCoins;
            //是否新建宝币
            _this.newjin = true;
            /**动画1*/
            _this._mc1 = new Laya.Animation();
            /**建筑动画 */
            _this.show0Play = new Laya.Animation();
            _this.show1Play = new Laya.Animation();
            _this.carClassPlay = new Laya.Animation();
            _this._arr = [{ a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }];
            /**保存当前坐标 */
            _this.oldzuobiaoX = 0;
            _this.oldzuobiaoY = 0;
            /**保存当前层级 */
            _this.oldzOrder = 0;
            _this.oldzb = 0;
            _this.onMonitor();
            //取消
            _this.cancel.on(Laya.Event.CLICK, _this, _this.onclick);
            //点击确定
            _this.ensure.on(Laya.Event.CLICK, _this, _this.onclick);
            //移动
            _this.shift.on(Laya.Event.CLICK, _this, _this.onclick);
            //弹出拆除键盘
            _this.demolition.on(Laya.Event.CLICK, _this, _this.onclick);
            //车型
            _this.carModels.on(Laya.Event.CLICK, _this, _this.onclick);
            //设施类型
            _this.checks.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.showhome();
            _this.hideenDom();
            _this.imgBtn.gray = true;
            _this.ensure.gray = true;
            _this._map.digeBox.visible = true;
            _this._map.diClick.visible = false;
            _this.zOrder = 4000;
            _this.pivotX = 132;
            _this.pivotY = 127;
            _this.rotate.visible = false;
            //新手指引
            if (wuling.map.getInstance().guide == true) {
                _this.ensure.on(Laya.Event.MOUSE_OVER, _this, _this.stopPanel);
            }
            return _this;
        }
        /**mapImg上添加可点宝币 */
        PlaceItem1.prototype.jings = function () {
            if (this.newjin == true) {
                this.jin.x = this.x;
                this.jin.y = this.y - 270;
                // this.jin.alpha = 0;
                this.jin.zOrder = 99999;
                wuling.map.getInstance().mapImg.addChild(this.jin);
                this.newjin = false;
            }
            // this.jin.visible =true;
        };
        /**播放建筑棚动画 */
        PlaceItem1.prototype.Aniplay = function () {
            var _this = this;
            module.AnimationModule.getInstance().aniCling(this._mc1);
            Laya.timer.once(19 * 100, this, function () {
                _this._mc1.stop();
                _this._mc1.visible = false;
                _this.imgBtn.visible = true;
            });
        };
        /**加载建筑动画资源 */
        PlaceItem1.prototype.buiAin = function () {
            var imgname = module.buildingModule.getInstance().shearStr(this.show1.skin);
            if (module.aniFramesNumder[imgname] != 0) {
                this.show1.alpha = 0;
                module.AnimationModule.getInstance().aniMo(this.show1Play, imgname);
                this.show1Ani.addChild(this.show1Play);
            }
            else {
                this.show1.alpha = 1;
            }
            this.buiCarAin();
            this.buiAinDi();
        };
        /**加载车动画 */
        PlaceItem1.prototype.buiCarAin = function () {
            if (this.carClass.skin != null) {
                var carname = module.buildingModule.getInstance().shearStrCar(this.carClass.skin);
                this.carClass.alpha = 0;
                module.AnimationModule.getInstance().aniMo(this.carClassPlay, carname);
                this.carClassAni.addChild(this.carClassPlay);
            }
            else {
                this.carClass.alpha = 1;
            }
        };
        /**加载地台动画资源 */
        PlaceItem1.prototype.buiAinDi = function () {
            if (this.show0.skin == "place/d100032.png" || this.show0.skin == "place/show4a.png" || this.show0.skin == "place/show4.png"
                || this.show0.skin == "place/d100033.png" || this.show0.skin == "place/show5a.png" || this.show0.skin == "place/show5.png") {
                var diname = module.buildingModule.getInstance().shearStr(this.show0.skin);
                if (module.aniFramesNumder[diname] != 0) {
                    this.show0.alpha = 0;
                    module.AnimationModule.getInstance().aniMo(this.show0Play, diname);
                    this.show0Ani.addChild(this.show0Play);
                }
                else {
                    this.show0.alpha = 1;
                }
            }
        };
        PlaceItem1.getInstance = function () {
            if (this._instance == null) {
                this._instance = new PlaceItem1;
                var map = wuling.map.getInstance().mapImg;
                this._instance.x = map.width / 2;
                this._instance.y = map.height / 2;
                wuling.map.getInstance().mapImg.addChild(this._instance);
            }
            return this._instance;
        };
        /**拖动 */
        PlaceItem1.prototype.onMonitor = function () {
            this.imgBtn.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
            this.imgBtn.on(Laya.Event.MOUSE_OUT, this, this.startPanel);
            this.imgBtn.on(Laya.Event.MOUSE_OVER, this, this.stopPanel);
        };
        /**拖动设置*/
        PlaceItem1.prototype.onStartDrag = function (e) {
            this.on(Laya.Event.DRAG_MOVE, this, this.dragMove);
            var wu = wuling.map.getInstance();
            var dragRegion = new Laya.Rectangle(wu.width / 2, wu.height / 2, 2900, 2000);
            //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
            this.startDrag(dragRegion, false, 0);
        };
        /**监听拖动 */
        PlaceItem1.prototype.dragMove = function () {
            /**隐藏宝币 */
            this.jin.visible = false;
            this.imgBtn.gray = true;
            this.ensure.gray = true;
            //选择坐标集合
            // this.chooseGroup();
            //吸附、放置条件
            // this.conditions();
        };
        /**拖动时禁止panel滑动*/
        PlaceItem1.prototype.startPanel = function (event) {
            this.conditions();
            var wu = wuling.map.getInstance();
            wu.pan.hScrollBar.mouseWheelEnable = true;
            wu.pan.vScrollBar.mouseWheelEnable = true;
            wu.pan.hScrollBar.touchScrollEnable = true;
            wu.pan.vScrollBar.touchScrollEnable = true;
        };
        /**拖动时禁止panel滑动*/
        PlaceItem1.prototype.stopPanel = function (event) {
            var wu = wuling.map.getInstance();
            wu.pan.hScrollBar.mouseWheelEnable = false;
            wu.pan.vScrollBar.mouseWheelEnable = false;
            wu.pan.hScrollBar.touchScrollEnable = false;
            wu.pan.vScrollBar.touchScrollEnable = false;
        };
        PlaceItem1.prototype.renderHandler = function () {
            this._mc1.stop();
        };
        PlaceItem1.prototype.onclick = function (event) {
            var _this = this;
            switch (event.currentTarget) {
                //取消
                case this.cancel:
                    if (wuling.map.getInstance().guide == false) {
                        wuling.map.getInstance().person1.figureStart();
                        wuling.map.getInstance().person2.figureStart();
                        wuling.map.getInstance().person3.figureStart();
                        wuling.map.getInstance().person4.figureStart();
                        wuling.map.getInstance().person5.figureStart();
                    }
                    /**回复nana点击事件 */
                    wuling.Bottom.getInstance().nanaOnClick();
                    if (this.oldzuobiaoX == 0 && this.oldzuobiaoY == 0) {
                        //从数据中移除自己
                        var PlaceItem1Number = this._map.namecar.indexOf(this);
                        if (PlaceItem1Number != -1) {
                            this._map.namecar.splice(PlaceItem1Number, 1);
                        }
                        //从父容器中删除自己
                        this.removeSelf();
                        //删除后台数据
                        util.HttpRequestUtil.sendRemoveBuilding("RoomObjectID=" + this.RoomObjectID);
                        //删除宝币
                        this.jin.destroy(true);
                    }
                    else {
                        this.x = this.oldzuobiaoX;
                        this.y = this.oldzuobiaoY;
                        this.zOrder = this.oldzOrder;
                        this._zb = this.oldzb;
                        this.shieldingCoordinates();
                        /**显示宝币 */
                        this.jin.visible = true;
                        this.imgBtn.offAll();
                        this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                        this.cancel.visible = false;
                        this.ensure.visible = false;
                        this.imgBtn.gray = false;
                        this.ensure.gray = false;
                    }
                    this._map.digeBox.visible = false;
                    this._map.diClick.visible = true;
                    this._placeItemModule.editMode = false;
                    /**回复nana点击事件 */
                    wuling.Bottom.getInstance().nanaOnClick();
                    break;
                //确定
                case this.ensure:
                    /**显示宝币 */
                    if (this.imgBtn.gray == false) {
                        if (this.jin.jin > 0) {
                            this.jin.visible = true;
                            this.jin.x = this.x;
                            this.jin.y = this.y - 270;
                        }
                        else {
                            this.jin.visible = false;
                            this.jin.x = this.x;
                            this.jin.y = this.y - 270;
                        }
                        if (wuling.map.getInstance().guide == false) {
                            wuling.map.getInstance().person1.figureStart();
                            wuling.map.getInstance().person2.figureStart();
                            wuling.map.getInstance().person3.figureStart();
                            wuling.map.getInstance().person4.figureStart();
                            wuling.map.getInstance().person5.figureStart();
                            wuling.Bottom.getInstance().nanaOnClick();
                        }
                        /**回复nana点击事件 */
                        wuling.Bottom.getInstance().nanaOnClick();
                        this.Mission();
                        this.imgBtn.offAll();
                        this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                        this.cancel.visible = false;
                        this.ensure.visible = false;
                        // this.rotate.visible = false;
                        this._map.digeBox.visible = false;
                        this._map.diClick.visible = true;
                        this._placeItemModule.editMode = false;
                        this.zOrder = this._placeItemModule.showStage[this._zb]["c"];
                        //屏蔽坐标
                        this.shieldingCoordinates();
                        //保存坐标
                        util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + this.RoomObjectID + "&ObjectPosX=" + this.x + "&ObjectPosY=" + this.y + "&Hierarchy=" + this.zOrder + "&Area=" + this._zb + "");
                        //建筑盆动画
                        //新手教程
                        if (this._map.guide == true) {
                            this.ensure.off(Laya.Event.MOUSE_OVER, this, this.stopPanel);
                            wuling.Bottom.getInstance().nanaicon.offAll();
                            this._map.newclick();
                        }
                        if (this.oldzuobiaoX == 0 && this.oldzuobiaoY == 0) {
                            //配置1个增高地台任务
                            if (module.missionModule.getInstance().ToreceiveSituation.length > 0 && this.show0.skin == "place/d100015.png") {
                                var ToreceiveSituation = module.missionModule.getInstance().ToreceiveSituation[0]["GetMission7Prize"];
                                // var Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission7"];
                                if (ToreceiveSituation == true) {
                                    module.missionModule.getInstance().onbaobi("Mission8", 1);
                                }
                            }
                            //获取建筑数据
                            util.HttpRequestUtil.sendGetbuilding("RoomID=" + module.Room.getInstance().RoomID);
                            this.jianBot.visible = true;
                            this.jianBot.x = 54;
                            this.jianBot.y = -100;
                            this.jianBot.alpha = 0;
                            var jinLen = String(this.builObj["jin"]);
                            switch (jinLen.length) {
                                case 0:
                                    this.jin1.skin = "rankList/org0.png";
                                    this.jin2.alpha = 0;
                                    this.jin3.alpha = 0;
                                    this.jin4.alpha = 0;
                                    break;
                                case 1:
                                    this.jin1.skin = "rankList/org" + jinLen + ".png";
                                    this.jin2.alpha = 0;
                                    this.jin3.alpha = 0;
                                    this.jin4.alpha = 0;
                                    break;
                                case 2:
                                    this.jin1.skin = "rankList/org" + Number(jinLen.slice(0, 1)) + ".png";
                                    this.jin2.skin = "rankList/org" + Number(jinLen.slice(1)) + ".png";
                                    this.jin2.alpha = 1;
                                    this.jin3.alpha = 0;
                                    this.jin4.alpha = 0;
                                    break;
                                case 3:
                                    this.jin1.skin = "rankList/org" + Number(jinLen.slice(0, 1)) + ".png";
                                    this.jin2.skin = "rankList/org" + Number(jinLen.slice(1, 2)) + ".png";
                                    this.jin3.skin = "rankList/org" + Number(jinLen.slice(2)) + ".png";
                                    this.jin2.alpha = 1;
                                    this.jin3.alpha = 1;
                                    this.jin4.alpha = 0;
                                    break;
                                case 4:
                                    this.jin1.skin = "rankList/org" + Number(jinLen.slice(0, 1)) + ".png";
                                    this.jin2.skin = "rankList/org" + Number(jinLen.slice(1, 2)) + ".png";
                                    this.jin3.skin = "rankList/org" + Number(jinLen.slice(2, 3)) + ".png";
                                    this.jin4.skin = "rankList/org" + Number(jinLen.slice(3)) + ".png";
                                    this.jin2.alpha = 1;
                                    this.jin3.alpha = 1;
                                    this.jin4.alpha = 1;
                                    break;
                            }
                            Laya.Tween.to(this.jianBot, { y: -200, alpha: 1 }, 500, null);
                            Laya.timer.once(1000, this, function () {
                                Laya.Tween.to(_this.jianBot, { y: -300, alpha: 0 }, 500, null);
                            });
                            //设施总数任务增
                            module.missionModule.getInstance().builNums(0);
                            //消耗宝币任务
                            module.missionModule.getInstance().reJin(this.builObj["jin"]);
                            //建筑任务
                            module.missionModule.getInstance().buildingMission(this.builObj["url"]);
                            //减少宝币和能量
                            util.HttpRequestUtil.Modifybaobi(-this.builObj["jin"]);
                            // wuling.Top.getInstance().jin =wuling.Top.getInstance().jin-this.builObj["jin"];
                            wuling.Top.getInstance().nen = wuling.Top.getInstance().nen - this.builObj["nen"];
                            // wuling.Top.getInstance().this.builObj["jin"]();
                            wuling.Top.getInstance().nens();
                            this.spani.visible = true;
                            this._mc1.x = this.x - 140;
                            this._mc1.y = this.y - 210;
                            this.imgBtn.visible = false;
                            //加载建筑棚动画资源
                            module.AnimationModule.getInstance().aniCling(this._mc1);
                            Laya.timer.once(19 * 100, this, function () {
                                _this._mc1.visible = false;
                                _this._mc1.stop();
                                _this.imgBtn.visible = true;
                                if (_this._map.guide == false) {
                                    wuling.map.getInstance().person1.happy();
                                    wuling.map.getInstance().person2.happy();
                                    wuling.map.getInstance().person3.happy();
                                    wuling.map.getInstance().person4.happy();
                                    wuling.map.getInstance().person5.happy();
                                }
                                _this.spani.visible = false;
                            });
                        }
                    }
                    break;
                //移动
                case this.shift:
                    /**禁止nana点击 */
                    wuling.Bottom.getInstance().nanaicon.offAll();
                    //取消---新手指引改
                    if (wuling.map.getInstance().guide == false) {
                        this.cancel.on(Laya.Event.CLICK, this, this.onclick);
                    }
                    this.oldzuobiaoX = this.x;
                    this.oldzuobiaoY = this.y;
                    this.oldzOrder = this.zOrder;
                    this.oldzb = this._zb;
                    this._map.digeBox.visible = true;
                    this._map.diClick.visible = false;
                    this.cancel.visible = true;
                    this.ensure.visible = true;
                    this.ensure.gray = false;
                    Laya.timer.clear(this, this.oncancel);
                    // this.rotate.visible =true;
                    this.zOrder = 3001;
                    this._placeItemModule.editMode = true;
                    //回复坐标点
                    this.replyCoordinates();
                    this.showhome();
                    this.imgBtn.offAll();
                    this.hideenDom();
                    this.onMonitor();
                    break;
                //打开移除
                case this.demolition:
                    var Bottom = wuling.Bottom.getInstance();
                    /**打开Nana提示 */
                    Bottom.caichu();
                    Laya.timer.clear(this, this.oncancel);
                    this._map.diClick.visible = false;
                    this._placeItemModule.editMode = true;
                    Bottom.determine.offAll();
                    Bottom.abolish.offAll();
                    this.imgBtn.offAll();
                    this.hideenDom();
                    //确定拆除
                    Bottom.determine.on(Laya.Event.CLICK, this, this.onclick);
                    //取消拆除
                    Bottom.abolish.on(Laya.Event.CLICK, this, this.onclick);
                    this.stopren();
                    break;
                //确定拆除
                case wuling.Bottom.getInstance().determine:
                    //从数据中移除自己
                    var PlaceItem1Number = this._map.namecar.indexOf(this);
                    if (PlaceItem1Number != -1) {
                        this._map.namecar.splice(PlaceItem1Number, 1);
                    }
                    //从父容器中移除自己
                    this.removeSelf();
                    //回复坐标点
                    this.replyCoordinates();
                    //删除后台数据
                    util.HttpRequestUtil.sendRemoveBuilding("RoomObjectID=" + this.RoomObjectID);
                    //设施总数任务减
                    module.missionModule.getInstance().builNums(1);
                    /**回复nana点击事件 */
                    wuling.Bottom.getInstance().nanaOnClick();
                    this._placeItemModule.editMode = false;
                    this._map.diClick.visible = true;
                    wuling.Bottom.getInstance().demolitionBox.visible = false;
                    wuling.Bottom.getInstance().btmclick();
                    this.playren();
                    //删除宝币
                    this.jin.destroy(true);
                    break;
                //取消拆除
                case wuling.Bottom.getInstance().abolish:
                    /**回复nana点击事件 */
                    wuling.Bottom.getInstance().nanaOnClick();
                    this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                    this._placeItemModule.editMode = false;
                    this._map.diClick.visible = true;
                    wuling.Bottom.getInstance().demolitionBox.visible = false;
                    wuling.Bottom.getInstance().btmclick();
                    this.playren();
                    break;
                //选择车型
                case this.carModels:
                    /**禁止nana点击 */
                    wuling.Bottom.getInstance().nanaicon.offAll();
                    Laya.timer.clear(this, this.oncancel);
                    this.chooseGroup();
                    // var ditai:laya.ui.Dialog = new wuling.ditaiChexing;
                    // Laya.stage.addChild(ditai);
                    wuling.ditaiChexing.getInstance();
                    this.carSet();
                    //新手教程
                    if (this._map.guide == true) {
                        this._map.newclick();
                    }
                    // ditai.popup(true,true);
                    break;
                //建筑数据
                case this.checks:
                    /**禁止nana点击 */
                    if (this._map.guide == true) {
                        this.imgBtn.on(Laya.Event.CLICK, this, this.oncancel);
                    }
                    wuling.Bottom.getInstance().nanaicon.offAll();
                    Laya.timer.clear(this, this.oncancel);
                    var ewq = this.show1.skin.slice(6);
                    var mowei = ewq.slice(0, -4);
                    var vcvc = this.imgBtn.name;
                    //img 图片名字,RoomObjectID 建筑id,ObjectLevel 建筑等级,zi 自身对象,id 建筑尺寸类型 
                    module.buildingModule.getInstance().buildingImg = { img: mowei, RoomObjectID: this.RoomObjectID, ObjectLevel: this.ObjectLevel, zi: this, id: this.imgBtn.name, Jd: this.Jd };
                    var rankList = new wuling.ssInfo;
                    this.parent.addChild(rankList);
                    rankList.width = Laya.stage.width;
                    //打开页面
                    rankList.popup(false, true);
                    this.carSet();
                    break;
                default:
                    break;
            }
        };
        /**放置车型小键盘设置 */
        PlaceItem1.prototype.carSet = function () {
            Laya.timer.clear(this, this.oncancel);
            this.hideenDom();
            this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
        };
        /**3,4任务 */
        PlaceItem1.prototype.Mission = function () {
            // if(module.missionModule.getInstance().taskProgress.length>0&&module.missionModule.getInstance().taskProgress[0]["Mission5"]<5)
            // {
            // 	var carNam:number = 0;
            // 	for(var i:number=0;i<this._map.namecar.length;i++)
            // 	{
            // 	  if(this._map.namecar[i].show0.skin =="place/d100016.png"||this._map.namecar[i].show0.skin =="place/d100015.png"||this._map.namecar[i].show0.skin =="place/d100014.png")
            // 	  {
            // 		carNam++;
            // 		if(carNam==1&&module.missionModule.getInstance().taskProgress[0]["Mission4"]<1)
            // 		{
            // 			util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission4="+carNam);
            // 		}
            // 	  }
            // 	}
            // 	util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission5="+carNam);
            // }
        };
        /**暂停人物活动 */
        PlaceItem1.prototype.stopren = function () {
            wuling.map.getInstance().person1.figureStatic();
            wuling.map.getInstance().person2.figureStatic();
            wuling.map.getInstance().person3.figureStatic();
            wuling.map.getInstance().person4.figureStatic();
            wuling.map.getInstance().person5.figureStatic();
        };
        /**开始人物活动 */
        PlaceItem1.prototype.playren = function () {
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
        };
        /**隐藏操作 */
        PlaceItem1.prototype.hideenDom = function () {
            this.checks.visible = false;
            this.shift.visible = false;
            this.demolition.visible = false;
            this.carModels.visible = false;
        };
        /**显示操作 */
        PlaceItem1.prototype.showDom = function () {
            if (this._placeItemModule.editMode == false) {
                this.checks.visible = true;
                this.shift.visible = true;
                this.demolition.visible = true;
                this.carModels.visible = true;
                this.imgBtn.offAll();
                Laya.timer.clear(this, this.oncancel);
                //新手教程改
                if (this._map.guide == false) {
                    this.imgBtn.on(Laya.Event.CLICK, this, this.oncancel);
                    Laya.timer.once(2000, this, this.oncancel);
                    wuling.map.getInstance().person1.figureStatic();
                    wuling.map.getInstance().person2.figureStatic();
                    wuling.map.getInstance().person3.figureStatic();
                    wuling.map.getInstance().person4.figureStatic();
                    wuling.map.getInstance().person5.figureStatic();
                }
                else {
                    this._map.newclick();
                }
            }
        };
        PlaceItem1.prototype.oncancel = function () {
            this.hideenDom();
            this.imgBtn.offAll();
            this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
        };
        /**恢复imgBtn的点击事件 */
        PlaceItem1.prototype.imgBtnOn = function () {
            this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
            //取消
            this.cancel.on(Laya.Event.CLICK, this, this.onclick);
            //点击确定
            this.ensure.on(Laya.Event.CLICK, this, this.onclick);
            //移动
            this.shift.on(Laya.Event.CLICK, this, this.onclick);
            //拆除
            this.demolition.on(Laya.Event.CLICK, this, this.onclick);
        };
        /**移除imgBtn的点击事件 */
        PlaceItem1.prototype.onOff = function () {
            this.imgBtn.offAll();
            //取消
            this.cancel.offAll();
            //点击确定
            this.ensure.offAll();
            //移动
            this.shift.offAll();
            //拆除
            this.demolition.offAll();
        };
        /**选择对应坐标组 */
        PlaceItem1.prototype.chooseGroup = function () {
            this._placeItemModule.showStage[this._zb]["x"] = this.x;
            this._placeItemModule.showStage[this._zb]["y"] = this.y;
            var num = this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[this._zb]);
            this._placeItemModule.i = this;
        };
        /**吸附、放置条件 */
        PlaceItem1.prototype.conditions = function () {
            var taoNum = 7;
            if (module.Room.getInstance().RoomClass["RoomLevel"] >= 4 && module.Room.getInstance().RoomClass["RoomLevel"] < 9) {
                taoNum = 13;
            }
            if (module.Room.getInstance().RoomClass["RoomLevel"] >= 9 && module.Room.getInstance().RoomClass["RoomLevel"] < 14) {
                taoNum = 19;
            }
            if (module.Room.getInstance().RoomClass["RoomLevel"] >= 14) {
                taoNum = 25;
            }
            for (var i = 0; i < taoNum; i++) {
                if (this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[i]) == -1) {
                    if (this.x > this._placeItemModule.showStage[i]["x"] - 100 && this.x < this._placeItemModule.showStage[i]["x"] + 100 && this.y > this._placeItemModule.showStage[i]["y"] - 100 && this.y < this._placeItemModule.showStage[i]["y"] + 100 && this._arr[i]["a"] == true) {
                        this.x = this._placeItemModule.showStage[i]["x"];
                        this.y = this._placeItemModule.showStage[i]["y"];
                        this.off(Laya.Event.DRAG_MOVE, this, this.dragMove);
                        this.imgBtn.gray = false;
                        this.ensure.gray = false;
                        this._zb = i;
                    }
                }
            }
        };
        /**屏蔽坐标 */
        PlaceItem1.prototype.shieldingCoordinates = function () {
            this._placeItemModule.removeStage.push(this._placeItemModule.showStage[this._zb]);
        };
        /**回复坐标 */
        PlaceItem1.prototype.replyCoordinates = function () {
            var num = this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[this._zb]);
            this._placeItemModule.removeStage.splice(num, 1);
        };
        /**判断坐标点是否有坐标 */
        PlaceItem1.prototype.showhome = function () {
            this._arr = [{ a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }];
            for (var i = 0; i < this._placeItemModule.zuobiao.length; i++) {
                for (var a = 0; a < this._placeItemModule.zuobiao.length; a++) {
                    var num = this._placeItemModule.zuobiao[i].indexOf(this._placeItemModule.zbData[a]);
                    if (num >= 0) {
                        this._arr[i]["a"] = false;
                    }
                }
            }
        };
        return PlaceItem1;
    }(ui.PlaceItem1UI));
    wuling.PlaceItem1 = PlaceItem1;
})(wuling || (wuling = {}));
//# sourceMappingURL=PlaceItem1.js.map