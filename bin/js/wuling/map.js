/**
* name
*/
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
var wuling;
(function (wuling) {
    var map = /** @class */ (function (_super) {
        __extends(map, _super);
        //------------------------------------------------------
        function map() {
            var _this = _super.call(this) || this;
            /**音乐 */
            _this.music = Laya.SoundManager;
            /**音乐路径 */
            _this.musicUrl = "res/music/music1.mp3";
            _this._mc = new Laya.MovieClip();
            /**PlaceItem1对象 */
            _this._namecar = [];
            /**PlaceItem2对象 */
            _this._nameObject = [];
            /**placeItemModule数据*/
            _this._placeItemModule = module.placeItemModule.getInstance();
            _this._ck = new Laya.MovieClip();
            _this._ckLeft = new Laya.MovieClip();
            _this._ckRight = new Laya.MovieClip();
            _this.renshu = 0;
            //前台动画
            _this.qiantai = new Laya.MovieClip();
            _this.platform = new Laya.MovieClip();
            //新手教程特效
            _this.newAni = new Laya.MovieClip;
            _this.customer = [
                { "bei": "guke/G01/clip_01bg.png", "zheng": "guke/G01/clip_01zg.png" },
                { "bei": "guke/G02/clip_02bg.png", "zheng": "guke/G02/clip_02zg.png" },
                { "bei": "guke/G03/clip_03bg.png", "zheng": "guke/G03/clip_03zg.png" },
                { "bei": "guke/G04/clip_04bg.png", "zheng": "guke/G04/clip_04zg.png" },
                { "bei": "guke/G05/clip_05bg.png", "zheng": "guke/G05/clip_05zg.png" },
                { "bei": "guke/G06/clip_06bg.png", "zheng": "guke/G06/clip_06zg.png" },
                { "bei": "guke/G07/clip_07bg.png", "zheng": "guke/G07/clip_07zg.png" },
                { "bei": "guke/G08/clip_08bg.png", "zheng": "guke/G08/clip_08zg.png" },
                { "bei": "guke/G09/clip_09bg.png", "zheng": "guke/G09/clip_09zg.png" },
                { "bei": "guke/G10/clip_10bg.png", "zheng": "guke/G10/clip_10zg.png" },
                { "bei": "guke/G11/clip_11bg.png", "zheng": "guke/G11/clip_11zg.png" }
            ];
            _this.ren = [];
            _this.guideSteps = [
                //放置车台
                { x: 500, y: 390, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 205, y: 350, radius: 50, tip: "map/ok.png", tipx: 1, tipy: 0 },
                { x: 410, y: 525, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 0, y: 0, radius: 0, tip: "map/ok.png", tipx: 0, tipy: 0 },
                //放置车
                { x: 500, y: 390, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 410, y: 460, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 205, y: 525, radius: 50, tip: "map/ok.png", tipx: 1, tipy: 0 },
                { x: 0, y: 0, radius: 0, tip: "map/ok.png", tipx: 0, tipy: 0 },
                //领取宝币
                { x: 510, y: 197, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 0, y: 0, radius: 0, tip: "map/ok.png", tipx: 0, tipy: 0 },
                //放置自助餐
                { x: 200, y: 570, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 205, y: 490, radius: 50, tip: "map/ok.png", tipx: 1, tipy: 0 },
                { x: 115, y: 717, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: 0, y: 0, radius: 0, tip: "map/ok.png", tipx: 0, tipy: 0 },
                //成就
                // { x: 100, y: 1130, radius:50, tip:"map/ok.png", tipx:0, tipy:0 },
                // { x: -130, y: 530, radius:50, tip:"map/ok.png", tipx:1, tipy:0 },
                // { x: 195, y: 350, radius:50, tip:"map/ok.png", tipx:1, tipy:0 },
                // { x: 0, y: 0, radius:0, tip:"map/ok.png", tipx:0, tipy:0 },
                //升级门店
                { x: 100, y: 1130, radius: 50, tip: "map/ok.png", tipx: 0, tipy: 0 },
                { x: -130, y: 530, radius: 50, tip: "map/ok.png", tipx: 1, tipy: 0 },
                { x: 0, y: 680, radius: 50, tip: "map/ok.png", tipx: 1, tipy: 0 },
                { x: 0, y: 0, radius: 0, tip: "map/ok.png", tipx: 0, tipy: 0 },
            ];
            _this.guideStep = 0;
            _this.guide = false;
            _this.introducePlay = true;
            /**播放介绍后可点击 */
            _this.dianPlay = false;
            _this.i = 0;
            wuling.Top.getInstance().WOnShare();
            var tishianniu = wuling.tishianniu.getInstances();
            Laya.stage.addChild(tishianniu);
            tishianniu.x = 20;
            tishianniu.y = 160;
            var nenglianganniu = wuling.nenglianganniu.getInstances();
            Laya.stage.addChild(nenglianganniu);
            nenglianganniu.right = 60;
            nenglianganniu.y = 21;
            var baobianniu = wuling.baobianniu.getInstances();
            Laya.stage.addChild(baobianniu);
            baobianniu.right = 180;
            baobianniu.y = 21;
            var manyiduanniu = wuling.manyiduanniu.getInstances();
            Laya.stage.addChild(manyiduanniu);
            manyiduanniu.right = 310;
            manyiduanniu.y = 21;
            //排行榜
            wuling.rankBtn.getInstances();
            //------------------------------------------------------
            // var tujiAni = new Laya.Animation();
            // this.mapImg.addChild(tujiAni);
            // tujiAni.x = 1000;
            // tujiAni.y = 1000;
            // tujiAni.loadImages(this.aniUrls(110));
            // this.ok.on(Laya.Event.CLICK,this,()=>{
            // 	tujiAni.play();
            // });
            //------------------------------------------------------
            if (module.Room.getInstance().RoomClass["GarmentType"] == 0) {
                wuling.Bottom.getInstance().nanaView.nanaImg.skin = "nana/nana.png";
                wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana.png";
            }
            if (module.Room.getInstance().RoomClass["GarmentType"] == 1) {
                wuling.Bottom.getInstance().nanaView.nanaImg.skin = "nana/nanaa.png";
                wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana1.png";
            }
            if (module.Room.getInstance().RoomClass["GarmentType"] == 2) {
                wuling.Bottom.getInstance().nanaView.nanaImg.skin = "nana/nanab.png";
                wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana2.png";
            }
            if (module.Room.getInstance().RoomClass["GarmentType"] == 3) {
                wuling.Bottom.getInstance().nanaView.nanaImg.skin = "nana/nanac.png";
                wuling.Bottom.getInstance().nanaicon.skin = "bottom/nana3.png";
            }
            wuling.Top.getInstance().visible = true;
            wuling.Bottom.getInstance().visible = true;
            // this.ok.on(Laya.Event.CLICK,this,this.onclick);
            _this.ok.visible = false;
            _this.frontDesk.zOrder = 1970;
            _this.platform_ball.zOrder = 2000;
            _this.onclick();
            //前台动画
            _this.frontDesk.addChild(_this.qiantai);
            if (module.Room.getInstance().RoomClass["FrontLevel"] == 3) {
                _this.qiantai.load("res/swf/frontDesk2.swf", true);
                _this.frontDesk.x += 14;
                _this.frontDesk.y = _this.frontDesk.y - 30;
            }
            else if (module.Room.getInstance().RoomClass["FrontLevel"] == 2) {
                _this.qiantai.load("res/swf/frontDesk1.swf", true);
                _this.frontDesk.y = _this.frontDesk.y - 12;
            }
            else {
                _this.qiantai.load("res/swf/frontDesk.swf", true);
            }
            _this.qiantai.playTo(0, 1);
            //互动台动画
            _this.platform_ball.addChild(_this.platform);
            if (module.Room.getInstance().RoomClass["OperationLevel"] == 3) {
                _this.platform.load("res/swf/operatingFloor2.swf", true);
            }
            else if (module.Room.getInstance().RoomClass["OperationLevel"] == 2) {
                _this.platform.load("res/swf/operatingFloor1.swf", true);
                _this.platform_ball.y = _this.platform_ball.y - 22;
                _this.platform_ball.x = _this.platform_ball.x - 22;
            }
            else {
                _this.platform.load("res/swf/platform_ball.swf", true);
            }
            // this.bottomBtn.nanaicon.on(Laya.Event.CLICK,this,this.onHender);
            //this.pan.hScrollBar.on(Laya.Event.CLICK,this,this.onHender)
            //this.pan.on(Laya.Event.MOUSE_OUT,this,this.onHender);
            //------------------------------------------------------------------------------
            //播放音乐
            var music = Math.floor(Math.random() * 3);
            if (music == 0) {
                _this.musicUrl = "res/music/music1.mp3";
            }
            if (music == 1) {
                _this.musicUrl = "res/music/music2.mp3";
            }
            if (music == 2) {
                _this.musicUrl = "res/music/music3.mp3";
            }
            //播放背景音乐
            _this.music.playMusic(_this.musicUrl, 0, new Laya.Handler(_this, _this.onComplete));
            //------------------------------------------------------------------------------
            _this.pan.vScrollBar.value = 300;
            _this.pan.vScrollBar.min = 100;
            _this.pan.vScrollBar.max = 600;
            _this.mo.visible = false;
            _this.pan.scale(1.5, 1.5);
            // var mc:Laya.MovieClip = new Laya.MovieClip();
            _this._mc.load("res/swf/di.swf", true);
            _this.men_di.addChild(_this._mc);
            _this._mc.playTo(1, 2);
            _this.men_right.zOrder = 3050;
            _this.men_left.zOrder = 3048;
            // this.diClick16.on(Laya.Event.CLICK,this,this.onHender,[14])
            // this.diClick17.on(Laya.Event.CLICK,this,this.onHender,[15])
            // this.diClick18.on(Laya.Event.CLICK,this,this.onHender,[16])
            // this.diClick19.on(Laya.Event.CLICK,this,this.onHender,[17])
            // this.diClick20.on(Laya.Event.CLICK,this,this.onHender,[18])
            // this.diClick21.on(Laya.Event.CLICK,this,this.onHender,[19])
            // this.diClick22.on(Laya.Event.CLICK,this,this.onHender,[20])
            // this.diClick23.on(Laya.Event.CLICK,this,this.onHender,[21])
            // this.diClick24.on(Laya.Event.CLICK,this,this.onHender,[22])
            // this.diClick25.on(Laya.Event.CLICK,this,this.onHender,[23])
            // this.diClick26.on(Laya.Event.CLICK,this,this.onHender,[24])
            // this.diClick27.on(Laya.Event.CLICK,this,this.onHender,[25])
            _this.diClick28.on(Laya.Event.CLICK, _this, _this.onHender, [26]);
            _this.diClick29.on(Laya.Event.CLICK, _this, _this.onHender, [27]);
            _this.diClick30.on(Laya.Event.CLICK, _this, _this.onHender, [28]);
            _this.diClick31.on(Laya.Event.CLICK, _this, _this.onHender, [29]);
            // this.diClick32.on(Laya.Event.CLICK,this,this.onHender,[30])
            // this.diClick33.on(Laya.Event.CLICK,this,this.onHender,[31])
            // this.diClick34.on(Laya.Event.CLICK,this,this.onHender,[32])
            // this.diClick35.on(Laya.Event.CLICK,this,this.onHender,[33])
            // this.diClick36.on(Laya.Event.CLICK,this,this.onHender,[34])
            // this.diClick37.on(Laya.Event.CLICK,this,this.onHender,[35])
            // this.diClick38.on(Laya.Event.CLICK,this,this.onHender,[36])
            // this.diClick39.on(Laya.Event.CLICK,this,this.onHender,[37])
            // this.diClick40.on(Laya.Event.CLICK,this,this.onHender,[38])
            // this.diClick41.on(Laya.Event.CLICK,this,this.onHender,[39])
            // this.diClick42.on(Laya.Event.CLICK,this,this.onHender,[40])
            // this.diClick43.on(Laya.Event.CLICK,this,this.onHender,[41])
            _this.diClick1.on(Laya.Event.CLICK, _this, _this.onHender, [1]);
            _this.diClick2.on(Laya.Event.CLICK, _this, _this.frontDesks);
            _this.diClick3.on(Laya.Event.CLICK, _this, _this.WorkStation);
            _this.diClick4.on(Laya.Event.CLICK, _this, _this.onHender, [2]);
            _this.diClick5.on(Laya.Event.CLICK, _this, _this.onHender, [3]);
            _this.diClick6.on(Laya.Event.CLICK, _this, _this.onHender, [4]);
            _this.diClick7.on(Laya.Event.CLICK, _this, _this.onHender, [5]);
            _this.diClick8.on(Laya.Event.CLICK, _this, _this.onHender, [6]);
            _this.diClick9.on(Laya.Event.CLICK, _this, _this.onHender, [7]);
            // this.diClick10.on(Laya.Event.CLICK,this,this.onHender,[8])
            // this.diClick11.on(Laya.Event.CLICK,this,this.onHender,[9])
            // this.diClick12.on(Laya.Event.CLICK,this,this.onHender,[10])
            // this.diClick13.on(Laya.Event.CLICK,this,this.onHender,[11])
            // this.diClick14.on(Laya.Event.CLICK,this,this.onHender,[12])
            // this.diClick15.on(Laya.Event.CLICK,this,this.onHender,[13])
            _this.clientInfoBag.on(Laya.Event.CLICK, _this, _this.vanish1);
            // Laya.timer.loop(70,this,this.ceshiFun);
            _this.ceshi.zOrder = 1000;
            // mc.play(1,false)
            // mc.scale(0.5,0.5);
            // for(var i:number=1;i<=4;i++)
            // {
            // 	this.mapImg.skin = "map/bg"+i+".jpg";
            //     this.diImg.skin = "map/di"+i+".png";
            //     this.wallBack.skin = "map/wallBack"+i+".png";
            // }
            _this.onclick();
            //桂
            // Laya.timer.once(10000, this, this.one);
            // Laya.timer.once(25000, this, this.two);
            // Laya.timer.once(40000, this, this.three);
            // Laya.timer.once(55000, this, this.four);
            // Laya.timer.once(70000, this, this.fives);
            _this._ck.load("res/swf/exit.swf", true);
            _this._ckLeft.load("res/swf/exit.swf", true);
            _this._ckRight.load("res/swf/exit.swf", true);
            _this.exit.addChild(_this._ck);
            _this.exitLeft.addChild(_this._ckLeft);
            _this.exitRight.addChild(_this._ckRight);
            // Laya.timer.once(100, this, ()=>{this._ck.stop();})
            _this._ck.playTo(28, 29);
            _this._ckLeft.playTo(28, 29);
            _this._ckRight.playTo(28, 29);
            _this._ck.zOrder = 40;
            _this._ckLeft.zOrder = 40;
            _this._ckRight.zOrder = 40;
            //----------------------------------------------
            // this.mapImg.skin = "map/bg4.jpg";
            // this.diImg.skin = "map/di4.png";
            // this.wallBack.skin = "map/wallBack4.png";
            Laya.timer.once(300, _this, _this.aaa);
            if (module.Room.getInstance().message.length == 0) {
                _this.xishou();
                _this.guide = true;
                // wuling.Top.getInstance().jin=3000;
                util.HttpRequestUtil.Modifybaobi(3000);
                wuling.Top.getInstance().nen = 99;
                // wuling.Top.getInstance().gabi();
                wuling.Top.getInstance().nens();
            }
            if (_this.guide == false) {
                _this.persinNew();
                //活动提示
                wuling.huoDong.getInstances();
                //提示任务未完成
                if (module.missionModule.getInstance().missionComplete() == false) {
                    // wuling.Bottom.getInstance().boximg.visible = true;
                    // //添加boximg点击事件
                    // wuling.Bottom.getInstance().onMissionPrompt();
                    // wuling.Bottom.getInstance().boxText.text = "您还有任务未完成，请点击任务提示按钮查看！！";
                }
            }
            return _this;
        }
        Object.defineProperty(map.prototype, "namecar", {
            /**获取车台对象 */
            get: function () {
                return this._namecar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(map.prototype, "nameObject", {
            /**获取建筑对象 */
            get: function () {
                return this._nameObject;
            },
            enumerable: true,
            configurable: true
        });
        /**设置车台对象 */
        // public set namecar(content:Array<wuling.PlaceItem1>)
        // {
        // 	this._namecar = content;
        // }clientInfo
        map.prototype.arrPla = function (Item) {
            this._namecar.push(Item);
        };
        map.prototype.arrPla2 = function (Item) {
            this._nameObject.push(Item);
        };
        /**动画资源 */
        //------------------------------------------------------
        map.prototype.aniUrls = function (length) {
            var urls = [];
            for (var i = 1; i < length; i++) {
                //动画资源路径要和动画图集打包前的资源命名对应起来
                urls.push("d100012/" + i + ".png");
            }
            return urls;
        };
        /**前台数据显示 */
        map.prototype.frontDesks = function () {
            var frontDesk = "frontDesk";
            if (module.Room.getInstance().RoomClass["FrontLevel"] == 2) {
                frontDesk = "frontDesk1";
            }
            if (module.Room.getInstance().RoomClass["FrontLevel"] == 3) {
                frontDesk = "frontDesk2";
            }
            //img 图片名字,ObjectLevel 建筑等级,id 建筑尺寸类型 
            module.buildingModule.getInstance().buildingImg = { img: frontDesk, ObjectLevel: module.Room.getInstance().RoomClass["FrontLevel"], id: "fixed", Jd: 0 };
            var rankList = new wuling.ssInfo;
            Laya.stage.addChild(rankList);
            rankList.width = Laya.stage.width;
            //打开页面
            rankList.popup(false, true);
        };
        /**互动台数据显示 */
        map.prototype.WorkStation = function () {
            var Operation = "Operation";
            if (module.Room.getInstance().RoomClass["OperationLevel"] == 2) {
                Operation = "Operation1";
            }
            if (module.Room.getInstance().RoomClass["OperationLevel"] == 3) {
                Operation = "Operation2";
            }
            //img 图片名字,ObjectLevel 建筑等级,id 建筑尺寸类型 
            module.buildingModule.getInstance().buildingImg = { img: Operation, ObjectLevel: module.Room.getInstance().RoomClass["OperationLevel"], id: "fixed1", Jd: 0 };
            var rankList = new wuling.ssInfo;
            Laya.stage.addChild(rankList);
            rankList.width = Laya.stage.width;
            //打开页面
            rankList.popup(false, true);
        };
        /**添加客户 */
        map.prototype.persinNew = function () {
            this.person1 = new wuling.person;
            this.mapImg.addChild(this.person1);
            this.ren.push(this.person1);
            this.person2 = new wuling.person;
            this.mapImg.addChild(this.person2);
            this.ren.push(this.person2);
            this.person3 = new wuling.person;
            this.mapImg.addChild(this.person3);
            this.ren.push(this.person3);
            this.person4 = new wuling.person;
            this.mapImg.addChild(this.person4);
            this.ren.push(this.person4);
            this.person5 = new wuling.person;
            this.mapImg.addChild(this.person5);
            this.ren.push(this.person5);
            //设为已添加人物
            module.personModule.getInstance().addFigure = true;
            for (var g = 1; g < 6; g++) {
                this["person" + g].on(Laya.Event.DOUBLE_CLICK, this, this.showInfo, [g]);
            }
        };
        /**镜头跟随人物 */
        map.prototype.follow = function () {
            wuling.map.getInstance().pan.hScrollBar.value = this.person1.x / 1.50 - 250;
            wuling.map.getInstance().pan.vScrollBar.value = this.person1.y / 1.50 - 450;
        };
        /**新手任务添加客户 */
        map.prototype.newTaskPersin = function () {
            var _this = this;
            this.person1 = new wuling.person;
            this.mapImg.addChild(this.person1);
            this.ren.push(this.person1);
            //跟随人物
            Laya.timer.loop(10, this, this.follow);
            this.person1.on(Laya.Event.CLICK, this, this.showInfo, [1]);
            Laya.timer.once(7000, this, function () {
                Laya.timer.once(2000, _this, function () {
                    _this.person2 = new wuling.person;
                    _this.mapImg.addChild(_this.person2);
                    _this.ren.push(_this.person2);
                    _this.person2.on(Laya.Event.DOUBLE_CLICK, _this, _this.showInfo, [2]);
                });
                Laya.timer.once(4000, _this, function () {
                    _this.person3 = new wuling.person;
                    _this.mapImg.addChild(_this.person3);
                    _this.ren.push(_this.person3);
                    _this.person3.on(Laya.Event.DOUBLE_CLICK, _this, _this.showInfo, [3]);
                });
                Laya.timer.once(6000, _this, function () {
                    _this.person4 = new wuling.person;
                    _this.mapImg.addChild(_this.person4);
                    _this.ren.push(_this.person4);
                    _this.person4.on(Laya.Event.DOUBLE_CLICK, _this, _this.showInfo, [4]);
                });
                Laya.timer.once(8000, _this, function () {
                    _this.person5 = new wuling.person;
                    _this.mapImg.addChild(_this.person5);
                    _this.ren.push(_this.person5);
                    //设为已添加人物
                    module.personModule.getInstance().addFigure = true;
                    _this.person5.on(Laya.Event.DOUBLE_CLICK, _this, _this.showInfo, [5]);
                });
            });
        };
        //新手教程
        map.prototype.xishou = function () {
            var _this = this;
            Laya.timer.once(2000, this, function () {
                wuling.Bottom.getInstance().zOrder = 999999;
                wuling.Bottom.getInstance().nanaicon.offAll();
                // wuling.Bottom.getInstance().nanaicon.visible =false;
                // wuling.Bottom.getInstance().nanaView.visible = true;
                // wuling.Bottom.getInstance().nanaView.nana.play();
                _this.pan.hScrollBar.touchScrollEnable = false;
                _this.pan.vScrollBar.touchScrollEnable = false;
                // Laya.timer.once(300,this,()=>{
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                // });
                // Laya.timer.once(4000,this,()=>{
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                // });
                // Laya.timer.once(4700,this,()=>{
                // 	wuling.Bottom.getInstance().text1.text ="门店空荡荡，那可不行";
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                // });
                // Laya.timer.once(8400,this,()=>{
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                // });
                // Laya.timer.once(9100,this,()=>{
                // 	wuling.Bottom.getInstance().text1.text ="这样吧，我们为门店加添一个地台吧！";
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                // });
                // Laya.timer.once(11800,this,()=>{
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                // });
                // Laya.timer.once(12300,this,()=>{
                // 	wuling.Bottom.getInstance().text1.text ="请点击黄色处！";
                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                // 	this.nextStep();
                // });
            });
            // 绘制一个蓝色方块，不被抠图
            // var gameContainer:Laya.Sprite = new Laya.Sprite();
            // gameContainer.loadImage("map/ok.png");
            // Laya.stage.addChild(gameContainer);
            // gameContainer.zOrder=999998;
            // 引导所在容器
            this.guideContainer = new Laya.Sprite();
            Laya.stage.addChild(this.guideContainer);
            this.guideContainer.zOrder = 999999;
            Laya.timer.once(2000, this, this.newTop);
            // 设置容器为画布缓存
            // this.guideContainer.cacheAs = "normal";
            Laya.stage.addChild(this.guideContainer);
            // gameContainer.on("click", this, this.nextStep);
            //绘制遮罩区，含透明度，可见游戏背景
            var maskArea = new Laya.Sprite();
            maskArea.alpha = 0;
            maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
            this.guideContainer.addChild(maskArea);
            //绘制一个圆形区域，利用叠加模式，从遮罩区域抠出可交互区
            this.interactionArea = new Laya.Sprite();
            //设置叠加模式
            // this.interactionArea.blendMode = "destination-out";
            this.interactionArea.alpha = 0;
            this.newAni.load("res/swf/yanshi.swf", true);
            this.newAni.alpha = 0;
            this.guideContainer.addChild(this.newAni);
            this.guideContainer.addChild(this.interactionArea);
            this.hitArea1 = new Laya.HitArea();
            this.hitArea1.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
            this.guideContainer.hitArea = this.hitArea1;
            this.guideContainer.mouseEnabled = true;
            // this.tipContainer = new Laya.Sprite();
            // Laya.stage.addChild(this.tipContainer);
        };
        /**新手教程开头 */
        map.prototype.newTop = function () {
            this.newclick();
            // this.guideContainer.on(Laya.Event.CLICK,this,this.newclick);
            Laya.timer.clear(this, this.newTop);
        };
        /**新手教程点击 */
        map.prototype.newclick = function () {
            var _this = this;
            //底部动画
            wuling.Bottom.getInstance().sanjiaoAni.visible = true;
            var newNum = module.newTask.getInstance().newNum;
            this.guideContainer.offAll();
            var dialogues = module.newTask.dialogues;
            if (newNum == 0) {
                wuling.Bottom.getInstance().nanaicon.visible = false;
                wuling.Bottom.getInstance().nanatext.visible = false;
                wuling.Bottom.getInstance().nanaView.visible = true;
                wuling.Bottom.getInstance().nanaView.nana.play();
            }
            wuling.Bottom.getInstance().text1.text = dialogues[newNum]["text"];
            wuling.Bottom.getInstance().text1.alpha = 0;
            if (newNum == 23) {
                wuling.map.getInstance().newTaskPersin();
            }
            if (newNum == 34) {
                wuling.Bottom.getInstance().nanaView.nana_0.play();
                wuling.Bottom.getInstance().nanaOnClick();
                //底部动画
                wuling.Bottom.getInstance().sanjiaoAni.visible = false;
            }
            // if(newNum==39){Laya.Dialog.closeAll();}
            if (newNum == 10 || newNum == 11 || newNum == 12 || newNum == 13 || newNum == 14 || newNum == 15 || newNum == 16 || newNum == 17 || newNum == 25 || newNum == 30 || newNum == 31 || newNum == 32 || newNum == 34 || newNum == 37) {
                this.nextStep();
            }
            ;
            Laya.Tween.to(wuling.Bottom.getInstance().text1, { alpha: 1 }, 1400, null, new Laya.Handler(this, function () {
                if (newNum == 7 || newNum == 10 || newNum == 11 || newNum == 12 || newNum == 14 || newNum == 15 || newNum == 16 || newNum == 23 || newNum == 25 || newNum == 30 || newNum == 31 || newNum == 32 || newNum == 34 || newNum == 35 || newNum == 36) { }
                else {
                    if (newNum == 13) {
                        Laya.timer.once(19 * 100, _this, function () {
                            _this.guiClick();
                        });
                    }
                    else {
                        _this.guiClick();
                    }
                }
                /** */
                if (newNum == 7 && _this.dianPlay == true) {
                    //添加点击事件
                    _this.guiClick();
                }
                if (newNum == 40) {
                    //活动提示
                    wuling.huoDong.getInstances();
                    _this.guideContainer.removeSelf();
                    wuling.map.getInstance().guide = false;
                    wuling.map.getInstance().pan.hScrollBar.touchScrollEnable = true;
                    wuling.map.getInstance().pan.vScrollBar.touchScrollEnable = true;
                    wuling.Bottom.getInstance().renwu.visible = true;
                    Laya.timer.once(3000, _this, function () {
                        Laya.Tween.to(wuling.Bottom.getInstance().text1, { alpha: 0 }, 700, null, new Laya.Handler(_this, function () {
                            wuling.Bottom.getInstance().nanaView.nana_0.play();
                            //底部动画
                            wuling.Bottom.getInstance().sanjiaoAni.visible = false;
                            wuling.Bottom.getInstance().nanaOnClick();
                        }));
                    });
                }
            }));
            //播放介绍
            if (newNum == 4 && this.introducePlay == true) {
                this.introducePlay = false;
                // var introduceAni:Laya.Animation =new Laya.Animation();
                // introduceAni.loadAnimation("introduceAni.ani");
                // introduceAni.play();
                var introduceAni = wuling.introduce.getInstancess();
                wuling.Bottom.getInstance().text1.text = "来看看接下来要做什么吧？";
                // introduceAni.pivotX=-355;
                // introduceAni.pivotY=-632;
                // Laya.timer.once(31000,this,()=>{
                // 	introduceAni.stop();
                // 	introduceAni.removeSelf();
                // 	this.newclick();
                // });
                // introduceAni.x = -420;
                return;
            }
            module.newTask.getInstance().newNum = newNum + 1;
        };
        /**guideContainer点击事件 */
        map.prototype.guiClick = function () {
            this.guideContainer.on(Laya.Event.CLICK, this, this.newclick);
        };
        /**改变新手教程位置*/
        map.prototype.nextStep = function () {
            if (this.guideStep == this.guideSteps.length) {
                Laya.stage.removeChild(this.guideContainer);
                // Laya.stage.removeChild(this.tipContainer);
            }
            else {
                var step = this.guideSteps[this.guideStep++];
                var wuw = Laya.stage.width;
                var wuh = Laya.stage.height;
                var xnum = Laya.stage.width / 2 - step.x;
                if (step.tipx == 1) {
                    step.x = xnum;
                }
                this.hitArea1.unHit.clear();
                this.hitArea1.unHit.drawCircle(step.x, step.y, step.radius, "#000000");
                this.interactionArea.graphics.clear();
                this.interactionArea.graphics.drawCircle(step.x, step.y, step.radius, "#EEEE00");
                this.newAni.x = step.x - (step.radius * 2);
                this.newAni.y = step.y - (step.radius * 2);
                this.newAni.scale(step.radius / 100, step.radius / 100);
                this.newAni.alpha = 1;
                // this.tipContainer.graphics.clear();
                // this.tipContainer.loadImage(step.tip,0,0,0,0);
                // this.tipContainer.pos(step.tipx, step.tipy);
            }
        };
        /**登录时显示的位置 */
        map.prototype.aaa = function () {
            this.pan.hScrollBar.value = 752;
            this.pan.vScrollBar.value = 612;
        };
        map.prototype.onComplete = function () {
        };
        map.getInstance = function () {
            if (this._instance == null) {
                this._instance = new map;
                // this._instance.width = Laya.stage.width;
                Laya.stage.addChild(this._instance);
                var buildingModule = module.buildingModule.getInstance();
                module.mapModule.getInstance().loadingMap = true;
                buildingModule.reduction(buildingModule.buildingAll);
            }
            return this._instance;
        };
        map.prototype.onHender = function (num, event) {
            this._diClick = num;
            var building = new wuling.building;
            this.parent.addChild(building);
            building.width = Laya.stage.width;
            //打开页面
            building.popup(false, true);
            // switch (event.currentTarget) {
            // 	case this.bottomBtn.nanaicon:
            // 		var menu:laya.ui.Dialog = new wuling.menu;
            // 		var a = menu.zOrder;
            // 		this.addChild(menu);
            // 		this.mo.visible = true;
            // 		menu.show();
            // 		menu.zOrder = 1;
            // 		break;
            // 	default:
            // 		break;
            // }
        };
        map.prototype.onclick = function () {
            //更改地图
            // this.i++;
            var RoomClass = module.Room.getInstance().RoomClass;
            this.diImg.skin = RoomClass["RoomStyle"];
            if (RoomClass["RoomStyle"] >= 0) {
                this.diImg.skin = "map/di1.png";
            }
            if (RoomClass["RoomLevel"] >= 0 && RoomClass["RoomLevel"] < 4) {
                module.personModule.getInstance().luoNum = 2;
                this.mapImg.skin = "map/bg1.jpg";
                this.wallBack.skin = "map/wallBack1.png";
                this.exitLeft.alpha = 0;
                this.exitRight.alpha = 0;
                this._placeItemModule.zuobiao[25] = this._placeItemModule.ArrLv1;
                this.diImg.x = 940;
                this.diImg.y = 919;
                this.wallImg.x = 908;
                this.wallImg.y = 766;
                this.wallBack.x = 1970;
                this.wallBack.y = 780;
                this.dige10.visible = false;
                this.dige11.visible = false;
                this.dige12.visible = false;
                this.dige13.visible = false;
                this.dige14.visible = false;
                this.dige15.visible = false;
                this.dige16.visible = false;
                this.dige17.visible = false;
                this.dige18.visible = false;
                this.dige19.visible = false;
                this.dige20.visible = false;
                this.dige21.visible = false;
                this.dige22.visible = false;
                this.dige23.visible = false;
                this.dige24.visible = false;
                this.dige25.visible = false;
                this.dige26.visible = false;
                this.dige27.visible = false;
                this.digeLv41.visible = false;
                this.digeLv42.visible = false;
                this.digeLv43.visible = false;
                this.digeLv44.visible = false;
                this.digeLv45.visible = false;
                this.digeLv46.visible = false;
                this.digeLv31.visible = false;
                this.digeLv32.visible = false;
                this.digeLv21.visible = false;
                this.digeLv22.visible = false;
                this.digeLv23.visible = false;
                this.digeLv24.visible = false;
            }
            if (RoomClass["RoomLevel"] >= 4 && RoomClass["RoomLevel"] < 9) {
                module.personModule.getInstance().luoNum = 4;
                this.mapImg.skin = "map/bg2.jpg";
                this.wallBack.skin = "map/wallBack2.png";
                this.exitLeft.alpha = 0;
                this.exitRight.alpha = 0;
                this._placeItemModule.zuobiao[25] = this._placeItemModule.ArrLv2;
                this.diImg.x = 658;
                this.diImg.y = 738;
                this.wallImg.x = 626;
                this.wallImg.y = 576;
                this.wallBack.x = 1680;
                this.wallBack.y = 598;
                this.dige10.visible = true;
                this.dige11.visible = true;
                this.dige12.visible = true;
                this.dige13.visible = true;
                this.dige14.visible = true;
                this.dige15.visible = true;
                this.dige16.visible = false;
                this.dige17.visible = false;
                this.dige18.visible = false;
                this.dige19.visible = false;
                this.dige20.visible = false;
                this.dige21.visible = false;
                this.dige22.visible = false;
                this.dige23.visible = false;
                this.dige24.visible = false;
                this.dige25.visible = false;
                this.dige26.visible = false;
                this.dige27.visible = false;
                this.digeLv41.visible = false;
                this.digeLv42.visible = false;
                this.digeLv43.visible = false;
                this.digeLv44.visible = false;
                this.digeLv45.visible = false;
                this.digeLv46.visible = false;
                this.digeLv31.visible = false;
                this.digeLv32.visible = false;
                this.digeLv21.visible = true;
                this.digeLv22.visible = true;
                this.digeLv23.visible = true;
                this.digeLv24.visible = true;
                this.diClick10.on(Laya.Event.CLICK, this, this.onHender, [8]);
                this.diClick11.on(Laya.Event.CLICK, this, this.onHender, [9]);
                this.diClick12.on(Laya.Event.CLICK, this, this.onHender, [10]);
                this.diClick13.on(Laya.Event.CLICK, this, this.onHender, [11]);
                this.diClick14.on(Laya.Event.CLICK, this, this.onHender, [12]);
                this.diClick15.on(Laya.Event.CLICK, this, this.onHender, [13]);
                this.diClick38.on(Laya.Event.CLICK, this, this.onHender, [36]);
                this.diClick39.on(Laya.Event.CLICK, this, this.onHender, [37]);
                this.diClick40.on(Laya.Event.CLICK, this, this.onHender, [38]);
                this.diClick41.on(Laya.Event.CLICK, this, this.onHender, [39]);
            }
            if (RoomClass["RoomLevel"] >= 9 && RoomClass["RoomLevel"] < 14) {
                module.personModule.getInstance().luoNum = 5;
                this.mapImg.skin = "map/bg3.jpg";
                this.wallBack.skin = "map/wallBack3.png";
                this.exitLeft.alpha = 1;
                this.exitRight.alpha = 1;
                this._placeItemModule.zuobiao[25] = this._placeItemModule.ArrLv3;
                this.diImg.x = 405;
                this.diImg.y = 572;
                this.wallImg.x = 384;
                this.wallImg.y = 418;
                this.wallBack.x = 1443;
                this.wallBack.y = 430;
                this.dige10.visible = true;
                this.dige11.visible = true;
                this.dige12.visible = true;
                this.dige13.visible = true;
                this.dige14.visible = true;
                this.dige15.visible = true;
                this.dige16.visible = true;
                this.dige17.visible = true;
                this.dige18.visible = true;
                this.dige19.visible = true;
                this.dige20.visible = true;
                this.dige21.visible = true;
                this.dige22.visible = false;
                this.dige23.visible = false;
                this.dige24.visible = false;
                this.dige25.visible = false;
                this.dige26.visible = false;
                this.dige27.visible = false;
                this.digeLv41.visible = false;
                this.digeLv42.visible = false;
                this.digeLv43.visible = false;
                this.digeLv44.visible = true;
                this.digeLv45.visible = true;
                this.digeLv46.visible = false;
                this.digeLv31.visible = true;
                this.digeLv32.visible = true;
                this.digeLv21.visible = false;
                this.digeLv22.visible = false;
                this.digeLv23.visible = false;
                this.digeLv24.visible = false;
                this.diClick10.on(Laya.Event.CLICK, this, this.onHender, [8]);
                this.diClick11.on(Laya.Event.CLICK, this, this.onHender, [9]);
                this.diClick12.on(Laya.Event.CLICK, this, this.onHender, [10]);
                this.diClick13.on(Laya.Event.CLICK, this, this.onHender, [11]);
                this.diClick14.on(Laya.Event.CLICK, this, this.onHender, [12]);
                this.diClick15.on(Laya.Event.CLICK, this, this.onHender, [13]);
                this.diClick16.on(Laya.Event.CLICK, this, this.onHender, [14]);
                this.diClick17.on(Laya.Event.CLICK, this, this.onHender, [15]);
                this.diClick18.on(Laya.Event.CLICK, this, this.onHender, [16]);
                this.diClick19.on(Laya.Event.CLICK, this, this.onHender, [17]);
                this.diClick20.on(Laya.Event.CLICK, this, this.onHender, [18]);
                this.diClick21.on(Laya.Event.CLICK, this, this.onHender, [19]);
                this.diClick35.on(Laya.Event.CLICK, this, this.onHender, [33]);
                this.diClick36.on(Laya.Event.CLICK, this, this.onHender, [34]);
                this.diClick42.on(Laya.Event.CLICK, this, this.onHender, [40]);
                this.diClick43.on(Laya.Event.CLICK, this, this.onHender, [41]);
                this.diClick38.off(Laya.Event.CLICK, this, this.onHender);
                this.diClick39.off(Laya.Event.CLICK, this, this.onHender);
                this.diClick40.off(Laya.Event.CLICK, this, this.onHender);
                this.diClick41.off(Laya.Event.CLICK, this, this.onHender);
            }
            if (RoomClass["RoomLevel"] >= 14) {
                module.personModule.getInstance().luoNum = 6;
                this.mapImg.skin = "map/bg4.jpg";
                this.wallBack.skin = "map/wallBack4.png";
                this.exitLeft.alpha = 1;
                this.exitRight.alpha = 1;
                this._placeItemModule.zuobiao[25] = this._placeItemModule.ArrLv4;
                this.diImg.x = 159;
                this.diImg.y = 412;
                this.wallImg.x = 133;
                this.wallImg.y = 257;
                this.wallBack.x = 1193;
                this.wallBack.y = 270;
                this.dige22.visible = true;
                this.dige23.visible = true;
                this.dige24.visible = true;
                this.dige25.visible = true;
                this.dige26.visible = true;
                this.dige27.visible = true;
                this.digeLv41.visible = true;
                this.digeLv42.visible = true;
                this.digeLv43.visible = true;
                this.digeLv44.visible = true;
                this.digeLv45.visible = true;
                this.digeLv46.visible = true;
                this.digeLv31.visible = false;
                this.digeLv32.visible = false;
                this.digeLv21.visible = false;
                this.digeLv22.visible = false;
                this.digeLv23.visible = false;
                this.digeLv24.visible = false;
                this.diClick10.on(Laya.Event.CLICK, this, this.onHender, [8]);
                this.diClick12.on(Laya.Event.CLICK, this, this.onHender, [10]);
                this.diClick11.on(Laya.Event.CLICK, this, this.onHender, [9]);
                this.diClick13.on(Laya.Event.CLICK, this, this.onHender, [11]);
                this.diClick14.on(Laya.Event.CLICK, this, this.onHender, [12]);
                this.diClick15.on(Laya.Event.CLICK, this, this.onHender, [13]);
                this.diClick16.on(Laya.Event.CLICK, this, this.onHender, [14]);
                this.diClick17.on(Laya.Event.CLICK, this, this.onHender, [15]);
                this.diClick18.on(Laya.Event.CLICK, this, this.onHender, [16]);
                this.diClick19.on(Laya.Event.CLICK, this, this.onHender, [17]);
                this.diClick20.on(Laya.Event.CLICK, this, this.onHender, [18]);
                this.diClick21.on(Laya.Event.CLICK, this, this.onHender, [19]);
                this.diClick22.on(Laya.Event.CLICK, this, this.onHender, [20]);
                this.diClick23.on(Laya.Event.CLICK, this, this.onHender, [21]);
                this.diClick24.on(Laya.Event.CLICK, this, this.onHender, [22]);
                this.diClick25.on(Laya.Event.CLICK, this, this.onHender, [23]);
                this.diClick26.on(Laya.Event.CLICK, this, this.onHender, [24]);
                this.diClick27.on(Laya.Event.CLICK, this, this.onHender, [25]);
                this.diClick28.on(Laya.Event.CLICK, this, this.onHender, [26]);
                this.diClick32.on(Laya.Event.CLICK, this, this.onHender, [30]);
                this.diClick33.on(Laya.Event.CLICK, this, this.onHender, [31]);
                this.diClick34.on(Laya.Event.CLICK, this, this.onHender, [32]);
                this.diClick35.on(Laya.Event.CLICK, this, this.onHender, [33]);
                this.diClick36.on(Laya.Event.CLICK, this, this.onHender, [34]);
                this.diClick37.on(Laya.Event.CLICK, this, this.onHender, [35]);
                this.diClick42.off(Laya.Event.CLICK, this, this.onHender);
                this.diClick43.off(Laya.Event.CLICK, this, this.onHender);
            }
        };
        /**宝币1 */
        map.prototype.goldCoins1 = function (item) {
            var goldCoins = new wuling.goldCoins;
            goldCoins.x = item.x - 50;
            goldCoins.y = item.y - 250;
            goldCoins.zOrder = 10000;
            wuling.map.getInstance().mapImg.addChild(goldCoins);
        };
        /**宝币2 */
        map.prototype.goldCoins2 = function (item2) {
            var goldCoins = new wuling.goldCoins;
            goldCoins.x = item2.x + 60;
            goldCoins.y = item2.y - 130;
            goldCoins.zOrder = 10000;
            wuling.map.getInstance().mapImg.addChild(goldCoins);
        };
        map.prototype.gkxing = function (x) {
            for (var j = 1; j < 6; j++) {
                this.clientInfo["xing" + j].alpha = 0;
            }
            // this.clientInfo.xing1.alpha = 0;
            for (var i = 1; i <= x; i++) {
                this.clientInfo["xing" + i].alpha = 1;
            }
        };
        map.prototype.perText = function (str) {
            switch (str) {
                case "details/B.png":
                    this.clientInfo.duib.text = module.personText.getInstance().arr[0][Math.floor(Math.random() * 3 + 0)];
                    break;
                case "details/A.png":
                    this.clientInfo.duib.text = module.personText.getInstance().arr[1][Math.floor(Math.random() * 3 + 0)];
                    break;
                case "details/S.png":
                    this.clientInfo.duib.text = module.personText.getInstance().arr[2][Math.floor(Math.random() * 3 + 0)];
                    break;
                case "details/SS.png":
                    this.clientInfo.duib.text = module.personText.getInstance().arr[3][Math.floor(Math.random() * 3 + 0)];
                    break;
            }
        };
        //桂
        map.prototype.showInfo = function (index, event) {
            var level = ["details/SS.png", "details/S.png", "details/A.png", "details/B.png"];
            switch (event.currentTarget) {
                case this.person1:
                    this.clientInfo.dengji.skin = this.person1.renlv;
                    this.perText(this.person1.renlv);
                    this.clientInfo.oddsFen(this.person1.renlv, this.person1.odd);
                    this.clientInfo.personName.text = this.person1.personName;
                    this.gkxing(this.person1.xing);
                    break;
                case this.person2:
                    this.clientInfo.dengji.skin = this.person2.renlv;
                    this.perText(this.person2.renlv);
                    this.clientInfo.oddsFen(this.person2.renlv, this.person2.odd);
                    this.clientInfo.personName.text = this.person2.personName;
                    this.gkxing(this.person2.xing);
                    break;
                case this.person3:
                    this.clientInfo.dengji.skin = this.person3.renlv;
                    this.perText(this.person3.renlv);
                    this.clientInfo.oddsFen(this.person3.renlv, this.person3.odd);
                    this.clientInfo.personName.text = this.person3.personName;
                    this.gkxing(this.person3.xing);
                    break;
                case this.person4:
                    this.clientInfo.dengji.skin = this.person4.renlv;
                    this.perText(this.person4.renlv);
                    this.clientInfo.oddsFen(this.person4.renlv, this.person4.odd);
                    this.clientInfo.personName.text = this.person4.personName;
                    this.gkxing(this.person4.xing);
                    break;
                case this.person5:
                    this.clientInfo.dengji.skin = this.person5.renlv;
                    this.perText(this.person5.renlv);
                    this.clientInfo.oddsFen(this.person5.renlv, this.person5.odd);
                    this.clientInfo.personName.text = this.person5.personName;
                    this.gkxing(this.person5.xing);
                    break;
            }
            switch (index) {
                case 1:
                    // this.clientInfo.dengji.skin = level[0];
                    this.clientInfo.renIcon.skin = "guke/G" + this.person1.persons.skin.slice(6, 8) + "/clip_" + this.person1.persons.skin.slice(6, 8) + "zd.png";
                    break;
                case 2:
                    // this.clientInfo.dengji.skin = level[1];
                    this.clientInfo.renIcon.skin = "guke/G" + this.person2.persons.skin.slice(6, 8) + "/clip_" + this.person2.persons.skin.slice(6, 8) + "zd.png";
                    break;
                case 3:
                    // this.clientInfo.dengji.skin = level[2];
                    this.clientInfo.renIcon.skin = "guke/G" + this.person3.persons.skin.slice(6, 8) + "/clip_" + this.person3.persons.skin.slice(6, 8) + "zd.png";
                    break;
                case 4:
                    // this.clientInfo.dengji.skin = level[3];
                    this.clientInfo.renIcon.skin = "guke/G" + this.person4.persons.skin.slice(6, 8) + "/clip_" + this.person4.persons.skin.slice(6, 8) + "zd.png";
                    break;
                default:
                    // this.clientInfo.dengji.skin = level[3];
                    this.clientInfo.renIcon.skin = "guke/G" + this.person5.persons.skin.slice(6, 8) + "/clip_" + this.person5.persons.skin.slice(6, 8) + "zd.png";
                    break;
            }
            this.clientInfo.visible = true;
            Laya.Tween.to(this.clientInfo, { alpha: 1 }, 600);
            Laya.timer.once(3000, this, this.vanish1);
            this.clientInfo.on(Laya.Event.MOUSE_UP, this, this.onUp);
            this.clientInfo.on(Laya.Event.MOUSE_MOVE, this, this.onUp);
        };
        //人物属性面板
        //-------------------------------------------
        map.prototype.onUp = function () {
            Laya.timer.clear(this, this.vanish1);
            this.clientInfoBag.visible = true;
            Laya.timer.once(1000, this, this.vanish1);
        };
        map.prototype.vanish1 = function () {
            Laya.Tween.to(this.clientInfo, { alpha: 0 }, 600, null, Laya.Handler.create(this, this.vanish2));
        };
        map.prototype.vanish2 = function () {
            this.clientInfo.visible = false;
            this.clientInfoBag.visible = false;
        };
        map.prototype.happy = function () {
            var _this = this;
            // this.gk1 = this.guke01.skin;
            // this.gk2 = this.guke02.skin;
            // this.gk3 = this.guke03.skin;
            // this.gk4 = this.guke04.skin;
            // this.gk5 = this.guke05.skin;
            console.log(666);
            for (var st = 1; st < 55; st++) {
                if (this["ont" + st]) {
                    this["ont" + st].pause(); //resume
                }
            }
            for (var hp = 1; hp < 6; hp++) {
                this["guke0" + hp].skin = "guke/G" + this["gk" + hp].slice(6, 8) + "/clip_" + this["gk" + hp].slice(6, 8) + "hp.png";
                this["guke0" + hp].clipX = 37;
            }
            Laya.timer.once(3000, this, function () {
                for (var go = 1; go < 54; go++) {
                    if (_this["ont" + go]) {
                        _this["ont" + go].resume(); //resume
                    }
                }
                for (var hp2 = 1; hp2 < 6; hp2++) {
                    _this["guke0" + hp2].skin = _this["gk" + hp2];
                    _this["guke0" + hp2].clipX = 21;
                }
            });
        };
        return map;
    }(ui.mapUI));
    wuling.map = map;
})(wuling || (wuling = {}));
//# sourceMappingURL=map.js.map