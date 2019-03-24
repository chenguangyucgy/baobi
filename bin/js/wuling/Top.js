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
    var Top = /** @class */ (function (_super) {
        __extends(Top, _super);
        function Top() {
            var _this = _super.call(this) || this;
            // public lv:number = module.Room.getInstance().RoomClass["RoomLevel"];
            //等级
            _this.lv = 1;
            //能量
            _this.nen = module.Room.getInstance().RoomClass["RoomPower"];
            _this.jin = 0;
            // private putong:number = 0;//普通地台数量
            // private canba:number = 0;//自助餐吧数量
            // private vrsj:number = 0;//VR试驾数量
            // private ljt1:number = 0;//零件台1数量
            // private ljt2:number = 0;//零件台2数量
            // private ljt3:number = 0;//零件台3数量
            // private dxzpdzq:number = 0;//大型赠品电子墙数量
            // private ljt:number = 0;//垃圾桶数量
            // private dxylj:number = 0;//大型饮料机数量
            // private xxczt:number = 0;//小型操作台数量
            // private yxczt:number = 0;//游戏操作台数量
            // private dxdrczt:number = 0;//大型多人操作台数量
            _this.zanNum = 0; //评价总值
            _this.manyi = 0; //满意度
            //定时消失分享提示
            Laya.timer.loop(300000, _this, function () {
                _this.shareBtn.visible = true;
                _this.WOnShare();
            });
            var headswf = new Laya.MovieClip;
            _this.headKuan.addChild(headswf);
            _this.headKuan.scale(0.666, 0.666);
            headswf.load("res/swf/touxiang.swf", true);
            headswf.play();
            _this.usertext.text = module.Room.getInstance().RoomClass["UserID"];
            // this.headKuan.autoPlay = true;
            // Laya.timer.loop(50, this, this.onHeadKuan);
            _this.lv1.index = Math.floor(_this.lv / 10);
            _this.lv2.index = Math.floor(_this.lv % 10);
            // this.nenimg.on(Laya.Event.CLICK,this,()=>{
            //     // this.jin=99999;
            //     util.HttpRequestUtil.Modifybaobi(1000);
            // 	this.nen=99;
            //     this.manyi = 10000;
            //     this.zan();
            // 	// this.gabi();
            // 	this.nens();
            //     // Laya.stage.fullScreenEnabled = true;
            // });
            //宝币动画
            Laya.timer.loop(1, _this, _this.onStop);
            _this.jinbiicon.on(Laya.Event.CLICK, _this, _this.playjinbi);
            _this.gabi();
            _this.nens();
            Laya.timer.loop(300000, _this, function () {
                if (_this.nen > 98) { }
                else {
                    _this.nen += 1;
                    _this.nens();
                }
            });
            return _this;
            //评估值
            // Laya.timer.once(5000, this, ()=>{
            //     this.zan();
            // })
        }
        /**隐藏分享提示点击事件 */
        Top.prototype.WOnShare = function () {
            var _this = this;
            Laya.timer.once(5000, this, function () {
                Laya.stage.on(Laya.Event.CLICK, _this, _this.onShare);
            });
        };
        /**隐藏分享提示 */
        Top.prototype.onShare = function () {
            this.shareBtn.visible = false;
            Laya.stage.off(Laya.Event.CLICK, this, this.onShare);
        };
        /**满意度改变*/
        Top.prototype.zan = function () {
            var _this = this;
            // this.builds = module.buildingModule.getInstance().buildingAll;
            // if(this.builds!=undefined)
            // {
            // this.putong =0;
            // this.canba =0;
            // this.vrsj =0;
            // this.ljt1 =0;
            // this.ljt2 =0;
            // this.ljt3 =0;
            // this.dxzpdzq =0;
            // this.ljt =0;
            // this.dxylj =0;
            // this.xxczt =0;
            // this.yxczt =0;
            // this.dxdrczt =0;
            var RoomLv = module.Room.getInstance().RoomClass["RoomLevel"];
            // for(var i:number = 0; i<this.builds.length; i++)
            // {
            //     if(this.builds[i].ResourceName == "d100014" || this.builds[i].ResourceName == "d100015" || this.builds[i].ResourceName == "d100016")
            //     {
            //         this.putong += 1;
            //     }else if(this.builds[i].ResourceName == "d100013" || this.builds[i].ResourceName == "d100029"){
            //         this.canba += 1;   
            //     }else if(this.builds[i].ResourceName == "d10009" || this.builds[i].ResourceName == "d100010"){
            //         this.ljt1 += 1;
            //     }else if(this.builds[i].ResourceName == "d100024" || this.builds[i].ResourceName == "d100025"){
            //         this.ljt2 += 1;
            //     }else if(this.builds[i].ResourceName == "d100026" || this.builds[i].ResourceName == "d100027"){
            //         this.ljt3 += 1;
            //     }else if(this.builds[i].ResourceName == "d100012"){
            //         this.dxzpdzq += 1;
            //     }else if(this.builds[i].ResourceName == "d10007"){
            //         this.ljt += 1;
            //     }else if(this.builds[i].ResourceName == "d100022" || this.builds[i].ResourceName == "d10006"){
            //         this.dxylj += 1;
            //     }else if(this.builds[i].ResourceName == "d100018" || this.builds[i].ResourceName == "d10003"){
            //         this.xxczt += 1;
            //     }else if(this.builds[i].ResourceName == "d10008" || this.builds[i].ResourceName == "d100023"){
            //         this.vrsj += 1;
            //     }else if(this.builds[i].ResourceName == "d100031" || this.builds[i].ResourceName == "d100030"){
            //         this.dxdrczt += 1;
            //     }else if(this.builds[i].ResourceName == "d10005" || this.builds[i].ResourceName == "d100020"){
            //         this.yxczt += 1;
            //     }
            // }
            var lastNum = this.zanNum;
            // this.zanNum = this.manyi;
            // this.zanNum = this.manyi+(150*RoomLv)+(75*this.builds.length)+(45*this.putong*1)+(90*this.canba*1)+(90*this.vrsj*1)+(30*this.ljt1*1)+(30*this.ljt2*1)+(30*this.ljt3*1)+(75*this.dxzpdzq*1)+(15*this.ljt*1)+(30*this.dxylj*1)+(45*this.xxczt*1)+(30*this.yxczt*1)+(75*this.dxdrczt*1)+75+150;
            this.zanNum = this.manyi;
            util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&RoomValue=" + this.zanNum + "&manyidu=" + this.zanNum);
            var nowNum = lastNum - this.zanNum;
            //评估值动画
            if (nowNum > 0) {
                this.addless.skin = "top/jian.png";
            }
            else {
                this.addless.skin = "top/jia.png";
            }
            nowNum = Math.abs(nowNum);
            this.jian.y = 73;
            this.zhi.x = 45;
            for (var i = 1; i < 5; i++) {
                if (nowNum > 0) {
                    this["jian" + i].alpha = 1;
                    this["jian" + i].skin = "rankList/org" + (nowNum % 10) + ".png";
                    nowNum = Math.floor(nowNum / 10);
                }
                else {
                    this.zhi.x -= 15;
                    this["jian" + i].alpha = 0;
                }
            }
            Laya.Tween.to(this.jian, { y: 90, alpha: 1 }, 500, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(_this.jian, { y: 105, alpha: 0 }, 300);
            }));
            var zanString = "" + this.zanNum + "";
            // var zanString:string = "50550";
            this.zanNum = Number(zanString);
            for (var g = 1; g < 5; g++) {
                if (this.zanNum < 10000) { //金额＜1万-------------------------------------------
                    this.wan.skin = "top/w.png";
                    this.zd.alpha = 0;
                    this.wan.alpha = 0;
                    this["zan" + g].alpha = 1;
                    if (zanString.split("")[g - 1]) {
                        this["zan" + g].index = Number(zanString.split("")[g - 1]);
                    }
                    else {
                        this["zan" + g].alpha = 0;
                    }
                }
                else if ((this.zanNum >= 10000 && this.zanNum < 100000) || (this.zanNum >= 100000000 && this.zanNum < 1000000000)) { //1万≤金额＜10万----1亿≤金额＜10亿
                    switch (g) {
                        case 1:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this.zd.alpha = 1;
                            this["zan" + g].alpha = 1;
                            this.zd.x = this.zan1.x + 15;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            this["zan" + g].x = this.zd.x + 12;
                            break;
                        case 3:
                            if (Number(zanString.split("")[g - 1])) {
                                this["zan" + g].alpha = 1;
                                this["zan" + g].index = Number(zanString.split("")[g - 1]);
                                this["zan" + g].x = this["zan" + (g - 1)].x + 17;
                                this.wan.alpha = 1;
                                this.wan.x = this["zan" + g].x + 17;
                            }
                            else {
                                this["zan" + g].alpha = 0;
                                this.wan.alpha = 1;
                                this.wan.x = this.zan2.x + 20;
                            }
                            break;
                        default:
                            this["zan" + g].alpha = 0;
                            if (this.zan2.index == 0 && this.zan3.index == 0) {
                                this.zd.alpha = 0;
                                this.zan2.alpha = 0;
                                this.zan3.alpha = 0;
                                this.wan.alpha = 1;
                                this.wan.x = this.zan1.x + 20;
                            }
                            break;
                    }
                    if (this.zanNum >= 100000000 && this.zanNum < 1000000000) {
                        this.wan.skin = "top/yi.png";
                    }
                    else {
                        this.wan.skin = "top/w.png";
                    }
                }
                else if (this.zanNum >= 100000 && this.zanNum < 1000000) { //10万≤金额＜100万--
                    this.wan.skin = "top/w.png";
                    switch (g) {
                        case 1:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].x = this.zan1.x + 17;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 3:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            this.zd.alpha = 1;
                            this.zd.x = this["zan" + (g - 1)].x + 15;
                            this["zan" + g].x = this.zd.x + 17;
                            break;
                        case 4:
                            if (Number(zanString.split("")[g - 1])) {
                                this["zan" + g].alpha = 1;
                                this["zan" + g].index = Number(zanString.split("")[g - 1]);
                                this["zan" + g].x = this["zan" + (g - 1)].x + 17;
                                this.wan.alpha = 1;
                                this.wan.x = this["zan" + g].x + 20;
                            }
                            else {
                                this["zan" + g].alpha = 0;
                                this.wan.x = this.zan3.x + 20;
                            }
                            if (this.zan4.index == 0 && this.zan3.index == 0) {
                                this.zd.alpha = 0;
                                this.zan4.alpha = 0;
                                this.zan3.alpha = 0;
                                this.wan.alpha = 1;
                                this.wan.x = this.zan2.x + 20;
                            }
                            break;
                        default:
                            this["zan" + g].alpha = 0;
                            break;
                    }
                }
                else if ((this.zanNum >= 1000000 && this.zanNum < 10000000) || (this.zanNum >= 10000000000 && this.zanNum < 100000000000)) { //100万≤金额＜1000万   100亿≤金额＜1000亿
                    switch (g) {
                        case 1:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 3:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 4:
                            if (Number(zanString.split("")[g - 1])) {
                                this["zan" + g].alpha = 1;
                                this.zd.alpha = 1;
                                this.wan.alpha = 1;
                                this["zan" + g].index = Number(zanString.split("")[g - 1]);
                                this.zd.x = this.zan3.x + 10;
                                this["zan" + g].x = this.zd.x + 12;
                                this.wan.x = this["zan" + g].x + 20;
                            }
                            else {
                                this.wan.alpha = 1;
                                this["zan" + g].alpha = 0;
                                this.zd.alpha = 0;
                                this.wan.x = this.zan3.x + 20;
                            }
                            break;
                    }
                    if ((this.zanNum >= 10000000000 && this.zanNum < 100000000000)) {
                        this.wan.skin = "top/yi.png";
                    }
                    else {
                        this.wan.skin = "top/w.png";
                    }
                }
                else if ((this.zanNum >= 10000000 && this.zanNum < 100000000) || (this.zanNum >= 100000000000 && this.zanNum < 1000000000000)) { //1000万≤金额＜1亿   1000亿≤金额＜10000亿
                    switch (g) {
                        case 1:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 3:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 4:
                            this["zan" + g].alpha = 1;
                            this.wan.alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            this.wan.x = this.zan4.x + 20;
                            break;
                    }
                    if (this.zanNum >= 100000000000 && this.zanNum < 1000000000000) {
                        this.wan.skin = "top/yi.png";
                    }
                    else {
                        this.wan.skin = "top/w.png";
                    }
                }
                else if (this.zanNum >= 1000000000 && this.zanNum < 10000000000) { //10亿≤金额＜100亿
                    this.wan.skin = "top/yi.png";
                    switch (g) {
                        case 1:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].x = this.zan1.x + 17;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 3:
                            this["zan" + g].alpha = 1;
                            this["zan" + g].index = Number(zanString.split("")[g - 1]);
                            this.zd.alpha = 1;
                            this.zd.x = this["zan" + (g - 1)].x + 15;
                            this["zan" + g].x = this.zd.x + 17;
                            break;
                        case 4:
                            if (Number(zanString.split("")[g - 1])) {
                                this["zan" + g].alpha = 1;
                                this["zan" + g].index = Number(zanString.split("")[g - 1]);
                                this["zan" + g].x = this["zan" + (g - 1)].x + 17;
                                this.wan.alpha = 1;
                                this.wan.x = this["zan" + g].x + 20;
                            }
                            if (this.zan4.index == 0 && this.zan3.index == 0) {
                                this.zd.alpha = 0;
                                this.zan4.alpha = 0;
                                this.zan3.alpha = 0;
                                this.wan.alpha = 1;
                                this.wan.x = this.zan2.x + 20;
                            }
                            break;
                        default:
                            this["zan" + g].alpha = 0;
                            break;
                    }
                }
            } //for   end ----------------
            // }
        };
        //更新宝币数量请调用此函数
        Top.prototype.gabi = function () {
            this.meBox.width = 97;
            this.meBox.height = 31;
            // var jinLen:string = ""+this.jin+"";
            var zanString = "" + this.jin + "";
            this.jin = Number(zanString);
            for (var g = 1; g < 5; g++) {
                if (this.jin < 10000) { //金额＜1万-------------------------------------------
                    this.yi.skin = "top/w.png";
                    this.jd.alpha = 0;
                    this.yi.alpha = 0;
                    this["me" + g].alpha = 1;
                    if (zanString.split("")[g - 1]) {
                        this["me" + g].index = Number(zanString.split("")[g - 1]);
                    }
                    else {
                        this["me" + g].alpha = 0;
                    }
                }
                else if ((this.jin >= 10000 && this.jin < 100000) || (this.jin >= 100000000 && this.jin < 1000000000)) { //1万≤金额＜10万----1亿≤金额＜10亿
                    switch (g) {
                        case 1:
                            this["me" + g].alpha = 1;
                            this["me" + g].index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this.me2.alpha = 1;
                            this.jd.alpha = 1;
                            this.jd.x = this.me1.x + 15;
                            this.me2.x = this.jd.x + 12;
                            this.me2.index = Number(zanString.split("")[g - 1]);
                            break;
                        case 3:
                            if (Number(zanString.split("")[g - 1])) {
                                this.me3.alpha = 1;
                                this.me3.index = Number(zanString.split("")[g - 1]);
                                this.me3.x = this.me2.x + 20;
                                this.yi.alpha = 1;
                                this.yi.x = this.me3.x + 18;
                            }
                            else {
                                this.me3.alpha = 0;
                                this.yi.alpha = 1;
                                this.yi.x = this.me2.x + 18;
                            }
                            break;
                        case 4:
                            this.me4.alpha = 0;
                            if (this.me2.index == 0 && this.me3.index == 0) {
                                this.jd.alpha = 0;
                                this.me2.alpha = 0;
                                this.me3.alpha = 0;
                                this.yi.x = this.me1.x + 20;
                            }
                            break;
                    }
                    if (this.jin >= 100000000 && this.jin < 1000000000) {
                        this.yi.skin = "top/yi.png";
                    }
                    else {
                        this.yi.skin = "top/w.png";
                    }
                }
                else if ((this.jin >= 100000 && this.jin < 1000000) || (this.jin >= 1000000000 && this.jin < 10000000000)) { //10万≤金额＜100万--10亿≤金额＜100亿
                    if ((this.jin >= 1000000000 && this.jin < 10000000000)) {
                        this.yi.skin = "top/yi.png";
                    }
                    else {
                        this.yi.skin = "top/w.png";
                    }
                    switch (g) {
                        case 1:
                            this.me1.alpha = 1;
                            this.me1.index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this["me" + g].alpha = 1;
                            this["me" + g].index = Number(zanString.split("")[g - 1]);
                            this.me2.x = this.me1.x + 18;
                            break;
                        case 3:
                            this.me3.alpha = 1;
                            this.jd.alpha = 1;
                            this.jd.x = this.me2.x + 12;
                            this.me3.x = this.jd.x + 20;
                            this.me3.index = Number(zanString.split("")[g - 1]);
                            break;
                        case 4:
                            if (Number(zanString.split("")[g - 1])) {
                                this.me4.alpha = 1;
                                this.yi.alpha = 1;
                                this.me4.x = this.me3.x + 18;
                                this.yi.x = this.me4.x + 18;
                                this.me4.index = Number(zanString.split("")[g - 1]);
                            }
                            else {
                                this.me4.alpha = 0;
                                this.yi.alpha = 1;
                                this.yi.x = this.me3.x + 18;
                            }
                            if (this.me3.index == 0 && this.me4.index == 0) {
                                this.jd.alpha = 0;
                                this.yi.alpha = 1;
                                this.me3.alpha = 0;
                                this.me4.alpha = 0;
                                this.yi.x = this.me2.x + 18;
                            }
                            break;
                        default:
                            this["zan" + g].alpha = 0;
                            break;
                    }
                }
                else if ((this.jin >= 1000000 && this.jin < 10000000) || (this.jin >= 10000000000 && this.jin < 100000000000)) { //100万≤金额＜1000万   100亿≤金额＜1000亿
                    switch (g) {
                        case 1:
                            this.me1.alpha = 1;
                            this.me1.index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this.me2.alpha = 1;
                            this.me2.index = Number(zanString.split("")[g - 1]);
                            this.me2.x = this.me1.x + 18;
                            break;
                        case 3:
                            this.me3.alpha = 1;
                            this.me3.index = Number(zanString.split("")[g - 1]);
                            this.me3.x = this.me2.x + 18;
                            break;
                        case 4:
                            if (Number(zanString.split("")[g - 1])) {
                                this.me4.alpha = 1;
                                this.jd.alpha = 1;
                                this.yi.alpha = 1;
                                this.jd.x = this.me3.x + 18;
                                this.me4.x = this.jd.x + 12;
                                this.yi.x = this.me4.x + 18;
                                this.me4.index = Number(zanString.split("")[g - 1]);
                            }
                            else {
                                this.me4.alpha = 0;
                                this.jd.alpha = 0;
                                this.yi.alpha = 1;
                                this.yi.x = this.me3.x + 20;
                            }
                            break;
                    }
                    if ((this.jin >= 10000000000 && this.jin < 100000000000)) {
                        this.yi.skin = "top/yi.png";
                    }
                    else {
                        this.yi.skin = "top/w.png";
                    }
                }
                else if ((this.jin >= 10000000 && this.jin < 100000000) || (this.jin >= 100000000000 && this.jin < 1000000000000)) { //1000万≤金额＜1亿   1000亿≤金额＜10000亿
                    switch (g) {
                        case 1:
                            this.me1.alpha = 1;
                            this.me1.index = Number(zanString.split("")[g - 1]);
                            break;
                        case 2:
                            this.me2.alpha = 1;
                            this.me2.index = Number(zanString.split("")[g - 1]);
                            this.me2.x = this.me1.x + 18;
                            break;
                        case 3:
                            this.me3.alpha = 1;
                            this.me3.index = Number(zanString.split("")[g - 1]);
                            this.me3.x = this.me2.x + 18;
                            break;
                        case 4:
                            this.me4.alpha = 1;
                            this.jd.alpha = 0;
                            this.yi.alpha = 1;
                            this.me4.index = Number(zanString.split("")[g - 1]);
                            this.me4.x = this.me3.x + 18;
                            this.yi.x = this.me4.x + 18;
                            break;
                    }
                    if (this.jin >= 100000000000 && this.jin < 1000000000000) {
                        this.yi.skin = "top/yi.png";
                    }
                    else {
                        this.yi.skin = "top/w.png";
                    }
                }
            }
            //宝币任务
            // if(module.missionModule.getInstance().taskProgress.length>0)
            // {
            //     var Mission98:number=module.missionModule.getInstance().taskProgress[0]["Mission98"];
            //     if(Mission98==null){Mission98=0}
            //     if(Mission98<this.jin&&Mission98<20000&&module.missionModule.getInstance().taskProgress.length>0)
            //     {
            //         Mission98 = this.jin;
            //         util.HttpRequestUtil.sendUpdataMisson("RoomID="+module.Room.getInstance().RoomID+"&Mission98="+Mission98);
            //     }
            // }
            util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&RoomCoin=" + this.jin + "&baobinum=" + this.jin + "&createbnum=" + util.HttpRequestUtil.cNum + "&outbnum=" + util.HttpRequestUtil.jNum);
        };
        //更新能量数量请调用此函数
        Top.prototype.nens = function () {
            var nenLen = "" + this.nen + "";
            this.nen1.index = 9;
            this.nen2.index = 9;
            this.nen2.alpha = 1;
            switch (nenLen.length) {
                case 0:
                    this.nen1.index = 0;
                    this.nen2.alpha = 0;
                    break;
                case 1:
                    this.nen1.index = this.nen;
                    this.nen2.alpha = 0;
                    break;
                case 2:
                    this.nen1.index = Number(nenLen.slice(0, 1));
                    this.nen2.index = Number(nenLen.slice(1));
                    this.nen2.alpha = 1;
                    break;
                case 3:
                    this.nen1.index = 9;
                    this.nen2.index = 9;
                    this.nen2.alpha = 1;
                    break;
            }
            util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&RoomPower=" + this.nen);
        };
        //等级
        Top.prototype.topLv = function (lvNum) {
            var supportNum = "" + (lvNum + 1) + "";
            switch (supportNum.length) {
                case 1:
                    this.lv1.index = Number(supportNum);
                    this.lv1.alpha = 1;
                    this.lv2.alpha = 0;
                    break;
                case 2:
                    this.lv1.index = Number(supportNum.slice(0, 1));
                    this.lv2.index = Number(supportNum.slice(1));
                    this.lv2.alpha = 1;
                    break;
            }
        };
        Top.prototype.playjinbi = function () {
            if (this.jinbi.index != 0) {
                this.guanquan.play();
            }
            else {
                this.jinbi.play();
            }
        };
        Top.prototype.onStop = function () {
            if (this.jinbi.index == 10) {
                this.jinbi.stop();
                this.jinbi.index = 0;
            }
            if (this.guanquan.index == 7) {
                this.guanquan.stop();
            }
        };
        Top.getInstance = function () {
            if (this._instance == null) {
                this._instance = new Top;
                Laya.stage.addChild(this._instance);
                // this._instance.show();
                this._instance.zOrder = 999999;
                this._instance.visible = false;
            }
            return this._instance;
        };
        return Top;
    }(ui.topUI));
    wuling.Top = Top;
})(wuling || (wuling = {}));
//# sourceMappingURL=Top.js.map