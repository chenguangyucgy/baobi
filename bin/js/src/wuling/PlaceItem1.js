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
            //建筑数据
            _this.builObj = {};
            //金币
            _this.jin = new wuling.goldCoins;
            //是否新建金币
            _this.newjin = true;
            //动画1
            _this._mc1 = new Laya.MovieClip();
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
            //拆除
            _this.demolition.on(Laya.Event.CLICK, _this, _this.onclick);
            //车型
            _this.carModels.on(Laya.Event.CLICK, _this, _this.onclick);
            //设施类型
            _this.checks.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.showhome();
            _this.hideenDom();
            _this.imgBtn.gray = true;
            _this._map.digeBox.visible = true;
            _this._map.diClick.visible = false;
            _this.zOrder = 4000;
            _this.pivotX = 132;
            _this.pivotY = 127;
            _this.rotate.visible = false;
            //动画1
            _this._mc1.load("res/swf/cling.swf", true);
            _this.spani.addChild(_this._mc1);
            return _this;
        }
        /**mapImg上添加可点金币 */
        PlaceItem1.prototype.jings = function () {
            if (this.newjin == true) {
                this.jin.x = this.x;
                this.jin.y = this.y - 270;
                // this.jin.alpha = 0;
                this.jin.zOrder = 99999;
                wuling.map.getInstance().mapImg.addChild(this.jin);
                this.newjin = false;
            }
            this.jin.visible = true;
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
            this.on(Laya.Event.DRAG_MOVE, this, this.dragMove);
        };
        /**拖动设置*/
        PlaceItem1.prototype.onStartDrag = function (e) {
            var wu = wuling.map.getInstance();
            var dragRegion = new Laya.Rectangle(wu.width / 2, wu.height / 2, 2600, 1700);
            //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
            this.startDrag(dragRegion, true, 10);
        };
        /**监听拖动 */
        PlaceItem1.prototype.dragMove = function () {
            /**隐藏金币 */
            this.jin.alpha = 0;
            this.imgBtn.gray = true;
            //选择坐标集合
            // this.chooseGroup();
            //吸附、放置条件
            this.conditions();
        };
        /**拖动时禁止panel滑动*/
        PlaceItem1.prototype.startPanel = function (event) {
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
                        //删除金币
                        this.jin.destroy(true);
                    }
                    else {
                        this.x = this.oldzuobiaoX;
                        this.y = this.oldzuobiaoY;
                        this.zOrder = this.oldzOrder;
                        this._zb = this.oldzb;
                        this.shieldingCoordinates();
                        /**显示金币 */
                        this.jin.visible = true;
                        this.imgBtn.offAll();
                        this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                        this.cancel.visible = false;
                        this.ensure.visible = false;
                        this.imgBtn.gray = false;
                    }
                    this._map.digeBox.visible = false;
                    this._map.diClick.visible = true;
                    this._placeItemModule.editMode = false;
                    /**回复nana点击事件 */
                    wuling.Bottom.getInstance().nanaOnClick();
                    break;
                //确定
                case this.ensure:
                    /**显示金币 */
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
                            wuling.Bottom.getInstance().nanaicon.offAll();
                            this._map.newclick();
                        }
                        if (this.oldzuobiaoX == 0 && this.oldzuobiaoY == 0) {
                            //减少金币和能量
                            wuling.Top.getInstance().jin = wuling.Top.getInstance().jin - this.builObj["jin"];
                            wuling.Top.getInstance().nen = wuling.Top.getInstance().nen - this.builObj["nen"];
                            wuling.Top.getInstance().gabi();
                            wuling.Top.getInstance().nens();
                            this.spani.visible = true;
                            this._mc1.load("res/swf/cling.swf", true);
                            this._mc1.x = 0;
                            this._mc1.y = 90;
                            if (this.show0.skin == "place/d100016.png") {
                                this._mc1.y = 73;
                            }
                            this.imgBtn.visible = false;
                            this._mc1.playTo(0, 59, new Laya.Handler(this, function () {
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
                                //新手教程
                                // if(this._map.guide==true)
                                // 	{
                                // 		// this._map.nextStep();
                                // 		Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // 		Laya.timer.once(700,this,()=>{
                                // 			wuling.Bottom.getInstance().text1.text ="现在已经有地台了,那我们为地台加添一款车型吧！";
                                // 			Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // 		});
                                // 		Laya.timer.once(4400,this,()=>{
                                // 				Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // 		});
                                // 		Laya.timer.once(5100,this,()=>{
                                // 				wuling.Bottom.getInstance().text1.text ="请点击黄色处！";
                                // 				Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700,null,new Laya.Handler(this,()=>{this._map.nextStep();}));
                                // 		});
                                // 	}
                            }));
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
                //移除
                case this.demolition:
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
                    wuling.Bottom.getInstance().nanaicon.offAll();
                    Laya.timer.clear(this, this.oncancel);
                    var ewq = this.show0.skin.slice(6);
                    var mowei = ewq.slice(0, -4);
                    module.buildingModule.getInstance().buildingImg = mowei;
                    var rankList = new wuling.ssInfo;
                    this.parent.addChild(rankList);
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
        /**隐藏操作 */
        PlaceItem1.prototype.hideenDom = function () {
            this.checks.visible = false;
            this.shift.visible = false;
            this.demolition.visible = false;
            this.colorBrush.visible = false;
            this.carModels.visible = false;
        };
        /**显示操作 */
        PlaceItem1.prototype.showDom = function () {
            if (this._placeItemModule.editMode == false) {
                this.checks.visible = true;
                this.shift.visible = true;
                this.demolition.visible = true;
                this.colorBrush.visible = true;
                this.carModels.visible = true;
                this.imgBtn.offAll();
                Laya.timer.clear(this, this.oncancel);
                //新手教程改
                if (this._map.guide == false) {
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
                this.imgBtn.on(Laya.Event.CLICK, this, this.oncancel);
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
            for (var i = 0; i < this._placeItemModule.showStage.length; i++) {
                if (this._placeItemModule.removeStage.indexOf(this._placeItemModule.showStage[i]) == -1) {
                    if (this.x > this._placeItemModule.showStage[i]["x"] - 40 && this.x < this._placeItemModule.showStage[i]["x"] + 40 && this.y > this._placeItemModule.showStage[i]["y"] - 40 && this.y < this._placeItemModule.showStage[i]["y"] + 40 && this._arr[i]["a"] == true) {
                        this.x = this._placeItemModule.showStage[i]["x"];
                        this.y = this._placeItemModule.showStage[i]["y"];
                        this.imgBtn.gray = false;
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