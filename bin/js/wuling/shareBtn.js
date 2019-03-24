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
    var shareBtn = /** @class */ (function (_super) {
        __extends(shareBtn, _super);
        function shareBtn() {
            var _this = _super.call(this) || this;
            _this.shareImg.on(Laya.Event.CLICK, _this, _this.onClick);
            return _this;
        }
        shareBtn.prototype.onClick = function () {
            var evaluationView = wuling.evaluationView.getInstance();
            evaluationView.visible = true;
            this.visible = false;
            evaluationView.alpha = 0;
            //界面显示
            // Laya.timer.once(4000,this,()=>{
            Laya.Tween.to(evaluationView, { alpha: 1 }, 1000, null, new Laya.Handler(evaluationView, evaluationView.onEvent));
            // });
        };
        shareBtn.getInstance = function () {
            if (this._instance == null) {
                this._instance = new shareBtn;
                Laya.stage.addChild(this._instance);
                // this._instance.show();
                this._instance.zOrder = 999999;
                this._instance.left = 184;
                this._instance.bottom = 30;
            }
            return this._instance;
        };
        return shareBtn;
    }(ui.shareBtnUI));
    wuling.shareBtn = shareBtn;
})(wuling || (wuling = {}));
//# sourceMappingURL=shareBtn.js.map