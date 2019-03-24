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
    var reloading = /** @class */ (function (_super) {
        __extends(reloading, _super);
        function reloading() {
            var _this = _super.call(this) || this;
            //Item数据
            _this.list.array = module.reloadingModule.getInstance().ItemData;
            _this.shutBtn.on(Laya.Event.CLICK, _this, _this.onClick);
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            wuling.Bottom.getInstance().text1.text = "这里的衣服都很漂亮~~好想试试~~！！";
            return _this;
        }
        reloading.prototype.renderHandler = function (item) {
            item.show(this);
        };
        reloading.prototype.onClick = function (event) {
            switch (event.currentTarget) {
                case this.shutBtn:
                    this.shutDown();
                    break;
            }
        };
        /**关闭换装页面 */
        reloading.prototype.shutDown = function () {
            this.close();
            wuling.map.getInstance().person1.figureStart();
            wuling.map.getInstance().person2.figureStart();
            wuling.map.getInstance().person3.figureStart();
            wuling.map.getInstance().person4.figureStart();
            wuling.map.getInstance().person5.figureStart();
            wuling.Bottom.getInstance().text1.visible = true;
            wuling.Bottom.getInstance().text2.visible = false;
            wuling.Bottom.getInstance().text3.visible = false;
            wuling.Bottom.getInstance().goumai.visible = false;
            wuling.Bottom.getInstance().btmclick();
        };
        return reloading;
    }(ui.reloadingUI));
    wuling.reloading = reloading;
})(wuling || (wuling = {}));
//# sourceMappingURL=reloading.js.map