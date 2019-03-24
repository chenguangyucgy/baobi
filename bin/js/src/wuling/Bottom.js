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
    var Bottom = /** @class */ (function (_super) {
        __extends(Bottom, _super);
        function Bottom() {
            var _this = _super.call(this) || this;
            _this.nanaicon.on(Laya.Event.CLICK, _this, _this.shownana);
            _this.renwu.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.nanaView.nana.on(Laya.Event.COMPLETE, _this, _this.stop);
            _this.nanaView.nana_0.on(Laya.Event.COMPLETE, _this, _this.stop2);
            _this.goumai.on(Laya.Event.CLICK, _this, _this.onHander);
            _this.huodong.visible = false;
            _this.liwu.visible = false;
            _this.renwu.visible = false;
            _this.chengjiu.visible = false;
            var aninana = new Laya.MovieClip();
            _this.nanatext.addChild(aninana);
            aninana.load("res/swf/nanaxiao.swf", true);
            aninana.scale(0.666, 0.666);
            return _this;
            // this.nanaView.on(Laya.Event.CLICK, this, this.btmclick);
        }
        Bottom.prototype.onHander = function () {
            module.mapModule.getInstance().obgcanku();
        };
        Bottom.prototype.btmclick = function () {
            if (this.nanaView.visible) {
                this.nanaView.nana_0.play();
                Laya.Tween.to(this.text1, { alpha: 0 }, 10);
            }
        };
        Bottom.getInstance = function () {
            if (this._instance == null) {
                this._instance = new Bottom;
                Laya.stage.addChild(this._instance);
                // this._instance.show();
                this._instance.zOrder = 99999;
            }
            return this._instance;
        };
        Bottom.prototype.stop2 = function () {
            this.nanaView.nana_0.stop();
            this.nanaView.visible = false;
            this.nanaicon.visible = true;
            this.nanaicon.alpha = 1;
            this.nanaicon.scaleX = 1;
            this.nanaicon.scaleY = 1;
            this.nanatext.alpha = 1;
            this.nanatext.scaleX = 1;
            this.nanatext.scaleY = 1;
            this.chengjiu.alpha = 1;
            this.chengjiu.scaleX = 1;
            this.chengjiu.scaleY = 1;
            this.liwu.alpha = 1;
            this.liwu.scaleX = 1;
            this.liwu.scaleY = 1;
            this.renwu.alpha = 1;
            this.renwu.scaleX = 1;
            this.renwu.scaleY = 1;
            this.huodong.alpha = 1;
            this.huodong.scaleX = 1;
            this.huodong.scaleY = 1;
            // Laya.Tween.to(this.nanaicon, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
            // Laya.Tween.to(this.nanatext, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
            // Laya.Tween.to(this.chengjiu, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
            // Laya.Tween.to(this.liwu, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
            // Laya.Tween.to(this.renwu, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
            // Laya.Tween.to(this.huodong, {scaleX: 1, scaleY: 1, alpha: 1}, 150);
        };
        Bottom.prototype.stop = function () {
            this.nanaView.nana.stop();
            this.nanaView.nana.index = 20;
        };
        Bottom.prototype.shownana = function () {
            if (wuling.map.getInstance().guide == true) {
                this.nanaicon.offAll();
                wuling.map.getInstance().newclick();
            }
            Laya.Tween.to(this.nanaicon, { scaleX: 1.9, scaleY: 1.9, alpha: 0 }, 150);
            Laya.Tween.to(this.nanatext, { scaleX: 1.9, scaleY: 1.9, alpha: 0 }, 150);
            Laya.Tween.to(this.chengjiu, { scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 150);
            Laya.Tween.to(this.liwu, { scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 150);
            Laya.Tween.to(this.renwu, { scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 150);
            Laya.Tween.to(this.huodong, { scaleX: 0.5, scaleY: 0.5, alpha: 0 }, 150);
            Laya.timer.once(110, this, this.show);
            this.nanaicon.visible = false;
            var menu = new wuling.menu;
            this.addChild(menu);
            menu.popup(true, true);
        };
        Bottom.prototype.show = function () {
            var _this = this;
            this.nanaView.visible = true;
            this.nanaView.nana.play();
            Laya.timer.once(200, this, function () {
                Laya.Tween.to(_this.text1, { alpha: 1 }, 700);
            });
        };
        Bottom.prototype.onclick = function () {
            var mission = new wuling.mission;
            this.addChild(mission);
            mission.popup(true, true);
        };
        /**nana点击事件 */
        Bottom.prototype.nanaOnClick = function () {
            this.nanaicon.on(Laya.Event.CLICK, this, this.shownana);
        };
        return Bottom;
    }(ui.bottomUI));
    wuling.Bottom = Bottom;
})(wuling || (wuling = {}));
//# sourceMappingURL=Bottom.js.map