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
    var goldCoins = /** @class */ (function (_super) {
        __extends(goldCoins, _super);
        function goldCoins() {
            var _this = _super.call(this) || this;
            /**金币数量 */
            _this.jin = 0;
            _this.goldImg.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.on(Laya.Event.CLICK, _this, _this.onHander);
            return _this;
            // Laya.timer.once(700,this,this.onHander);
        }
        /**增加金币数 */
        goldCoins.prototype.setJin = function () {
            if (this.jin < 5) {
                this.jin += 1;
            }
        };
        goldCoins.prototype.onHander = function () {
            var _this = this;
            //新手教程
            if (wuling.map.getInstance().guide == true) {
                wuling.map.getInstance().newclick();
                wuling.map.getInstance().nextStep();
            }
            for (var i = 0; i < this.jin * 90; i = i + 90) {
                Laya.timer.once(i, this, function () {
                    var jings = new wuling.jings;
                    jings.x = _this.x + 10;
                    jings.y = _this.y;
                    jings.zOrder = 3001;
                    wuling.map.getInstance().mapImg.addChild(jings);
                });
            }
            Laya.timer.once(this.jin * 100, this, function () {
                wuling.Top.getInstance().jin += _this.jin;
                _this.jin = 0;
                wuling.Top.getInstance().gabi();
            });
            Laya.timer.loop(100, this, function () {
                Laya.Tween.to(_this.coinsImg, { scaleX: 0.7, scaleY: 0.7 }, 50, null, Laya.Handler.create(_this, function () {
                    Laya.Tween.to(_this.coinsImg, { scaleX: 1, scaleY: 1 }, 50);
                }));
                Laya.Tween.to(_this.apertureImg, { scaleX: 1.7, scaleY: 1.7, alpha: 0.5 }, 50, null, Laya.Handler.create(_this, function () {
                    Laya.Tween.to(_this.apertureImg, { scaleX: 1, scaleY: 1, alpha: 1 }, 1);
                }));
            });
            Laya.timer.once(500, this, function () {
                // this.removeSelf();
                _this.visible = false;
                Laya.timer.clearAll(_this);
            });
        };
        goldCoins.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.goldImg:
                    break;
                default:
                    break;
            }
        };
        return goldCoins;
    }(ui.goldCoinsUI));
    wuling.goldCoins = goldCoins;
})(wuling || (wuling = {}));
//# sourceMappingURL=goldCoins.js.map