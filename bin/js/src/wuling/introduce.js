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
    var introduce = /** @class */ (function (_super) {
        __extends(introduce, _super);
        function introduce() {
            var _this = _super.call(this) || this;
            _this.cam02.visible = false;
            _this.cam03.visible = false;
            Laya.Tween.to(_this.baImg, { alpha: 0 }, 1000);
            var xgss1 = new Laya.MovieClip;
            xgss1.load("res/swf/xgss.swf", true);
            _this.cam01.addChild(xgss1);
            var xgss2 = new Laya.MovieClip;
            xgss2.load("res/swf/xgss.swf", true);
            _this.cam02.addChild(xgss2);
            var xgss3 = new Laya.MovieClip;
            xgss3.load("res/swf/xgss.swf", true);
            _this.cam03.addChild(xgss3);
            //1
            Laya.Tween.to(_this.cam01, { x: -1041, y: -743 }, 5000, null, new Laya.Handler(_this, function () {
                Laya.Tween.to(_this.baImg, { alpha: 0 }, 1000);
                _this.cam01.visible = false;
                _this.cam02.visible = true;
                //2
                Laya.Tween.to(_this.cam02, { x: 0, y: -749 }, 5000, null, new Laya.Handler(_this, function () {
                    _this.cam02.visible = false;
                    _this.cam03.visible = true;
                    Laya.Tween.to(_this.baImg, { alpha: 0 }, 1000);
                    //3
                    Laya.Tween.to(_this.cam03, { x: -1045, y: -744 }, 5000);
                    Laya.timer.once(4000, _this, function () {
                        Laya.Tween.to(_this.baImg, { alpha: 1 }, 1000);
                    });
                    Laya.timer.once(5000, _this, function () {
                        _this.cam03.visible = false;
                        Laya.Tween.to(_this.baImg, { alpha: 0 }, 1000, null, new Laya.Handler(_this, function () {
                            _this.removeSelf();
                            wuling.map.getInstance().newclick();
                        }));
                    });
                }));
                Laya.timer.once(4000, _this, function () {
                    Laya.Tween.to(_this.baImg, { alpha: 1 }, 1000);
                });
            }));
            Laya.timer.once(4000, _this, function () {
                Laya.Tween.to(_this.baImg, { alpha: 1 }, 1000);
            });
            return _this;
        }
        introduce.getInstancess = function () {
            if (this._instance == null) {
                this._instance = new introduce;
                Laya.stage.addChild(this._instance);
                this._instance.zOrder = 9999999;
            }
            return this._instance;
        };
        return introduce;
    }(ui.introduceUI));
    wuling.introduce = introduce;
})(wuling || (wuling = {}));
//# sourceMappingURL=introduce.js.map