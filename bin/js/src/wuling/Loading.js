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
    var Loading = /** @class */ (function (_super) {
        __extends(Loading, _super);
        function Loading() {
            var _this = _super.call(this) || this;
            _this.sta = 0;
            _this.loading.play();
            Laya.timer.loop(100, _this, _this.onLoop);
            return _this;
        }
        Loading.prototype.onLoop = function () {
            this.sta++;
            if (this.pre.value == 1) {
                // wuling.map.getInstance();
                // wuling.Bottom.getInstance();
                // wuling.Top.getInstance();
                wuling.begin.getInstance();
                Laya.timer.clear(this, this.onLoop);
                this.visible = false;
                this.removeSelf();
            }
            else {
                this.prenumber.text = this.sta + "%";
                this.pre.value = this.sta / 100;
            }
        };
        Loading.getInstances = function () {
            if (this._instances == null) {
                this._instances = new Loading;
                this._instances.zOrder = 999999;
                Laya.stage.addChild(this._instances);
            }
            return this._instances;
        };
        return Loading;
    }(ui.loadingUI));
    wuling.Loading = Loading;
})(wuling || (wuling = {}));
//# sourceMappingURL=Loading.js.map