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
    var shareView = /** @class */ (function (_super) {
        __extends(shareView, _super);
        function shareView() {
            var _this = _super.call(this) || this;
            _this.returnBtn.on(Laya.Event.CLICK, _this, function () {
                _this.close();
                wuling.map.getInstance().person1.figureStart();
                wuling.map.getInstance().person2.figureStart();
                wuling.map.getInstance().person3.figureStart();
                wuling.map.getInstance().person4.figureStart();
                wuling.map.getInstance().person5.figureStart();
                wuling.Bottom.getInstance().nanaOnClick();
                wuling.Bottom.getInstance().btmclick();
            });
            return _this;
        }
        return shareView;
    }(ui.shareViewUI));
    wuling.shareView = shareView;
})(wuling || (wuling = {}));
//# sourceMappingURL=shareView.js.map