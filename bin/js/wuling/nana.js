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
    var nana = /** @class */ (function (_super) {
        __extends(nana, _super);
        function nana() {
            var _this = _super.call(this) || this;
            // Laya.timer.once(1000, this, this.begin);
            //nana名字动画
            var aninana = new Laya.MovieClip();
            _this.nanaLv.addChild(aninana);
            aninana.load("res/swf/nanaxiao.swf", true);
            aninana.scale(0.666, 0.666);
            aninana.play();
            //星光动画
            var xing = new Laya.MovieClip();
            _this.xinguang.addChild(xing);
            xing.load("res/swf/xing.swf", true);
            xing.scale(0.666, 0.666);
            xing.play();
            return _this;
        }
        nana.getInstance = function () {
            if (this._instance == null) {
                this._instance = new nana;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        return nana;
    }(ui.nanaUI));
    wuling.nana = nana;
})(wuling || (wuling = {}));
//# sourceMappingURL=nana.js.map