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
    var evaluationView = /** @class */ (function (_super) {
        __extends(evaluationView, _super);
        function evaluationView() {
            var _this = _super.call(this) || this;
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onReturn);
            return _this;
        }
        evaluationView.prototype.onReturn = function () {
            this.visible = false;
            wuling.shareBtn.getInstance().visible = true;
        };
        evaluationView.prototype.onEvent = function () {
            this.tiBtn.on(Laya.Event.CLICK, this, this.onClick);
            this.xin1.on(Laya.Event.CLICK, this, this.onXin);
            this.xin2.on(Laya.Event.CLICK, this, this.onXin);
            this.xin3.on(Laya.Event.CLICK, this, this.onXin);
            this.xin4.on(Laya.Event.CLICK, this, this.onXin);
            this.xin5.on(Laya.Event.CLICK, this, this.onXin);
        };
        evaluationView.getInstance = function () {
            if (this._instance == null) {
                this._instance = new evaluationView;
                this._instance.zOrder = 999999;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        //确定跳转链接
        evaluationView.prototype.onClick = function () {
            Laya.Browser.window.location.href = "http://www.wulingyouxi.club/game/wuling9103/";
            // window.open("http://www.wulingyouxi.club/game/wuling9062/");
        };
        //星星点击触发函数
        evaluationView.prototype.onXin = function (even) {
            switch (even.currentTarget) {
                case this.xin1:
                    this.xin1.alpha = 1;
                    this.xin2.alpha = 0;
                    this.xin3.alpha = 0;
                    this.xin4.alpha = 0;
                    this.xin5.alpha = 0;
                    this.text1.skin = "share/text1.png";
                    break;
                case this.xin2:
                    this.xin1.alpha = 1;
                    this.xin2.alpha = 1;
                    this.xin3.alpha = 0;
                    this.xin4.alpha = 0;
                    this.xin5.alpha = 0;
                    this.text1.skin = "share/text2.png";
                    break;
                case this.xin3:
                    this.xin1.alpha = 1;
                    this.xin2.alpha = 1;
                    this.xin3.alpha = 1;
                    this.xin4.alpha = 0;
                    this.xin5.alpha = 0;
                    this.text1.skin = "share/text3.png";
                    break;
                case this.xin4:
                    this.xin1.alpha = 1;
                    this.xin2.alpha = 1;
                    this.xin3.alpha = 1;
                    this.xin4.alpha = 1;
                    this.xin5.alpha = 0;
                    this.text1.skin = "share/text4.png";
                    break;
                case this.xin5:
                    this.xin1.alpha = 1;
                    this.xin2.alpha = 1;
                    this.xin3.alpha = 1;
                    this.xin4.alpha = 1;
                    this.xin5.alpha = 1;
                    this.text1.skin = "share/text5.png";
                    break;
            }
        };
        return evaluationView;
    }(ui.evaluationViewUI));
    wuling.evaluationView = evaluationView;
})(wuling || (wuling = {}));
//# sourceMappingURL=evaluationView.js.map