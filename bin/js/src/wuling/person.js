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
    var person = /** @class */ (function (_super) {
        __extends(person, _super);
        function person() {
            var _this = _super.call(this) || this;
            //控制星星个数
            _this.xing = 0;
            //互动概率
            _this.huNum = module.personModule.getInstance().huNum;
            _this.hud = true;
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
                { "bei": "guke/G11/clip_11bg.png", "zheng": "guke/G11/clip_11zg.png" },
                { "bei": "guke/G12/clip_12bg.png", "zheng": "guke/G12/clip_12zg.png" },
                { "bei": "guke/G13/clip_13bg.png", "zheng": "guke/G13/clip_13zg.png" },
                { "bei": "guke/G14/clip_14bg.png", "zheng": "guke/G14/clip_14zg.png" },
                { "bei": "guke/G15/clip_15bg.png", "zheng": "guke/G15/clip_15zg.png" },
                { "bei": "guke/G16/clip_16bg.png", "zheng": "guke/G16/clip_16zg.png" },
                { "bei": "guke/G17/clip_17bg.png", "zheng": "guke/G17/clip_17zg.png" },
                { "bei": "guke/G18/clip_18bg.png", "zheng": "guke/G18/clip_18zg.png" }
            ];
            _this.first = 0;
            //顾客进入触发入口动画回调
            _this.entOnce = true;
            // wuling.map.getInstance().
            // this.top.xing1.visible = true;
            Laya.timer.once(100, _this, _this.begin);
            return _this;
        }
        person.prototype.begin = function () {
            this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
            this.persons.skin = this.gukeFuz.bei;
            this.persons.scaleX = -1;
            this.persons.alpha = 1;
            // Laya.Tween.to(this, {x:1426,y:1827}, 10000);
            switch (Math.floor(Math.random() * 2)) {
                case 0:
                    this.lux1();
                    break;
                case 1:
                    this.lux2();
                    break;
                case 2:
                    this.lux3();
                    break;
                case 3:
                    this.lux4();
                    break;
                case 4:
                    this.lux5();
                    break;
                case 5:
                    this.lux6();
                    break;
                case 6:
                    this.lux7();
                    break;
                case 7:
                    this.lux8();
                    break;
            }
        };
        person.prototype.entrance = function (who) {
            // console.log(who.x,who.y);
            //任务1,2
            this.gukeNumder();
            if (who.x > 1266 && who.x < 1274 && who.y > 1924 && who.y < 1929 && this.entOnce) { //3
                this.entOnce = false;
                wuling.map.getInstance().men_left.play();
                wuling.map.getInstance().men_right.play();
                wuling.map.getInstance().qiantai.play();
                wuling.map.getInstance()._mc.play();
                Laya.timer.once(1390, this, this.stopEn);
            }
            else if (who.x > 1287 && who.x < 1293 && who.y > 1953 && who.y < 1958 && this.entOnce) { //4
                this.entOnce = false;
                wuling.map.getInstance().men_left.play();
                wuling.map.getInstance().men_right.play();
                wuling.map.getInstance().qiantai.play();
                wuling.map.getInstance()._mc.play();
                Laya.timer.once(1390, this, this.stopEn);
            }
            else if (who.x > 1172 && who.x < 1178 && who.y > 1852 && who.y < 1857 && this.entOnce) { //5
                this.entOnce = false;
                wuling.map.getInstance().men_left.play();
                wuling.map.getInstance().men_right.play();
                wuling.map.getInstance().qiantai.play();
                wuling.map.getInstance()._mc.play();
                Laya.timer.once(1390, this, this.stopEn);
            }
            else if (who.x > 1170 && who.x < 1177 && who.y > 1881 && who.y < 1887 && this.entOnce) { //6
                this.entOnce = false;
                wuling.map.getInstance().men_left.play();
                wuling.map.getInstance().men_right.play();
                wuling.map.getInstance().qiantai.play();
                wuling.map.getInstance()._mc.play();
                Laya.timer.once(1390, this, this.stopEn);
            }
            else if (who.x > 1291 && who.x < 1299 && who.y > 1929 && who.y < 1935 && this.entOnce) { //7
                this.entOnce = false;
                wuling.map.getInstance().men_left.play();
                wuling.map.getInstance().men_right.play();
                wuling.map.getInstance().qiantai.play();
                wuling.map.getInstance()._mc.play();
                Laya.timer.once(1390, this, this.stopEn);
            }
        };
        person.prototype.stopEn = function () {
            this.entOnce = true;
            Laya.timer.clear(this, this.stopEn);
            wuling.map.getInstance().men_left.stop();
            wuling.map.getInstance().men_left.index = 0;
            wuling.map.getInstance().men_right.stop();
            wuling.map.getInstance().men_right.index = 0;
            wuling.map.getInstance().qiantai.stop();
            wuling.map.getInstance().qiantai.index = 0;
            wuling.map.getInstance()._mc.stop();
        };
        //出口动画
        person.prototype.closeDoor = function () {
            var _this = this;
            wuling.map.getInstance().renshu--;
            if (wuling.map.getInstance().renshu == 0 && wuling.map.getInstance()._ck.index == 9) {
                wuling.map.getInstance()._ck.playTo(22, 29);
            }
            this.x = -75;
            this.y = 2792;
            this.alpha = 1;
            Laya.timer.once((Math.floor(Math.random() * 7 + 2) * 1000), this, function () {
                _this.begin();
            });
            this.xing = 0;
            for (var i = 1; i < 6; i++) {
                this.top1["xing" + i].visible = false;
            }
        };
        /**金币1 */
        // private goldCoins1(item:PlaceItem1):void
        // {
        // 	var goldCoins:wuling.goldCoins = new wuling.goldCoins;
        // 	goldCoins.x = item.x-50;
        // 	goldCoins.y = item.y-250;
        // 	goldCoins.zOrder =10000;
        // 	wuling.map.getInstance().mapImg.addChild(goldCoins);
        // }
        /**金币2 */
        // private goldCoins2(item2:PlaceItem2):void
        // {
        // 	var goldCoins:wuling.goldCoins = new wuling.goldCoins;
        // 	goldCoins.x = item2.x+60;
        // 	goldCoins.y = item2.y-130;
        // 	goldCoins.zOrder =10000;
        // 	wuling.map.getInstance().mapImg.addChild(goldCoins);
        // }
        //路线1互动
        person.prototype.lux1hd = function () {
            var _this = this;
            var dot = module.personData.getInstance();
            var namecar = wuling.map.getInstance().namecar;
            var nameObject = wuling.map.getInstance().nameObject;
            // console.log(this.x, this.y);
            if (this.x > 1175 && this.x < 1178 && this.y > 1570 && this.y < 1573 && this.hud && dot.dotfun1) //点1
             {
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 1316 && namecar[i].y == 1513 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun1 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.scaleX = -1;
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun1 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                _this.persons.scaleX = 1;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 1358 && nameObject[i].x >= 1114 && nameObject[i].y <= 1500 && nameObject[i].y >= 1344 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun1 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.scaleX = -1;
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    dot.dotfun1 = true;
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    _this.persons.scaleX = 1;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 1520 && this.x < 1523 && this.y > 1427 && this.y < 1430 && this.hud && dot.dotfun4) { //点2
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 1592 && namecar[i].y == 1337 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun4 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.scaleX = -1;
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun4 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                // this.persons.scaleX = 1;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            if (wuling.map.getInstance().guide == true && module.personModule.getInstance().interactNew == true) {
                                module.personModule.getInstance().huNum = 7;
                                module.personModule.getInstance().interactNew = false;
                                Laya.timer.clear(wuling.map.getInstance(), wuling.map.getInstance().follow);
                                wuling.map.getInstance().newclick();
                                //恢复显示位置
                                Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar, { value: 752 }, 1000, null, new Laya.Handler(this, function () {
                                }));
                                Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar, { value: 612 }, 1000, null, new Laya.Handler(this, function () {
                                }));
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // Laya.timer.once(700,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="看啊，顾客对咱们的设施很满意，还支付了费用";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(3400,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(4100,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="太棒啦，我们得到了第一笔收入了耶！";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(7800,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(8300,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="有了钱，我们就可以建更多的设施了。";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(11000,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(11700,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="我们不能让顾客饿着肚子逛门店，来吧，建一个自助餐吧！";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(14400,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(15100,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="请点黄色处！";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700,null,new Laya.Handler(this,()=>{
                                // 		wuling.map.getInstance().nextStep();
                                // 	}));
                                // });
                            }
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 1624 && nameObject[i].x >= 1382 && nameObject[i].y <= 1315 && nameObject[i].y >= 1154 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun4 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.scaleX = -1;
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun4 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    // this.persons.scaleX = 1;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 1685 && this.x < 1688 && this.y > 1532 && this.y < 1535 && this.hud && dot.dotfun5) { //点3
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 1842 && namecar[i].y == 1497 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun5 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun5 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 1876 && nameObject[i].x >= 1630 && nameObject[i].y <= 1472 && nameObject[i].y >= 1317) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun5 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun5 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 1966 && this.x < 1969 && this.y > 1625 && this.y < 1628 && this.hud && dot.dotfun6) { //点4
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 2087 && namecar[i].y == 1657 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun6 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun6 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 2119 && nameObject[i].x >= 1878 && nameObject[i].y <= 1633 && nameObject[i].y >= 1478 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun6 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun6 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 2427 && this.x < 2431 && this.y > 1557 && this.y < 1561 && this.hud && dot.dotfun9) { //点5
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 2367 && namecar[i].y == 1480 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun9 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.scaleX = -this.persons.scaleX;
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun9 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                _this.persons.scaleX = -_this.persons.scaleX;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 2401 && nameObject[i].x >= 2154 && nameObject[i].y <= 1458 && nameObject[i].y >= 1302 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun9 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.scaleX = -this.persons.scaleX;
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun9 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    _this.persons.scaleX = -_this.persons.scaleX;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
        };
        //路线1
        person.prototype.lux1 = function () {
            if (this.first === 0) {
                if (wuling.map.getInstance().guide) {
                    var zb = [{ x: -75, y: 2792 }];
                    var ite = Math.floor(Math.random() * 1 + 0);
                }
                else {
                    var zb = [{ x: 1393, y: 1725 }, { x: 1121, y: 1532 }, { x: 1403, y: 1353 }, { x: 1897, y: 1667 }, { x: 2128, y: 1528 }, { x: 2304, y: 1638 }, { x: 2634, y: 1425 }, { x: 2302, y: 1185 }];
                    var ite = Math.floor(Math.random() * 8 + 0);
                    if (ite == module.personData.getInstance().yfun1) {
                        ite = Math.floor(Math.random() * 8 + 0);
                    }
                    else {
                        module.personData.getInstance().yfun1 = ite;
                    }
                }
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.zOrder = 3001;
                    this.tween2 = Laya.Tween.to(this, { x: 1393, y: 1725, update: Laya.Handler.create(this, this.entrance, [this], false) }, 10000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 1393: //2
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = 1;
                    this.zOrder = 3001;
                    this.tween = Laya.Tween.to(this, { x: 1121, y: 1532, update: Laya.Handler.create(this, this.lux1hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 1121: //3
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.zOrder = 1915;
                    this.tween = Laya.Tween.to(this, { x: 1403, y: 1353 }, 3000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 1403: //4
                    this.persons.skin = this.gukeFuz.zheng;
                    this.persons.scaleX = -1;
                    this.zOrder = 1915;
                    this.tween = Laya.Tween.to(this, { x: 1897, y: 1667, update: Laya.Handler.create(this, this.lux1hd, [this], false) }, 6000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 1897: //5
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.zOrder = 1885;
                    this.tween = Laya.Tween.to(this, { x: 2128, y: 1528, update: Laya.Handler.create(this, this.lux1hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 2128: //6
                    this.persons.skin = this.gukeFuz.zheng;
                    this.persons.scaleX = -1;
                    this.zOrder = 1825;
                    this.tween = Laya.Tween.to(this, { x: 2304, y: 1638 }, 3000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 2304: //7
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.zOrder = 2001;
                    this.tween = Laya.Tween.to(this, { x: 2634, y: 1425, update: Laya.Handler.create(this, this.lux1hd, [this], false) }, 3600, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 2634: //8
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = 1;
                    this.zOrder = 500;
                    this.tween = Laya.Tween.to(this, { x: 2302, y: 1185 }, 6000, null, Laya.Handler.create(this, this.lux1));
                    break;
                case 2302: //9
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线2互动
        person.prototype.lux2hd = function () {
            var _this = this;
            var dot = module.personData.getInstance();
            var namecar = wuling.map.getInstance().namecar;
            var nameObject = wuling.map.getInstance().nameObject;
            // console.log(this.x, this.y);
            if (this.x > 1901 && this.x < 1904 && this.y > 1892 && this.y < 1896 && this.hud && dot.dotfun3) { //点1
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    // this.perXX();
                    // dot.dotfun3 =false;
                    // this.hud = false;
                    // var pifu:string = this.persons.skin;
                    // this.persons.scaleX = -this.persons.scaleX;
                    // this.tween.pause();
                    // this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png";
                    // wuling.map.getInstance().platform_ball.play();
                    // //互动完恢复行走
                    // Laya.timer.once(3000, this, ()=>{
                    // 	dot.dotfun3 =true;
                    // 	this.persons.skin = pifu;
                    // 	this.persons.scaleX = -this.persons.scaleX;
                    // 	this.tween.resume();
                    // 	wuling.map.getInstance().platform_ball.stop();
                    // 	Laya.timer.once(300, this, ()=>{
                    // 		this.hud = true;
                    // 	})
                    // })
                }
            }
            else if (this.x >= 2005 && this.x <= 2008 && this.y >= 1724 && this.y <= 1727 && this.hud && dot.dotfun6) { //点2
                if (Math.floor(Math.random() * 10 + 1) >= 7) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 2087 && namecar[i].y == 1657 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun6 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.persons.scaleX = -this.persons.scaleX;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun6 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                _this.persons.scaleX = -_this.persons.scaleX;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 2119 && nameObject[i].x >= 1878 && nameObject[i].y <= 1633 && nameObject[i].y >= 1478 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun6 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.persons.scaleX = -this.persons.scaleX;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun6 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    _this.persons.scaleX = -_this.persons.scaleX;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 1771 && this.x < 1774 && this.y > 1578 && this.y < 1581 && this.hud && dot.dotfun5) { //点3
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 1842 && namecar[i].y == 1497 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun5 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.persons.scaleX = -this.persons.scaleX;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun5 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                _this.persons.scaleX = -_this.persons.scaleX;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 1876 && nameObject[i].x >= 1630 && nameObject[i].y <= 1472 && nameObject[i].y >= 1317) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun5 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.persons.scaleX = -this.persons.scaleX;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun5 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    _this.persons.scaleX = -_this.persons.scaleX;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 1493 && this.x < 1497 && this.y > 1293 && this.y < 1296 && this.hud && dot.dotfun4) { //点4
                if (Math.floor(Math.random() * 10 + 1) >= this.huNum) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 1592 && namecar[i].y == 1337 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun4 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun4 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            if (wuling.map.getInstance().guide == true && module.personModule.getInstance().interactNew == true) {
                                module.personModule.getInstance().huNum = 7;
                                module.personModule.getInstance().interactNew = false;
                                Laya.timer.clear(wuling.map.getInstance(), wuling.map.getInstance().follow);
                                wuling.map.getInstance().newclick();
                                //恢复显示位置
                                Laya.Tween.to(wuling.map.getInstance().pan.hScrollBar, { value: 752 }, 1000, null, new Laya.Handler(this, function () {
                                }));
                                Laya.Tween.to(wuling.map.getInstance().pan.vScrollBar, { value: 612 }, 1000, null, new Laya.Handler(this, function () {
                                }));
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // Laya.timer.once(700,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="看啊，顾客对咱们的设施很满意，还支付了费用";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(3400,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(4100,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="太棒啦，我们得到了第一笔收入了耶！";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(7800,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(8300,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="有了钱，我们就可以建更多的设施了。";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(11000,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(11700,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="我们不能让顾客饿着肚子逛门店，来吧，建一个自助餐吧！";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700);
                                // });
                                // Laya.timer.once(14400,this,()=>{
                                // Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:0},700);
                                // });
                                // Laya.timer.once(15100,this,()=>{
                                // 	wuling.Bottom.getInstance().text1.text ="请点黄色处！";
                                // 	Laya.Tween.to(wuling.Bottom.getInstance().text1,{alpha:1},700,null,new Laya.Handler(this,()=>{
                                // 		wuling.map.getInstance().nextStep();
                                // 	}));
                                // });
                            }
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 1624 && nameObject[i].x >= 1382 && nameObject[i].y <= 1315 && nameObject[i].y >= 1154 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun4 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun4 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 1794 && this.x < 1797 && this.y > 1235 && this.y < 1237 && this.hud && dot.dotfun7) { //点5
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 1871 && namecar[i].y == 1158 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun7 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun7 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 1905 && nameObject[i].x >= 1658 && nameObject[i].y <= 1137 && nameObject[i].y >= 979 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun7 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun7 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
            else if (this.x > 2031 && this.x < 2034 && this.y > 1383 && this.y < 1386 && this.hud && dot.dotfun8) { //点6
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    for (var i = 0; i < namecar.length; i++) {
                        if (namecar[i].x == 2120 && namecar[i].y == 1320 && namecar[i].imgBtn.gray == false) {
                            this.perXX();
                            //禁止imgBtn点击事件
                            namecar[i].onOff();
                            dot.dotfun8 = false;
                            this.hud = false;
                            var pifu = this.persons.skin;
                            this.tween.pause();
                            this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                            //------------------------------------------------------
                            var mc1 = new Laya.MovieClip();
                            var mc2 = new Laya.MovieClip();
                            var anem = namecar[i].show1.skin;
                            var car = namecar[i].carClass.skin;
                            var ewq = anem.slice(6);
                            var mowei = ewq.slice(0, -4);
                            mc1.playTo(0, module.aniFramesNumder[mowei] - 1, new Laya.Handler(this, function () {
                                mc1.destroy();
                                //恢复imgBtn点击事件
                                namecar[i].imgBtnOn();
                                //显示金币
                                namecar[i].jin.alpha = 1;
                                namecar[i].jings();
                                namecar[i].jin.setJin();
                                dot.dotfun8 = true;
                                if (car != null) {
                                    mc2.destroy();
                                }
                                //---互动完恢复行走
                                _this.persons.skin = pifu;
                                //判断人物是否应该暂停
                                if (module.personModule.getInstance().figureControl == true) {
                                    _this.tween.resume();
                                }
                                Laya.timer.once(300, _this, function () {
                                    _this.hud = true;
                                });
                                //---
                            }, null, false));
                            // this.goldCoins1(namecar[i]);
                            mc1.load("res/swf/car/" + mowei + ".swf", true);
                            namecar[i].show1.addChild(mc1);
                            if (car != null) {
                                var car1 = car.slice(13);
                                var car2 = car1.slice(0, -4);
                                mc2.x = -9;
                                mc2.y = -5;
                                if (car2 == "320c" || car2 == "320h" || car2 == "320l") {
                                    mc2.x = -11;
                                    mc2.y = -15;
                                }
                                mc2.load("res/swf/car/" + car2 + ".swf", true);
                                namecar[i].carClass.addChild(mc2);
                            }
                            return;
                            //------------------------------------------------------
                        }
                    }
                    for (var i = 0; i < nameObject.length; i++) {
                        if (nameObject[i].x <= 2154 && nameObject[i].x >= 1910 && nameObject[i].y <= 1297 && nameObject[i].y >= 1142 && nameObject[i].imgBtn.gray == false) {
                            var durl = nameObject[i].imgBtn.skin;
                            var durl2 = durl.slice(6);
                            var durl3 = durl2.slice(0, -4);
                            if (module.aniFramesNumder[durl3] != 6) {
                                this.perXX();
                                //禁止imgBtn点击事件
                                nameObject[i].onOff();
                                dot.dotfun8 = false;
                                this.hud = false;
                                var pifu = this.persons.skin;
                                this.tween.pause();
                                this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                                //------------------------------------------------------
                                var dc1 = new Laya.MovieClip();
                                dc1.interval = 30;
                                dc1.load("res/swf/wu/" + durl3 + ".swf", true);
                                nameObject[i].imgBtn.addChild(dc1);
                                if (durl3 == "d100013") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100012" || durl3 == "d100028") {
                                    dc1.y = dc1.y - 39;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10008" || durl3 == "d100023") {
                                    dc1.x = dc1.x + 2;
                                    dc1.y = dc1.y + 35;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100029") {
                                    dc1.x = dc1.x + 12;
                                    dc1.y = dc1.y - 20;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d100030" || durl3 == "d100031") {
                                    dc1.x = dc1.x + 15;
                                    dc1.y = dc1.y - 62;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10003" || durl3 == "d100018") {
                                    dc1.x = dc1.x - 21;
                                    dc1.y = dc1.y - 14;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "d10005" || durl3 == "d100020") {
                                    dc1.x = dc1.x - 15;
                                    dc1.y = dc1.y - 36;
                                    Laya.timer.once(100, this, function () { _this.alpha = 0; });
                                }
                                if (durl3 == "m10001" || durl3 == "m100011") {
                                    dc1.x = dc1.x + 0;
                                    dc1.y = dc1.y - 0;
                                }
                                if (durl3 == "m10004" || durl3 == "m100012") {
                                    dc1.x = dc1.x + 7;
                                    dc1.y = dc1.y + 62;
                                }
                                if (durl3 == "d10001" || durl3 == "d100021") {
                                    dc1.x = dc1.x;
                                    dc1.y = dc1.y - 25;
                                }
                                if (module.aniFramesNumder[durl3] == 0) {
                                    this.persons.skin = pifu;
                                    this.persons.scaleX = 1;
                                    this.tween.resume();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    Laya.timer.once(300, this, function () {
                                        _this.hud = true;
                                    });
                                }
                                dc1.playTo(0, module.aniFramesNumder[durl3] - 1, new Laya.Handler(this, function () {
                                    dc1.destroy();
                                    //恢复imgBtn点击事件
                                    nameObject[i].imgBtnOn();
                                    //显示金币
                                    nameObject[i].jin.alpha = 1;
                                    nameObject[i].jings();
                                    nameObject[i].jin.setJin();
                                    dot.dotfun8 = true;
                                    //---互动完恢复行走
                                    _this.persons.skin = pifu;
                                    //判断人物是否应该暂停
                                    if (module.personModule.getInstance().figureControl == true) {
                                        _this.alpha = 1;
                                        _this.tween.resume();
                                    }
                                    Laya.timer.once(300, _this, function () {
                                        _this.hud = true;
                                    });
                                    //---
                                    // this.goldCoins2(nameObject[i]);
                                }, null, false));
                            }
                            return;
                        }
                    }
                }
            }
        };
        //路线2
        person.prototype.lux2 = function () {
            if (this.first === 0) {
                if (wuling.map.getInstance().guide) {
                    var zb = [{ x: -75, y: 2792 }];
                    var ite = Math.floor(Math.random() * 1 + 0);
                }
                else {
                    var zb = [{ x: 1810, y: 1953 }, { x: 2087, y: 1776 }, { x: 1405, y: 1350 }, { x: 1693, y: 1172 }, { x: 2127, y: 1444 }, { x: 2393, y: 1275 }, { x: 2302, y: 1185 }];
                    var ite = Math.floor(Math.random() * 7 + 0);
                    if (ite == module.personData.getInstance().yfun2) {
                        ite = Math.floor(Math.random() * 7 + 0);
                    }
                    else {
                        module.personData.getInstance().yfun2 = ite;
                    }
                }
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.zOrder = 3001;
                    this.tween2 = Laya.Tween.to(this, { x: 1531, y: 1784, update: Laya.Handler.create(this, this.entrance, [this], false) }, 10000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 1531: //2
                    this.persons.skin = this.gukeFuz.zheng;
                    this.persons.scaleX = -1;
                    this.zOrder = 3001;
                    this.tween = Laya.Tween.to(this, { x: 1810, y: 1953 }, 3000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 1810: //3
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.zOrder = 2001;
                    this.tween = Laya.Tween.to(this, { x: 2087, y: 1776, update: Laya.Handler.create(this, this.lux2hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 2087: //4
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = 1;
                    this.zOrder = 1915;
                    this.tween = Laya.Tween.to(this, { x: 1405, y: 1350, update: Laya.Handler.create(this, this.lux2hd, [this], false) }, 9000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 1405: //5
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.zOrder = 1825;
                    this.tween = Laya.Tween.to(this, { x: 1693, y: 1172, update: Laya.Handler.create(this, this.lux2hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 1693: //6
                    this.persons.skin = this.gukeFuz.zheng;
                    this.persons.scaleX = -1;
                    this.zOrder = 1825;
                    this.tween = Laya.Tween.to(this, { x: 2127, y: 1444, update: Laya.Handler.create(this, this.lux2hd, [this], false) }, 6000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 2127: //7
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.zOrder = 1795;
                    this.tween = Laya.Tween.to(this, { x: 2393, y: 1275 }, 3000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 2393: //8
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = 1;
                    this.zOrder = 500;
                    this.tween = Laya.Tween.to(this, { x: 2302, y: 1185 }, 2000, null, Laya.Handler.create(this, this.lux2));
                    break;
                case 2302: //9
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线3互动
        person.prototype.lux3hd = function () {
            var _this = this;
            console.log(this.x, this.y);
            if (this.x > 1894 && this.x < 1897 && this.y > 1898 && this.y < 1900 && this.hud) { //点1
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(1);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1720 && this.x < 1723 && this.y > 1702 && this.y < 1705 && this.hud) { //点2
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(2);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1231 && this.x < 1234 && this.y > 1591 && this.y < 1594 && this.hud) { //点3
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(3);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 943 && this.x < 946 && this.y > 1407 && this.y < 1410 && this.hud) { //点4
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(4);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1182 && this.x < 1185 && this.y > 1115 && this.y < 1118 && this.hud) { //点5
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(5);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1443 && this.x < 1446 && this.y > 1024 && this.y < 1026 && this.hud) { //点6
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(6);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1753 && this.x < 1756 && this.y > 1222 && this.y < 1225 && this.hud) { //点7
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(7);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2010 && this.x < 2013 && this.y > 1387 && this.y < 1390 && this.hud) { //点8
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(8);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2281 && this.x < 2284 && this.y > 1560 && this.y < 1563 && this.hud) { //点9
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(9);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2763 && this.x < 2766 && this.y > 1697 && this.y < 1700 && this.hud) { //点10
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(10);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
        };
        //路线3
        person.prototype.lux3 = function () {
            if (this.first === 0) {
                var zb = [{ x: 1717, y: 2009 }, { x: 2080, y: 1785 }, { x: 1834, y: 1634 }, { x: 1561, y: 1802 }, { x: 837, y: 1340 }, { x: 1386, y: 987 }, { x: 2629, y: 1784 }, { x: 2910, y: 1607 }, { x: 2300, y: 1224 }];
                var ite = Math.floor(Math.random() * 9 + 0);
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.zOrder = 3001;
                    this.tween2 = Laya.Tween.to(this, { x: 1426, y: 1827, update: Laya.Handler.create(this, this.entrance, [this], false) }, 10000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 1426: //2
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.zOrder = 3001;
                    this.tween = Laya.Tween.to(this, { x: 1717, y: 2009 }, 3000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 1717: //3
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.zOrder = 2001;
                    this.tween = Laya.Tween.to(this, { x: 2080, y: 1785, update: Laya.Handler.create(this, this.lux3hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 2080: //4
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.zOrder = 1825;
                    this.tween = Laya.Tween.to(this, { x: 1834, y: 1634 }, 3000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 1834: //5
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.zOrder = 1975;
                    this.tween = Laya.Tween.to(this, { x: 1561, y: 1802, update: Laya.Handler.create(this, this.lux3hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 1561: //6
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.zOrder = 2001;
                    this.tween = Laya.Tween.to(this, { x: 837, y: 1340, update: Laya.Handler.create(this, this.lux3hd, [this], false) }, 9000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 837: //7
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1386, y: 987, update: Laya.Handler.create(this, this.lux3hd, [this], false) }, 6000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 1386: //8
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2629, y: 1784, update: Laya.Handler.create(this, this.lux3hd, [this], false) }, 15000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 2629: //9
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2910, y: 1607, update: Laya.Handler.create(this, this.lux3hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 2910: //10
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2300, y: 1224 }, 6500, null, Laya.Handler.create(this, this.lux3));
                    break;
                case 2300: //11
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线4互动
        person.prototype.lux4hd = function () {
            var _this = this;
            // console.log(this.x, this.y);
            if (this.x > 1404 && this.x < 1407 && this.y > 1583 && this.y < 1586 && this.hud) { //点1
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(1);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 940 && this.x < 944 && this.y > 1273 && this.y < 1276 && this.hud) { //点2
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(2);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1544 && this.x < 1547 && this.y > 1253 && this.y < 1256 && this.hud) { //点3
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(3);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1786 && this.x < 1789 && this.y > 1243 && this.y < 1246 && this.hud) { //点4
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(4);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2257 && this.x < 2260 && this.y > 1545 && this.y < 1548 && this.hud) { //点5
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(5);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2291 && this.x < 2294 && this.y > 1771 && this.y < 1773 && this.hud) { //点6
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(6);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2203 && this.x < 2206 && this.y > 2058 && this.y < 2061 && this.hud) { //点7
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(7);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2801 && this.x < 2804 && this.y > 1598 && this.y < 1601 && this.hud) { //点8
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(8);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2257 && this.x < 2260 && this.y > 1245 && this.y < 1248 && this.hud) { //点9
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(9);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1476 && this.x < 1479 && this.y > 1046 && this.y < 1049 && this.hud) { //点10
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(9);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
        };
        //路线4
        person.prototype.lux4 = function () {
            if (this.first === 0) {
                var zb = [{ x: 1807, y: 1328 }, { x: 1223, y: 1702 }, { x: 758, y: 1392 }, { x: 1112, y: 1166 }, { x: 1396, y: 1349 }, { x: 1678, y: 1174 }, { x: 2451, y: 1670 }, { x: 1815, y: 2082 }, { x: 1991, y: 2197 }, { x: 2860, y: 1637 }, { x: 1810, y: 954 }, { x: 1568, y: 1108 }, { x: 1386, y: 986 }, { x: 1669, y: 812 }];
                var ite = Math.floor(Math.random() * 14 + 0);
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.tween2 = Laya.Tween.to(this, { x: 2058, y: 1485, update: Laya.Handler.create(this, this.entrance, [this], false) }, 16000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 2058: //2
                    this.persons.scaleX = 1;
                    this.tween = Laya.Tween.to(this, { x: 1807, y: 1328 }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1807: //3
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1223, y: 1702, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 6000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1223: //4
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 758, y: 1392 }, 6000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 758: //5
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1112, y: 1166, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 3300, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1112: //6
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1396, y: 1349 }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1396: //7
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1678, y: 1174, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1678: //8
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2451, y: 1670, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 9000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 2451: //9
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1815, y: 2082, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 6500, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1815: //10
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1991, y: 2197 }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1991: //11
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2860, y: 1637, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 9000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 2860: //12
                    this.persons.scaleX = -1;
                    this.persons.scaleX = -this.persons.scaleX;
                    this.tween = Laya.Tween.to(this, { x: 1810, y: 954, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 14000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1810: //13
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1568, y: 1108 }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1568: //14
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1386, y: 986, update: Laya.Handler.create(this, this.lux4hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1386: //15
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1669, y: 812 }, 3000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 1669: //16
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2269, y: 1191 }, 6000, null, Laya.Handler.create(this, this.lux4));
                    break;
                case 2269: //11
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线5互动
        person.prototype.lux5hd = function () {
            var _this = this;
            // console.log(this.x, this.y);
            if (this.x > 1690 && this.x < 1693 && this.y > 1605 && this.y < 1608 && this.hud) { //点1
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(1);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1740 && this.x < 1743 && this.y > 1764 && this.y < 1767 && this.hud) { //点2
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(2);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2440 && this.x < 2443 && this.y > 2233 && this.y < 2236 && this.hud) { //点3
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(3);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2520 && this.x < 2523 && this.y > 2067 && this.y < 2070 && this.hud) { //点4
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(4);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2260 && this.x < 2263 && this.y > 1899 && this.y < 1902 && this.hud) { //点5
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(5);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1985 && this.x < 1988 && this.y > 1720 && this.y < 1723 && this.hud) { //点6
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(6);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1750 && this.x < 1753 && this.y > 1568 && this.y < 1571 && this.hud) { //点7
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(7);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1480 && this.x < 1483 && this.y > 1393 && this.y < 1396 && this.hud) { //点8
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(8);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1205 && this.x < 1208 && this.y > 1215 && this.y < 1218 && this.hud) { //点9
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(9);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 982 && this.x < 985 && this.y > 917 && this.y < 920 && this.hud) { //点10
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(10);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1244 && this.x < 1247 && this.y > 885 && this.y < 888 && this.hud) { //点11
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(11);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1501 && this.x < 1503 && this.y > 1051 && this.y < 1054 && this.hud) { //点12
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(12);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1771 && this.x < 1774 && this.y > 1225 && this.y < 1228 && this.hud) { //点13
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(13);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2040 && this.x < 2043 && this.y > 1400 && this.y < 1403 && this.hud) { //点14
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(14);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2282 && this.x < 2285 && this.y > 1556 && this.y < 1559 && this.hud) { //点15
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(15);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2550 && this.x < 2553 && this.y > 1729 && this.y < 1732 && this.hud) { //点16
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(16);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 3000 && this.x < 3003 && this.y > 1875 && this.y < 1878 && this.hud) { //点17
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.persons.scaleX = -this.persons.scaleX;
                    this.tween.pause();
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(17);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
        };
        //路线5
        person.prototype.lux5 = function () {
            if (this.first === 0) {
                var zb = [{ x: 1838, y: 1705 }, { x: 1536, y: 1898 }, { x: 2246, y: 2351 }, { x: 2618, y: 2131 }, { x: 866, y: 995 }, { x: 1142, y: 819 }, { x: 2891, y: 1950 }, { x: 3159, y: 1774 }, { x: 2305, y: 1207 }];
                var ite = Math.floor(Math.random() * 9 + 0);
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.tween2 = Laya.Tween.to(this, { x: 1594, y: 1541, update: Laya.Handler.create(this, this.entrance, [this], false) }, 13000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 1594: //2
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1838, y: 1705, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 1838: //3
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1536, y: 1898, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 1536: //4
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2246, y: 2351 }, 9000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 2246: //5
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2618, y: 2131, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 2618: //6
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 866, y: 995, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 21000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 866: //7
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1142, y: 819, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 1142: //8
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2891, y: 1950, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 21000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 2891: //9
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 3159, y: 1774, update: Laya.Handler.create(this, this.lux5hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 3159: //10
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2305, y: 1207 }, 11000, null, Laya.Handler.create(this, this.lux5));
                    break;
                case 2305: //11
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线6互动
        person.prototype.lux6hd = function () {
            var _this = this;
            console.log(this.x, this.y);
            if (this.x > 1201 && this.x < 1204 && this.y > 1589 && this.y < 1592 && this.hud) { //点1
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(1);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 953 && this.x < 956 && this.y > 1258 && this.y < 1261 && this.hud) { //点2
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(2);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 681 && this.x < 684 && this.y > 1101 && this.y < 1104 && this.hud) { //点3
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "zd.png";
                    console.log(3);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 955 && this.x < 958 && this.y > 1055 && this.y < 1058 && this.hud) { //点4
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(4);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1210 && this.x < 1213 && this.y > 1220 && this.y < 1223 && this.hud) { //点5
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(5);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1511 && this.x < 1513 && this.y > 1415 && this.y < 1418 && this.hud) { //点6
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(6);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1760 && this.x < 1763 && this.y > 1577 && this.y < 1580 && this.hud) { //点7
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(7);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1984 && this.x < 1987 && this.y > 1722 && this.y < 1725 && this.hud) { //点8
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(8);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1910 && this.x < 1913 && this.y > 1885 && this.y < 1888 && this.hud) { //点9
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(9);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1995 && this.x < 1998 && this.y > 2085 && this.y < 2088 && this.hud) { //点10
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(10);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2522 && this.x < 2525 && this.y > 2069 && this.y < 2072 && this.hud) { //点11
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    // this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(11);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        // this.persons.scaleX = -this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2793 && this.x < 2796 && this.y > 1889 && this.y < 1892 && this.hud) { //点12
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(12);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2511 && this.x < 2514 && this.y > 1706 && this.y < 1709 && this.hud) { //点13
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(13);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2252 && this.x < 2255 && this.y > 1538 && this.y < 1541 && this.hud) { //点14
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(14);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 2010 && this.x < 2013 && this.y > 1381 && this.y < 1384 && this.hud) { //点15
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(15);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1743 && this.x < 1747 && this.y > 1208 && this.y < 1211 && this.hud) { //点16
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(16);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1455 && this.x < 1458 && this.y > 1021 && this.y < 1024 && this.hud) { //点17
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(17);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
            else if (this.x > 1221 && this.x < 1224 && this.y > 869 && this.y < 872 && this.hud) { //点18
                if (Math.floor(Math.random() * 10 + 1) >= 0) { //触发几率
                    this.hud = false;
                    var pifu = this.persons.skin;
                    this.tween.pause();
                    this.persons.scaleX = -this.persons.scaleX;
                    this.persons.skin = "guke/G" + this.persons.skin.slice(6, 8) + "/clip_" + this.persons.skin.slice(6, 8) + "bd.png";
                    console.log(18);
                    //互动完恢复行走
                    Laya.timer.once(2000, this, function () {
                        _this.persons.skin = pifu;
                        _this.tween.resume();
                        _this.persons.scaleX = -_this.persons.scaleX;
                        Laya.timer.once(300, _this, function () {
                            _this.hud = true;
                        });
                    });
                }
            }
        };
        //路线6
        person.prototype.lux6 = function () {
            if (this.first === 0) {
                var zb = [{ x: 1113, y: 1526 }, { x: 1359, y: 1378 }, { x: 1057, y: 1190 }, { x: 760, y: 1393 }, { x: 493, y: 1217 }, { x: 862, y: 995 }, { x: 2082, y: 1786 }, { x: 1785, y: 1962 }, { x: 2091, y: 2142 }, { x: 2366, y: 1966 }, { x: 2620, y: 2134 }, { x: 2895, y: 1955 }, { x: 1139, y: 816 }, { x: 1428, y: 643 }, { x: 2260, y: 1214 }];
                var ite = Math.floor(Math.random() * 15 + 0);
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.tween2 = Laya.Tween.to(this, { x: 1393, y: 1725, update: Laya.Handler.create(this, this.entrance, [this], false) }, 10000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1393: //2
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = 1;
                    this.tween = Laya.Tween.to(this, { x: 1113, y: 1526, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1113: //3
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1359, y: 1378 }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1359: //4
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1057, y: 1190 }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1057: //5
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 760, y: 1393, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 760: //6
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 493, y: 1217 }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 493: //7
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 862, y: 995, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 862: //8
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2082, y: 1786, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 15000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 2082: //9
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1785, y: 1962, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1785: //10
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2091, y: 2142, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 2091: //11
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2366, y: 1966 }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 2366: //12
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2620, y: 2134, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 2620: //13
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2895, y: 1955 }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 2895: //14
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1139, y: 816, update: Laya.Handler.create(this, this.lux6hd, [this], false) }, 21000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1139: //15
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1428, y: 643 }, 3000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 1428: //16
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2260, y: 1214 }, 12000, null, Laya.Handler.create(this, this.lux6));
                    break;
                case 2260: //17
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线7
        person.prototype.lux7 = function () {
            if (this.first === 0) {
                var zb = [{ x: 1026, y: 1454 }, { x: 1250, y: 1312 }, { x: 1063, y: 1192 }, { x: 840, y: 1336 }, { x: 584, y: 1171 }, { x: 828, y: 1035 }, { x: 767, y: 998 }, { x: 536, y: 1139 }, { x: 350, y: 1016 }, { x: 627, y: 841 }, { x: 813, y: 963 }, { x: 1088, y: 786 }, { x: 898, y: 662 }, { x: 1130, y: 520 }, { x: 1378, y: 676 }, { x: 864, y: 998 }, { x: 2421, y: 2000 }, { x: 2061, y: 2229 }, { x: 2500, y: 2513 }, { x: 2384, y: 2337 }, { x: 2806, y: 2314 }, { x: 2835, y: 1988 }, { x: 2424, y: 1994 }, { x: 2888, y: 1953 }, { x: 1341, y: 946 }];
                var ite = Math.floor(Math.random() * 25 + 0);
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.tween2 = Laya.Tween.to(this, { x: 1531, y: 1784, update: Laya.Handler.create(this, this.entrance, [this], false) }, 10000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1531: //2
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1026, y: 1454 }, 6000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1026: //3
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1250, y: 1312 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1250: //4
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1063, y: 1192 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1063: //5
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 840, y: 1336 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 840: //6
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 584, y: 1171 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 584: //7
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 828, y: 1035 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 828: //8
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 767, y: 998 }, 1300, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 767: //9
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 536, y: 1139 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 536: //10
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 350, y: 1016 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 350: //11
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 627, y: 841 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 627: //12
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 813, y: 963 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 813: //13
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.tween = Laya.Tween.to(this, { x: 1088, y: 786 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1088: //14
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 898, y: 662 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 898: //15
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1130, y: 520 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1130: //16
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1378, y: 676 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1378: //17
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 864, y: 998 }, 6000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 864: //18
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2421, y: 2000 }, 20000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2421: //19
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2061, y: 2229 }, 3300, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2061: //20
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2500, y: 2513 }, 6000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2500: //21
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2582, y: 2459 }, 1000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2582: //22
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2384, y: 2337 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2384: //23
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2613, y: 2197 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2613: //24
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2806, y: 2314 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2806: //25
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 3078, y: 2133 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 3078: //26
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2835, y: 1988 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2835: //27
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2611, y: 2127 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2611: //28
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2424, y: 1994 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2424: //29
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2695, y: 1827 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2695: //30
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2888, y: 1953 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2888: //31
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 3122, y: 1800 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 3122: //32
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2361, y: 1301 }, 9000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2361: //33---
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2112, y: 1453 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2112: //34
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1863, y: 1285 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1863: //35
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2099, y: 1142 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2099: //36
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1907, y: 1018 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1907: //37
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1672, y: 1168 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1672: //38
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1572, y: 1107 }, 1000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1572: //39
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1816, y: 954 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1816: //40
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1619, y: 837 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1619: //41
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1392, y: 983 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1392: //42
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1341, y: 946 }, 900, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1341: //43
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1610, y: 770 }, 3000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 1610: //44
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2292, y: 1204 }, 9000, null, Laya.Handler.create(this, this.lux7));
                    break;
                case 2292: //45
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        //路线8
        person.prototype.lux8 = function () {
            if (this.first === 0) {
                var zb = [{ x: 1594, y: 1836 }, { x: 2305, y: 1636 }, { x: 2075, y: 2147 }, { x: 2562, y: 2162 }, { x: 1617, y: 1864 }, { x: 2497, y: 2510 }, { x: 2177, y: 1844 }, { x: 3083, y: 2135 }, { x: 3121, y: 1796 }, { x: 2119, y: 1449 }, { x: 1587, y: 1466 }, { x: 1902, y: 1021 }, { x: 1548, y: 1501 }, { x: 268, y: 1070 }, { x: 765, y: 993 }, { x: 1025, y: 1459 }, { x: 1343, y: 1015 }, { x: 622, y: 839 }, { x: 1155, y: 819 }, { x: 1154, y: 525 }, { x: 1635, y: 768 }, { x: 1579, y: 1103 }, { x: 1677, y: 797 }];
                var ite = Math.floor(Math.random() * 23 + 0);
                this.x = zb[ite].x;
                this.y = zb[ite].y;
                this.first = 1;
            }
            switch (this.x) {
                case -75: //1
                    this.gukeFuz = this.customer[Math.floor(Math.random() * 18 + 0)];
                    this.persons.skin = this.gukeFuz.bei;
                    this.persons.scaleX = -1;
                    this.persons.alpha = 1;
                    this.tween2 = Laya.Tween.to(this, { x: 1393, y: 1725, update: Laya.Handler.create(this, this.entrance, [this], false) }, 10000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1393: //2
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1594, y: 1836 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1594: //3
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2118, y: 1516 }, 6000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2118: //4
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2305, y: 1636 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2305: //5
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1792, y: 1961 }, 6000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1792: //6
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2075, y: 2147 }, 3300, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2075: //7
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2316, y: 2002 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2316: //8
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2562, y: 2162 }, 3300, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2562: //9
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2332, y: 2305 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2332: //10
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1617, y: 1864 }, 9000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1617: //11
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1556, y: 1907 }, 1000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1556: //12
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2497, y: 2510 }, 12000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2497: //13
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2854, y: 2282 }, 3300, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2854: //14
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2177, y: 1844 }, 9000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2177: //15
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2406, y: 1702 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2406: //16
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 3083, y: 2135 }, 9000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 3083: //17
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 3361, y: 1955 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 3361: //18
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 3121, y: 1796 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 3121: //19
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2879, y: 1951 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2879: //20
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2119, y: 1449 }, 10500, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2119: //21
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1839, y: 1626 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1839: //22
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1587, y: 1466 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1587: //23
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 2100, y: 1140 }, 6000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2100: //24
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1902, y: 1021 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1902: //25
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1349, y: 1377 }, 6000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1349: //26
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1548, y: 1501 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1548: //27
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1235, y: 1707 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1235: //28
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 268, y: 1070 }, 12000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 268: //29
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 581, y: 871 }, 3300, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 581: //30
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 765, y: 993 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 765: //31
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 541, y: 1140 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 541: //32
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1025, y: 1459 }, 6500, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1025: //33
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1535, y: 1133 }, 6500, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1535: //34
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1343, y: 1015 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1343: //35
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1115, y: 1163 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1115: //36
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 622, y: 839 }, 6200, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 622: //37
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 902, y: 665 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 902: //38
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1155, y: 819 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1155: //39
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1383, y: 677 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1383: //40
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1154, y: 525 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1154: //41
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1193, y: 490 }, 1000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1193: //42
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1635, y: 768 }, 6000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1635: //43
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1333, y: 951 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1333: //44
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 1579, y: 1103 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1579: //45
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1815, y: 953 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1815: //46
                    this.persons.scaleX = 1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1621, y: 839 }, 3000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1621: //47
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    this.tween = Laya.Tween.to(this, { x: 1677, y: 797 }, 800, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 1677: //48
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.zheng;
                    this.tween = Laya.Tween.to(this, { x: 2298, y: 1206 }, 9000, null, Laya.Handler.create(this, this.lux8));
                    break;
                case 2298: //49
                    if (wuling.map.getInstance()._ck.index >= 22 && wuling.map.getInstance()._ck.index < 29) {
                        wuling.map.getInstance()._ck.playTo(1, 9);
                    }
                    else {
                        if (wuling.map.getInstance()._ck.index >= 1 && wuling.map.getInstance()._ck.index <= 9) {
                        }
                        else {
                            wuling.map.getInstance()._ck.playTo(1, 9);
                        }
                    }
                    wuling.map.getInstance().renshu++;
                    this.persons.scaleX = -1;
                    this.persons.skin = this.gukeFuz.bei;
                    Laya.Tween.to(this, { x: 2398, y: 1157, alpha: 0 }, 1500, null, Laya.Handler.create(this, this.closeDoor));
                    break;
            }
        };
        person.prototype.happy = function () {
            var _this = this;
            if (this.persons.skin.slice(16, 18) !== "zd" && this.persons.skin.slice(16, 18) !== "bd") {
                var gk = this.persons.skin;
                if (this.tween) {
                    this.tween.pause(); //resume
                    this.persons.clipX = 37;
                    this.persons.skin = "guke/G" + gk.slice(6, 8) + "/clip_" + gk.slice(6, 8) + "hp.png";
                }
                Laya.timer.once(3000, this, function () {
                    _this.persons.clipX = 21;
                    if (_this.tween) {
                        _this.tween.resume(); //resume
                    }
                    _this.persons.skin = gk;
                });
            }
        };
        /**暂停活动人物 */
        person.prototype.figureStatic = function () {
            if (this.tween) {
                this.tween.pause();
                // this.oldLu =this.persons.skin;
                this.alpha = 0;
                if (module.personModule.getInstance().addFigure == true) {
                    module.personModule.getInstance().figureControl = false;
                }
                // this.persons.skin = "guke/G"+this.persons.skin.slice(6,8)+"/clip_"+this.persons.skin.slice(6,8)+"bd.png"
            }
        };
        /**开始人物活动 */
        person.prototype.figureStart = function () {
            if (this.tween) {
                this.tween.resume();
                this.alpha = 1;
                module.personModule.getInstance().figureControl = true;
                // this.persons.skin = this.oldLu;
            }
        };
        /**互动星星 */
        person.prototype.perXX = function () {
            this.xing++;
            if (this.xing < 6) {
                this.top1["xing" + this.xing].visible = true;
            }
        };
        /**门店人数任务 */
        // public Mission2:number=module.missionModule.getInstance().taskProgress[0]["Mission2"];
        person.prototype.gukeNumder = function () {
            // if(this.Mission2<30&&module.missionModule.getInstance().taskProgress.length>0)
            // {
            // 	this.Mission2++;
            //     util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission2="+this.Mission2);
            // }
        };
        return person;
    }(ui.personUI));
    wuling.person = person;
})(wuling || (wuling = {}));
//# sourceMappingURL=person.js.map