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
            _this.sanjiaoAni.visible = false;
            //任务动画
            var renwuAni = new Laya.MovieClip();
            _this.renwu.addChild(renwuAni);
            renwuAni.load("res/swf/renwu.swf", true);
            renwuAni.scale(0.666, 0.666);
            return _this;
            // this.nanaView.on(Laya.Event.CLICK, this, this.btmclick);
        }
        Bottom.prototype.onHander = function () {
            module.mapModule.getInstance().obgcanku();
        };
        /**关闭大Nana动画 */
        Bottom.prototype.btmclick = function () {
            if (this.nanaView.visible) {
                this.nanaView.nana_0.play();
                Laya.Tween.clearAll(this.text1);
                Laya.Tween.to(this.text1, { alpha: 0 }, 10);
            }
        };
        Bottom.getInstance = function () {
            if (this._instance == null) {
                this._instance = new Bottom;
                Laya.stage.addChild(this._instance);
                // this._instance.show();
                this._instance.zOrder = 99999;
                this._instance.visible = false;
            }
            return this._instance;
        };
        Bottom.prototype.stop2 = function () {
            this.nanaView.nana_0.stop();
            this.nanaView.visible = false;
            this.nanaicon.visible = true;
            this.nanatext.visible = true;
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
        //小nana点击事件
        Bottom.prototype.shownana = function () {
            this.openNana();
            var menu = new wuling.menu;
            menu.width = Laya.stage.width;
            Laya.stage.addChild(menu);
            menu.popup(true, true);
        };
        /**拆除建筑打开 */
        Bottom.prototype.caichu = function () {
            this.openNana();
            this.text1.text = "要拆徐该建筑吗？";
            this.demolitionBox.alpha = 0;
            this.demolitionBox.visible = true;
            Laya.Tween.to(this.demolitionBox, { alpha: 1 }, 1000);
        };
        //打开大nana
        Bottom.prototype.openNana = function () {
            //点击nana时随机对话
            var text1Wen;
            switch (Math.floor(Math.random() * 3 + 1)) {
                case 1:
                    text1Wen = "“我们一起继续管理工作吧！”";
                    break;
                case 2:
                    text1Wen = "“接下来我们要做什么呢？”";
                    break;
                case 3:
                    text1Wen = "“最近媒体都在谈论我们的智慧门店呢！”";
                    break;
            }
            this.text1.text = text1Wen;
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
            this.nanaicon.visible = false;
            wuling.Bottom.getInstance().boximg.visible = false;
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
            // var mission:laya.ui.Dialog = new wuling.mission;
            // this.addChild(mission);
            this.openNana();
            var mission = wuling.mission.getInstance();
            mission.width = Laya.stage.width;
            mission.popup(true, true);
        };
        /**nana点击事件 */
        Bottom.prototype.nanaOnClick = function () {
            this.nanaicon.on(Laya.Event.CLICK, this, this.shownana);
        };
        /**隐藏开始任务提示 */
        Bottom.prototype.missionPrompt = function () {
            var _this = this;
            this.boximg.offAll();
            Laya.Tween.to(this.boximg, { alpha: 0 }, 1000, null, new Laya.Handler(this, function () {
                _this.boximg.visible = false;
            }));
        };
        /**开始任务提示点击事件 */
        Bottom.prototype.onMissionPrompt = function () {
            var _this = this;
            this.boximg.on(Laya.Event.CLICK, this, function () {
                _this.missionPrompt();
                // var mission:laya.ui.Dialog = new wuling.mission;
                // wuling.map.getInstance().addChild(mission);
                var mission = wuling.mission.getInstance();
                mission.width = Laya.stage.width;
                //打开页面
                mission.popup(false, true);
            });
        };
        /**提示宝币不足 */
        Bottom.prototype.noJin = function () {
            var _this = this;
            this.boximg.offAll();
            this.boximg.visible = true;
            this.boxText.text = "宝币不足";
            Laya.Tween.clearAll(this.boximg);
            Laya.timer.clearAll(this);
            Laya.Tween.to(this.boximg, { alpha: 1 }, 1000);
            Laya.timer.once(2000, this, function () {
                Laya.Tween.to(_this.boximg, { alpha: 0 }, 1000, null, new Laya.Handler(_this, function () {
                    _this.boximg.visible = false;
                }));
            });
        };
        /**提示能量不足 */
        Bottom.prototype.noNen = function () {
            var _this = this;
            this.boximg.offAll();
            this.boximg.visible = true;
            this.boxText.text = "能量不足";
            Laya.Tween.clearAll(this.boximg);
            Laya.timer.clearAll(this);
            Laya.Tween.to(this.boximg, { alpha: 1 }, 1000);
            Laya.timer.once(2000, this, function () {
                Laya.Tween.to(_this.boximg, { alpha: 0 }, 1000, null, new Laya.Handler(_this, function () {
                    _this.boximg.visible = false;
                }));
            });
        };
        /**提示宝币和能量不足 */
        Bottom.prototype.noJinNen = function () {
            var _this = this;
            this.boximg.offAll();
            this.boximg.visible = true;
            this.boxText.text = "宝币和能量不足";
            Laya.Tween.clearAll(this.boximg);
            Laya.timer.clearAll(this);
            Laya.Tween.to(this.boximg, { alpha: 1 }, 1000);
            Laya.timer.once(2000, this, function () {
                Laya.Tween.to(_this.boximg, { alpha: 0 }, 1000, null, new Laya.Handler(_this, function () {
                    _this.boximg.visible = false;
                }));
            });
        };
        /**打开小nana任务解说 */
        Bottom.prototype.missionText = function (data) {
            this.boximg.offAll();
            this.boximg.visible = true;
            this.boxText.text = data;
            Laya.Tween.to(this.boximg, { alpha: 1 }, 1000);
        };
        /**关闭小nana任务解说 */
        Bottom.prototype.ShutDownMission = function () {
            var _this = this;
            Laya.Tween.to(this.boximg, { alpha: 0 }, 1000, null, new Laya.Handler(this, function () {
                _this.boximg.visible = false;
            }));
        };
        return Bottom;
    }(ui.bottomUI));
    wuling.Bottom = Bottom;
})(wuling || (wuling = {}));
//# sourceMappingURL=Bottom.js.map