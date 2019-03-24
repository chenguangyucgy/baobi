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
    var PlaceItem2 = /** @class */ (function (_super) {
        __extends(PlaceItem2, _super);
        function PlaceItem2() {
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
            //动画
            _this._mc = new Laya.MovieClip();
            _this._arr = [{ a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }];
            /**保存当前坐标 */
            _this.oldzuobiaoX = 0;
            _this.oldzuobiaoY = 0;
            _this.oldzOrder = 0;
            _this.oldzd = 0;
            _this.oldi = 0;
            _this.onMonitor();
            //取消---新手指引改
            if (wuling.map.getInstance().guide == false) {
                _this.cancel.on(Laya.Event.CLICK, _this, _this.onclick);
            }
            //点击确定
            _this.ensure.on(Laya.Event.CLICK, _this, _this.onclick);
            //移动
            _this.shift.on(Laya.Event.CLICK, _this, _this.onclick);
            //拆除
            _this.demolition.on(Laya.Event.CLICK, _this, _this.onclick);
            //设施数据
            _this.checks.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.showhome();
            _this.hideenDom();
            _this.imgBtn.gray = true;
            _this._map.digeBox.visible = true;
            _this._map.diClick.visible = false;
            _this.zOrder = 4000;
            _this.cancel.x = 107;
            _this.ensure.x = 30;
            _this.rotate.visible = false;
            return _this;
        }
        /**mapImg上添加可点金币 */
        PlaceItem2.prototype.jings = function () {
            if (this.newjin == true) {
                this.jin.x = this.x + 70;
                this.jin.y = this.y - 160;
                // this.jin.alpha = 0;
                this.jin.zOrder = 99999;
                wuling.map.getInstance().mapImg.addChild(this.jin);
                this.newjin = false;
            }
            this.jin.visible = true;
        };
        /**拖动 */
        PlaceItem2.prototype.onMonitor = function () {
            this.imgBtn.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
            this.imgBtn.on(Laya.Event.MOUSE_OUT, this, this.startPanel);
            this.imgBtn.on(Laya.Event.MOUSE_OVER, this, this.stopPanel);
            this.on(Laya.Event.DRAG_MOVE, this, this.dragMove);
        };
        /**拖动设置*/
        PlaceItem2.prototype.onStartDrag = function (e) {
            var wu = wuling.map.getInstance();
            var dragRegion = new Laya.Rectangle(wu.width / 2, wu.height / 2, 2600, 1700);
            //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
            this.startDrag(dragRegion, true, 10);
        };
        /**监听拖动 */
        PlaceItem2.prototype.dragMove = function () {
            /**隐藏金币 */
            this.jin.visible = false;
            this.imgBtn.gray = true;
            //选择坐标集合
            this.chooseGroup();
            //吸附、放置条件
            this.conditions();
        };
        /**拖动时禁止panel滑动*/
        PlaceItem2.prototype.startPanel = function (event) {
            var wu = wuling.map.getInstance();
            wu.pan.hScrollBar.mouseWheelEnable = true;
            wu.pan.vScrollBar.mouseWheelEnable = true;
            wu.pan.hScrollBar.touchScrollEnable = true;
            wu.pan.vScrollBar.touchScrollEnable = true;
        };
        /**拖动时禁止panel滑动*/
        PlaceItem2.prototype.stopPanel = function (event) {
            var wu = wuling.map.getInstance();
            wu.pan.hScrollBar.mouseWheelEnable = false;
            wu.pan.vScrollBar.mouseWheelEnable = false;
            wu.pan.hScrollBar.touchScrollEnable = false;
            wu.pan.vScrollBar.touchScrollEnable = false;
        };
        PlaceItem2.prototype.renderHandler = function () {
            this._mc.stop();
        };
        PlaceItem2.prototype.onclick = function (event) {
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
                        wuling.Bottom.getInstance().nanaOnClick();
                    }
                    if (this.oldzuobiaoX == 0 && this.oldzuobiaoY == 0 && this._i != 25) {
                        //从数据中移除自己
                        var PlaceItem1Number = this._map.nameObject.indexOf(this);
                        if (PlaceItem1Number != -1) {
                            this._map.nameObject.splice(PlaceItem1Number, 1);
                        }
                        //从父容器删除自己
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
                        this.imgBtn.offAll();
                        this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                        this.cancel.visible = false;
                        this.ensure.visible = false;
                        //屏蔽坐标
                        this.shieldingCoordinates();
                        /**显示金币 */
                        this.jin.visible = true;
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
                    if (this.imgBtn.gray == false) {
                        if (this.jin.jin > 0) {
                            /**显示金币 */
                            this.jin.visible = true;
                            this.jin.x = this.x + 70;
                            this.jin.y = this.y - 160;
                        }
                        else {
                            this.jin.visible = false;
                            this.jin.x = this.x + 70;
                            this.jin.y = this.y - 160;
                        }
                        /**回复nana点击事件 */
                        wuling.Bottom.getInstance().nanaOnClick();
                        this.imgBtn.offAll();
                        this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
                        this.cancel.visible = false;
                        this.ensure.visible = false;
                        // this.rotate.visible = false;
                        this._map.digeBox.visible = false;
                        this._map.diClick.visible = true;
                        this._placeItemModule.editMode = false;
                        this.zOrder = this._placeItemModule.zuobiao[this._i][this._zb]["c"];
                        // this._mc.load("res/swf/yan.swf",true); 
                        // this.aniswf.addChild(this._mc);
                        // this._mc.playTo(1,7, Laya.Handler.create(this,this.renderHandler,null,false));
                        /**如果建筑坐标变了则播放建筑盆 */
                        if (this.oldzuobiaoX == 0 && this.oldzuobiaoY == 0 && this._i != 25) {
                            //减少金币和能量
                            wuling.Top.getInstance().jin = wuling.Top.getInstance().jin - this.builObj["jin"];
                            wuling.Top.getInstance().nen = wuling.Top.getInstance().nen - this.builObj["nen"];
                            wuling.Top.getInstance().gabi();
                            wuling.Top.getInstance().nens();
                            var cling = new Laya.MovieClip;
                            /**判断为装饰品时不播放建设工棚 */
                            if (this.imgBtn.skin.slice(6, 7) == "m") {
                                cling.visible = false;
                            }
                            else {
                                cling.visible = true;
                                this.imgBtn.visible = false;
                            }
                            cling.x = this._placeItemModule.zuobiao[this._i][0]["x"] - 8;
                            cling.y = this._placeItemModule.zuobiao[this._i][0]["y"] - 190;
                            cling.zOrder = this._placeItemModule.zuobiao[this._i][0]["c"];
                            wuling.map.getInstance().mapImg.addChild(cling);
                            cling.load("res/swf/cling.swf", true);
                            /**新手教程 */
                            if (wuling.map.getInstance().guide == true) {
                                wuling.map.getInstance().nextStep();
                            }
                            cling.playTo(0, 59, new Laya.Handler(this, function () {
                                cling.destroy();
                                _this.imgBtn.visible = true;
                                if (_this._map.guide == false && _this.imgBtn.skin.slice(6, 7) != "m") {
                                    wuling.map.getInstance().person1.happy();
                                    wuling.map.getInstance().person2.happy();
                                    wuling.map.getInstance().person3.happy();
                                    wuling.map.getInstance().person4.happy();
                                    wuling.map.getInstance().person5.happy();
                                }
                                //新手教程
                                if (wuling.map.getInstance().guide == true) {
                                    // wuling.map.getInstance().nextStep();
                                    wuling.map.getInstance().newclick();
                                    // wuling.map.getInstance().nextStep();
                                    // if(this.imgBtn.skin =="place/d100013.png")
                                    // {
                                    // 	this.zOrder = 1940;
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    // 	Laya.timer.once(700,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="太厉害了！这样，顾客就不怕饿肚子了。";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(4400,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(5100,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="接下来的目标，就是把门店升到第2级吧";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(8800,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 		wuling.Bottom.getInstance().nanaView.nana_0.play();
                                    // 		wuling.Bottom.getInstance().nanaOnClick();
                                    // 		wuling.map.getInstance().nextStep();
                                    // 	}));
                                    //     });
                                    // }
                                    // if(this.imgBtn.skin =="place/m10001.png")
                                    // {
                                    // 	this.zOrder =1873;
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    // 	Laya.timer.once(700,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="不错不错，我们的门店将会越来越漂亮。";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(4400,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(5100,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="接下来，我们开始摆放第二个装饰品吧";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(8800,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar,{value:1100},1000,null,new Laya.Handler(this,()=>{
                                    // 		wuling.map.getInstance().nextStep();
                                    // 	}));
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar,{value:742},1000,null,new Laya.Handler(this,()=>{
                                    // 	}));
                                    // 	}));
                                    //     });
                                    // }
                                    // if(this.imgBtn.skin =="place/m100011.png")
                                    // {
                                    // 	this.zOrder =1903;
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    // 	Laya.timer.once(700,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="不错不错，装饰品多了之后门店更加好看了";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(4400,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(5100,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="让我们继续为门店装修吧";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(8800,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(9500,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="现在我们为门店添加一张凳子吧";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(14200,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar,{value:1120},1000,null,new Laya.Handler(this,()=>{
                                    // 		wuling.map.getInstance().nextStep();
                                    // 	}));
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar,{value:542},1000,null,new Laya.Handler(this,()=>{
                                    // 	}));
                                    // 	}));
                                    //     });
                                    // 	// Laya.timer.once(3400,this,()=>{
                                    // 	// Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 	// 	wuling.Bottom.getInstance().nanaView.nana_0.play();
                                    // 	// 	wuling.Bottom.getInstance().nanaOnClick();
                                    // 	// 	wuling.map.getInstance().guide =false;
                                    // 	// }));
                                    //     // });
                                    // }
                                    // if(this.imgBtn.skin =="place/m10002.png")
                                    // {
                                    // 	this.zOrder =1783;
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    // 	Laya.timer.once(700,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="现在门店越来越漂亮了！";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(4400,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(5100,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="让我们继续为门店添加新的物品吧";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(8800,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(9500,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="现在我们为门店添加广告牌";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(14200,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar,{value:950},1000,null,new Laya.Handler(this,()=>{
                                    // 		wuling.map.getInstance().nextStep();
                                    // 		module.mapModule.getInstance().buildinghS =1;
                                    // 	}));
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar,{value:422},1000,null,new Laya.Handler(this,()=>{
                                    // 	}));
                                    // 	}));
                                    //     });
                                    // }
                                    // if(this.imgBtn.skin =="place/m10004.png")
                                    // {
                                    // 	this.zOrder =1753;
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    // 	Laya.timer.once(700,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="现在广告牌也添加好了！！";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(4400,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(5100,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="这样就可以更好的吸引顾客来门店了。";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(8800,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(9500,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="现在我们为门店添加汽水机吧，这样顾客就可以喝到饮料了！";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(14200,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar,{value:1270},1000,null,new Laya.Handler(this,()=>{
                                    // 		wuling.map.getInstance().nextStep();
                                    // 		module.mapModule.getInstance().buildinghS =2;
                                    // 	}));
                                    // 	Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar,{value:642},1000,null,new Laya.Handler(this,()=>{
                                    // 	}));
                                    // 	}));
                                    //     });
                                    // }
                                    // if(this.imgBtn.skin =="place/d10006.png")
                                    // {
                                    // 	this.zOrder =1820;
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    // 	Laya.timer.once(700,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="这样一来汽水机也建好了！！";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(4400,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(5100,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="新手教程就到这里了！";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(8800,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                    //     });
                                    // 	Laya.timer.once(9500,this,()=>{
                                    // 	wuling.Bottom.getInstance().text1.text ="开始好好管理门店的运营吧！";
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                    //     });
                                    // 	Laya.timer.once(14200,this,()=>{
                                    // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700,null,new Laya.Handler(this,()=>{
                                    // 		wuling.Bottom.getInstance().nanaView.nana_0.play();
                                    // 		wuling.Bottom.getInstance().nanaOnClick();
                                    // 		wuling.map.getInstance().guide =false;
                                    // 		wuling.map.getInstance().pan.hScrollBar.touchScrollEnable =true;
                                    //         wuling.map.getInstance().pan.vScrollBar.touchScrollEnable =true;
                                    // 	}));
                                    //     });
                                    // }
                                }
                            }));
                            // }
                        }
                        // if(wuling.map.getInstance().guide==false)
                        // {
                        wuling.map.getInstance().person1.figureStart();
                        wuling.map.getInstance().person2.figureStart();
                        wuling.map.getInstance().person3.figureStart();
                        wuling.map.getInstance().person4.figureStart();
                        wuling.map.getInstance().person5.figureStart();
                        wuling.Bottom.getInstance().nanaOnClick();
                        // }
                        //屏蔽坐标
                        this.shieldingCoordinates();
                        //保存坐标
                        util.HttpRequestUtil.sendUpdataBuilding("RoomObjectID=" + this.RoomObjectID + "&ObjectPosX=" + this.x + "&ObjectPosY=" + this.y + "&Hierarchy=" + this.zOrder + "&Area=" + this._zb + "&IsDeleted=" + this._i + "");
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
                    this.oldzd = this._zb;
                    this._map.digeBox.visible = true;
                    this._map.diClick.visible = false;
                    this.cancel.visible = true;
                    this.ensure.visible = true;
                    // this.rotate.visible =true;
                    this.zOrder = 3001;
                    Laya.timer.clear(this, this.oncancel);
                    this._placeItemModule.editMode = true;
                    //回复坐标点
                    this.replyCoordinates();
                    this.showhome();
                    this.imgBtn.offAll();
                    this.hideenDom();
                    this.onMonitor();
                    break;
                //拆除
                case this.demolition:
                    //从数据中移除自己
                    var PlaceItem1Number = this._map.nameObject.indexOf(this);
                    if (PlaceItem1Number != -1) {
                        this._map.nameObject.splice(PlaceItem1Number, 1);
                    }
                    //移除自己
                    this.removeSelf();
                    //回复坐标点
                    this.replyCoordinates();
                    //删除后台数据
                    util.HttpRequestUtil.sendRemoveBuilding("RoomObjectID=" + this.RoomObjectID);
                    break;
                //建筑数据
                case this.checks:
                    var ewq = this.imgBtn.skin.slice(6);
                    var mowei = ewq.slice(0, -4);
                    module.buildingModule.getInstance().buildingImg = mowei;
                    var rankList = new wuling.ssInfo;
                    this.parent.addChild(rankList);
                    //打开页面
                    rankList.popup(false, true);
                    break;
                default:
                    break;
            }
        };
        /**5,6,7任务 */
        PlaceItem2.prototype.Mission = function () {
            if (module.missionModule.getInstance().taskProgress.length > 0) {
                if (module.missionModule.getInstance().taskProgress[0]["Mission6"] < 1 || module.missionModule.getInstance().taskProgress[0]["Mission7"] < 1 || module.missionModule.getInstance().taskProgress[0]["Mission8"] < 1) {
                    for (var i = 0; i < this._map.namecar.length; i++) {
                        //任务5
                        if (this._map.nameObject[i].imgBtn.skin == "place/d100013.png" || this._map.nameObject[i].imgBtn.skin == "place/d100029.png") {
                            if (module.missionModule.getInstance().taskProgress[0]["Mission6"] < 1) {
                                util.HttpRequestUtil.sendUpdataMisson("RoomID=" + module.Room.getInstance().RoomID + "&Mission6=1");
                            }
                        }
                        //任务6
                        if (this._map.nameObject[i].imgBtn.skin == "place/d10008.png" || this._map.nameObject[i].imgBtn.skin == "place/d100023.png") {
                            if (module.missionModule.getInstance().taskProgress[0]["Mission7"] < 1) {
                                util.HttpRequestUtil.sendUpdataMisson("RoomID=" + module.Room.getInstance().RoomID + "&Mission7=1");
                            }
                        }
                        //任务7
                        if (this._map.nameObject[i].imgBtn.skin == "place/d10008.png" || this._map.nameObject[i].imgBtn.skin == "place/d100023.png") {
                            if (module.missionModule.getInstance().taskProgress[0]["Mission8"] < 1) {
                                util.HttpRequestUtil.sendUpdataMisson("RoomID=" + module.Room.getInstance().RoomID + "&Mission8=1");
                            }
                        }
                    }
                }
                util.HttpRequestUtil.sendUpdataMisson("RoomID=" + module.Room.getInstance().RoomID + "&Mission5=");
            }
        };
        /**隐藏操作 */
        PlaceItem2.prototype.hideenDom = function () {
            this.checks.visible = false;
            this.shift.visible = false;
            this.demolition.visible = false;
        };
        /**显示操作 */
        PlaceItem2.prototype.showDom = function () {
            if (this._placeItemModule.editMode == false) {
                this.checks.visible = true;
                this.shift.visible = true;
                this.demolition.visible = true;
                this.imgBtn.offAll();
                Laya.timer.clear(this, this.oncancel);
                Laya.timer.once(2000, this, this.oncancel);
                this.imgBtn.on(Laya.Event.CLICK, this, this.oncancel);
                wuling.map.getInstance().person1.figureStatic();
                wuling.map.getInstance().person2.figureStatic();
                wuling.map.getInstance().person3.figureStatic();
                wuling.map.getInstance().person4.figureStatic();
                wuling.map.getInstance().person5.figureStatic();
            }
        };
        PlaceItem2.prototype.oncancel = function () {
            this.hideenDom();
            this.imgBtn.offAll();
            this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().nanaOnClick();
        };
        /**恢复imgBtn的点击事件 */
        PlaceItem2.prototype.imgBtnOn = function () {
            this.imgBtn.on(Laya.Event.CLICK, this, this.showDom);
            //移动
            this.shift.on(Laya.Event.CLICK, this, this.onclick);
            //拆除
            this.demolition.on(Laya.Event.CLICK, this, this.onclick);
        };
        /**移除imgBtn的点击事件 */
        PlaceItem2.prototype.onOff = function () {
            this.imgBtn.offAll();
            //移动
            this.shift.offAll();
            //拆除
            this.demolition.offAll();
        };
        /**选择对应坐标组 */
        PlaceItem2.prototype.chooseGroup = function () {
            //L1-------------------------------------------------------------------------------------
            if (this.x <= 1358 && this.x >= 1114 && this.y <= 1500 && this.y >= 1344) {
                this._i = 0;
                return;
            }
            if (this.x <= 1624 && this.x >= 1382 && this.y <= 1315 && this.y >= 1154) {
                this._i = 1;
                return;
            }
            if (this.x <= 1876 && this.x >= 1630 && this.y <= 1472 && this.y >= 1317) {
                this._i = 2;
                return;
            }
            if (this.x <= 2119 && this.x >= 1878 && this.y <= 1633 && this.y >= 1478) {
                this._i = 3;
                return;
            }
            if (this.x <= 1905 && this.x >= 1658 && this.y <= 1137 && this.y >= 979) {
                this._i = 4;
                return;
            }
            if (this.x <= 2154 && this.x >= 1910 && this.y <= 1297 && this.y > 1142) {
                this._i = 5;
                return;
            }
            if (this.x <= 2401 && this.x >= 2154 && this.y <= 1458 && this.y >= 1302) {
                this._i = 6;
                return;
            }
            if (this.x <= 1069 && this.x >= 824 && this.y <= 1308 && this.y >= 1154) {
                this._i = 7;
                return;
            }
            //L2-------------------------------------------------------------------------------------
            if (module.Room.getInstance().RoomClass["RoomLevel"] >= 1) {
                if (this.x <= 1345 && this.x >= 1103 && this.y <= 1131 && this.y >= 975) {
                    this._i = 8;
                    return;
                }
                if (this.x <= 1620 && this.x >= 1379 && this.y <= 954 && this.y >= 799) {
                    this._i = 9;
                    return;
                }
                if (this.x <= 2125 && this.x >= 1878 && this.y <= 1993 && this.y >= 1835) {
                    this._i = 10;
                    return;
                }
                if (this.x <= 2402 && this.x >= 2158 && this.y <= 1813 && this.y >= 1659) {
                    this._i = 11;
                    return;
                }
                if (this.x <= 2681 && this.x >= 2435 && this.y <= 1635 && this.y >= 1479) {
                    this._i = 12;
                    return;
                }
            }
            //L3-------------------------------------------------------------------------------------
            if (module.Room.getInstance().RoomClass["RoomLevel"] >= 2) {
                if (this.x <= 826 && this.x >= 580 && this.y <= 1145 && this.y >= 987) {
                    this._i = 13;
                    return;
                }
                if (this.x <= 1100 && this.x >= 857 && this.y <= 966 && this.y >= 809) {
                    this._i = 14;
                    return;
                }
                if (this.x <= 1381 && this.x >= 1137 && this.y <= 787 && this.y >= 632) {
                    this._i = 15;
                    return;
                }
                if (this.x <= 2372 && this.x >= 2130 && this.y <= 2146 && this.y >= 1992) {
                    this._i = 16;
                    return;
                }
                if (this.x <= 2653 && this.x >= 2411 && this.y <= 1971 && this.y >= 1817) {
                    this._i = 17;
                    return;
                }
                if (this.x <= 2930 && this.x >= 2686 && this.y <= 1793 && this.y >= 1637) {
                    this._i = 18;
                    return;
                }
            }
            //L4-------------------------------------------------------------------------------------
            if (module.Room.getInstance().RoomClass["RoomLevel"] == 3) {
                if (this.x <= 578 && this.x >= 334 && this.y <= 983 && this.y >= 826) {
                    this._i = 19;
                    return;
                }
                if (this.x <= 853 && this.x >= 612 && this.y <= 805 && this.y >= 650) {
                    this._i = 20;
                    return;
                }
                if (this.x <= 1133 && this.x >= 889 && this.y <= 626 && this.y >= 471) {
                    this._i = 21;
                    return;
                }
                if (this.x <= 2623 && this.x >= 2379 && this.y <= 2309 && this.y >= 2153) {
                    this._i = 22;
                    return;
                }
                if (this.x <= 2898 && this.x >= 2656 && this.y <= 2129 && this.y >= 1973) {
                    this._i = 23;
                    return;
                }
                if (this.x <= 3178 && this.x >= 2935 && this.y <= 1952 && this.y >= 1797) {
                    this._i = 24;
                    return;
                }
            }
            this._i = 25;
        };
        PlaceItem2.prototype.showhome = function () {
            this._arr = [{ a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }, { a: true }];
            for (var s = 0; s < this._placeItemModule.removeStage.length; s++) {
                var num = this._placeItemModule.showStage.indexOf(this._placeItemModule.removeStage[s]);
                if (num >= 0) {
                    this._arr[num]["a"] = false;
                }
            }
        };
        /**吸附、放置条件 */
        PlaceItem2.prototype.conditions = function () {
            for (var i = 0; i < this._placeItemModule.zuobiao[this._i].length; i++) {
                if (this.x > this._placeItemModule.zuobiao[this._i][i]["x"] - 8 && this.x < this._placeItemModule.zuobiao[this._i][i]["x"] + 8 && this.y > this._placeItemModule.zuobiao[this._i][i]["y"] - 8 && this.y < this._placeItemModule.zuobiao[this._i][i]["y"] + 8 && this._arr[this._i]["a"] == true) {
                    if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i]) == -1) {
                        if (this.imgBtn.name == "1") {
                            this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                            this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                            this.imgBtn.gray = false;
                            // this.zOrder = this._zuobiao[i]["c"];
                            this._zb = i;
                        }
                        if (this.imgBtn.name == "2" && this._placeItemModule.zuobiao[this._i][i + 4] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                        if (this.imgBtn.name == "3" && this._placeItemModule.zuobiao[this._i][i + 12] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 8]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 12]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                        if (this.imgBtn.name == "20" && this._placeItemModule.zuobiao[this._i][i + 5] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 1]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 5]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                        if (this.imgBtn.name == "21" && this._placeItemModule.zuobiao[this._i][i + 9] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 1]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 5]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 8]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 9]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                        if (this.imgBtn.name == "30" && this._placeItemModule.zuobiao[this._i][i + 14] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 1]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 2]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 5]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 6]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 8]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 9]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 10]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 12]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 13]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 14]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                        if (this.imgBtn.name == "31" && this._placeItemModule.zuobiao[this._i][i + 18] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 1]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 2]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 5]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 6]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 8]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 9]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 10]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 12]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 13]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 14]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 16]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 17]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 18]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                        if (this.imgBtn.name == "40" && this._placeItemModule.zuobiao[this._i][i + 19] != undefined && this._i != 25) {
                            if (this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 1]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 2]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 3]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 4]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 5]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 6]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 7]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 8]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 9]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 10]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 11]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 12]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 13]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 14]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 15]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 16]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 17]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 18]) == -1
                                && this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][i + 19]) == -1) {
                                this.x = this._placeItemModule.zuobiao[this._i][i]["x"];
                                this.y = this._placeItemModule.zuobiao[this._i][i]["y"];
                                this.imgBtn.gray = false;
                                // this.zOrder = this._zuobiao[i]["c"];
                                this._zb = i;
                            }
                        }
                    }
                }
            }
        };
        /**屏蔽坐标 */
        PlaceItem2.prototype.shieldingCoordinates = function () {
            if (this._zb != null) {
                //1x1
                if (this.imgBtn.name == "1") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    // this._zuobiao.splice(this._zb,1);
                }
                //1x2
                if (this.imgBtn.name == "2") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                }
                //1x4
                if (this.imgBtn.name == "3") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                }
                //2x2
                if (this.imgBtn.name == "20") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                }
                //2x3
                if (this.imgBtn.name == "21") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                }
                //3x4
                if (this.imgBtn.name == "30") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 2]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 6]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 10]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 13]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 14]);
                }
                //3x5
                if (this.imgBtn.name == "31") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 2]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 6]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 10]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 13]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 14]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 16]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 17]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 18]);
                }
                //4x5
                if (this.imgBtn.name == "40") {
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 2]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 3]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 6]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 7]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 10]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 11]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 13]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 14]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 15]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 16]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 17]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 18]);
                    this._placeItemModule.zbData.push(this._placeItemModule.zuobiao[this._i][this._zb + 19]);
                }
            }
        };
        /**回复坐标 */
        PlaceItem2.prototype.replyCoordinates = function () {
            if (this.imgBtn.name == "1") {
                var num = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num, 1);
            }
            if (this.imgBtn.name == "2") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num2, 1);
            }
            if (this.imgBtn.name == "3") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                this._placeItemModule.zbData.splice(num3, 1);
                var num4 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                this._placeItemModule.zbData.splice(num4, 1);
            }
            if (this.imgBtn.name == "20") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num3, 1);
                var num4 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                this._placeItemModule.zbData.splice(num4, 1);
            }
            if (this.imgBtn.name == "21") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num3, 1);
                var num4 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                this._placeItemModule.zbData.splice(num4, 1);
                var num5 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                this._placeItemModule.zbData.splice(num5, 1);
                var num6 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                this._placeItemModule.zbData.splice(num6, 1);
            }
            if (this.imgBtn.name == "30") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 2]);
                this._placeItemModule.zbData.splice(num3, 1);
                var num4 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num4, 1);
                var num5 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                this._placeItemModule.zbData.splice(num5, 1);
                var num6 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 6]);
                this._placeItemModule.zbData.splice(num6, 1);
                var num7 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                this._placeItemModule.zbData.splice(num7, 1);
                var num8 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                this._placeItemModule.zbData.splice(num8, 1);
                var num9 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 10]);
                this._placeItemModule.zbData.splice(num9, 1);
                var num10 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                this._placeItemModule.zbData.splice(num10, 1);
                var num11 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 13]);
                this._placeItemModule.zbData.splice(num11, 1);
                var num12 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 14]);
                this._placeItemModule.zbData.splice(num12, 1);
            }
            if (this.imgBtn.name == "31") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 2]);
                this._placeItemModule.zbData.splice(num3, 1);
                var num4 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num4, 1);
                var num5 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                this._placeItemModule.zbData.splice(num5, 1);
                var num6 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 6]);
                this._placeItemModule.zbData.splice(num6, 1);
                var num7 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                this._placeItemModule.zbData.splice(num7, 1);
                var num8 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                this._placeItemModule.zbData.splice(num8, 1);
                var num9 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 10]);
                this._placeItemModule.zbData.splice(num9, 1);
                var num10 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                this._placeItemModule.zbData.splice(num10, 1);
                var num11 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 13]);
                this._placeItemModule.zbData.splice(num11, 1);
                var num12 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 14]);
                this._placeItemModule.zbData.splice(num12, 1);
                var num13 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 16]);
                this._placeItemModule.zbData.splice(num13, 1);
                var num14 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 17]);
                this._placeItemModule.zbData.splice(num14, 1);
                var num15 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 18]);
                this._placeItemModule.zbData.splice(num15, 1);
            }
            if (this.imgBtn.name == "40") {
                var num1 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb]);
                this._placeItemModule.zbData.splice(num1, 1);
                var num2 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 1]);
                this._placeItemModule.zbData.splice(num2, 1);
                var num3 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 2]);
                this._placeItemModule.zbData.splice(num3, 1);
                var num4 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 3]);
                this._placeItemModule.zbData.splice(num4, 1);
                var num5 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 4]);
                this._placeItemModule.zbData.splice(num5, 1);
                var num6 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 5]);
                this._placeItemModule.zbData.splice(num6, 1);
                var num7 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 6]);
                this._placeItemModule.zbData.splice(num7, 1);
                var num8 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 7]);
                this._placeItemModule.zbData.splice(num8, 1);
                var num9 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 8]);
                this._placeItemModule.zbData.splice(num9, 1);
                var num10 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 9]);
                this._placeItemModule.zbData.splice(num10, 1);
                var num11 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 10]);
                this._placeItemModule.zbData.splice(num11, 1);
                var num12 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 11]);
                this._placeItemModule.zbData.splice(num12, 1);
                var num13 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 12]);
                this._placeItemModule.zbData.splice(num13, 1);
                var num14 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 13]);
                this._placeItemModule.zbData.splice(num14, 1);
                var num15 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 14]);
                this._placeItemModule.zbData.splice(num15, 1);
                var num16 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 15]);
                this._placeItemModule.zbData.splice(num16, 1);
                var num17 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 16]);
                this._placeItemModule.zbData.splice(num17, 1);
                var num18 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 17]);
                this._placeItemModule.zbData.splice(num18, 1);
                var num19 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 18]);
                this._placeItemModule.zbData.splice(num19, 1);
                var num20 = this._placeItemModule.zbData.indexOf(this._placeItemModule.zuobiao[this._i][this._zb + 19]);
                this._placeItemModule.zbData.splice(num20, 1);
            }
        };
        return PlaceItem2;
    }(ui.PlaceItem2UI));
    wuling.PlaceItem2 = PlaceItem2;
})(wuling || (wuling = {}));
//# sourceMappingURL=PlaceItem2.js.map