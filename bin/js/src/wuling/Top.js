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
            _this.jin = module.Room.getInstance().RoomClass["RoomCoin"];
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
            //金币动画
            Laya.timer.loop(1, _this, _this.onStop);
            _this.jinbiicon.on(Laya.Event.CLICK, _this, _this.playjinbi);
            _this.gabi();
            _this.nens();
            if (_this.nen < 99) {
                Laya.timer.loop(21000, _this, function () {
                    if (_this.nen > 98) {
                        Laya.timer.clear(_this, function () { });
                    }
                    _this.nen += 1; //
                    _this.nens();
                });
            }
            return _this;
        }
        //更新金币数量请调用此函数
        Top.prototype.gabi = function () {
            var jinLen = "" + this.jin + "";
            switch (jinLen.length) {
                case 0:
                    this.me1.index = 0;
                    this.me2.alpha = 0;
                    this.me3.alpha = 0;
                    this.me4.alpha = 0;
                    this.me5.alpha = 0;
                    this.me6.alpha = 0;
                    break;
                case 1:
                    this.me1.index = this.jin;
                    this.me1.alpha = 1;
                    this.me2.alpha = 0;
                    this.me3.alpha = 0;
                    this.me4.alpha = 0;
                    this.me5.alpha = 0;
                    this.me6.alpha = 0;
                    break;
                case 2:
                    this.me1.index = Number(jinLen.slice(0, 1));
                    this.me2.index = Number(jinLen.slice(1));
                    this.me1.alpha = 1;
                    this.me2.alpha = 1;
                    this.me3.alpha = 0;
                    this.me4.alpha = 0;
                    this.me5.alpha = 0;
                    this.me6.alpha = 0;
                    break;
                case 3:
                    this.me1.index = Number(jinLen.slice(0, 1));
                    this.me2.index = Number(jinLen.slice(1, 2));
                    this.me3.index = Number(jinLen.slice(2));
                    this.me1.alpha = 1;
                    this.me2.alpha = 1;
                    this.me3.alpha = 1;
                    this.me4.alpha = 0;
                    this.me5.alpha = 0;
                    this.me6.alpha = 0;
                    break;
                case 4:
                    this.me1.index = Number(jinLen.slice(0, 1));
                    this.me2.index = Number(jinLen.slice(1, 2));
                    this.me3.index = Number(jinLen.slice(2, 3));
                    this.me4.index = Number(jinLen.slice(3));
                    this.me1.alpha = 1;
                    this.me2.alpha = 1;
                    this.me3.alpha = 1;
                    this.me4.alpha = 1;
                    this.me5.alpha = 0;
                    this.me6.alpha = 0;
                    break;
                case 5:
                    this.me1.index = Number(jinLen.slice(0, 1));
                    this.me2.index = Number(jinLen.slice(1, 2));
                    this.me3.index = Number(jinLen.slice(2, 3));
                    this.me4.index = Number(jinLen.slice(3, 4));
                    this.me5.index = Number(jinLen.slice(4));
                    this.me1.alpha = 1;
                    this.me2.alpha = 1;
                    this.me3.alpha = 1;
                    this.me4.alpha = 1;
                    this.me5.alpha = 1;
                    this.me6.alpha = 0;
                    break;
                case 6:
                    this.me1.index = Number(jinLen.slice(0, 1));
                    this.me2.index = Number(jinLen.slice(1, 2));
                    this.me3.index = Number(jinLen.slice(2, 3));
                    this.me4.index = Number(jinLen.slice(3, 4));
                    this.me5.index = Number(jinLen.slice(4, 5));
                    this.me6.index = Number(jinLen.slice(5));
                    this.me1.alpha = 1;
                    this.me2.alpha = 1;
                    this.me3.alpha = 1;
                    this.me4.alpha = 1;
                    this.me5.alpha = 1;
                    this.me6.alpha = 1;
                    break;
            }
            util.HttpRequestUtil.sendSetLevel("UserID=" + module.Room.getInstance().RoomClass["UserID"] + "&" + "RoomID=" + module.Room.getInstance().RoomID + "&RoomCoin=" + this.jin);
        };
        //更新能量数量请调用此函数
        Top.prototype.nens = function () {
            var nenLen = "" + this.nen + "";
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
                this._instance.zOrder = 99999;
            }
            return this._instance;
        };
        return Top;
    }(ui.topUI));
    wuling.Top = Top;
})(wuling || (wuling = {}));
//# sourceMappingURL=Top.js.map