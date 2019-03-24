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
    var cangkuItem = /** @class */ (function (_super) {
        __extends(cangkuItem, _super);
        function cangkuItem() {
            return _super.call(this) || this;
        }
        cangkuItem.prototype.show = function (item, index) {
            this.cangImg.skin = this.dataSource["url"];
            switch (this.dataSource["money"].length) {
                case 0:
                    this.nu1.skin = "cangku/0.png";
                    this.nu2.alpha = 0;
                    break;
                case 1:
                    this.nu1.skin = "cangku/" + this.dataSource["money"].slice(0, 1) + ".png";
                    this.nu1.alpha = 1;
                    this.nu2.alpha = 0;
                    break;
                case 2:
                    this.nu1.skin = "cangku/" + this.dataSource["money"].slice(0, 1) + ".png";
                    this.nu2.skin = "cangku/" + this.dataSource["money"].slice(1) + ".png";
                    this.nu1.alpha = 1;
                    this.nu2.alpha = 1;
                    break;
            }
            this.on(Laya.Event.CLICK, this, this.onclick, [index]);
        };
        cangkuItem.prototype.onclick = function (index) {
            if (module.mapModule.getInstance().dataContent == null) {
                module.mapModule.getInstance().dataContent = this;
                this.ckuang.scaleX = 1.2;
                this.ckuang.scaleY = 1.2;
                this.ckuang.alpha = 0;
                Laya.Tween.to(this.ckuang, { scaleX: 0.55, scaleY: 0.55, alpha: 1 }, 230, null, Laya.Handler.create(this, this.next1));
                Laya.Tween;
            }
            else {
                if (module.mapModule.getInstance().dataContent != this) {
                    module.mapModule.getInstance().dataContent.ckuang.alpha = 0;
                    module.mapModule.getInstance().dataContent = this;
                    this.ckuang.scaleX = 1.2;
                    this.ckuang.scaleY = 1.2;
                    this.ckuang.alpha = 0;
                    Laya.Tween.to(this.ckuang, { scaleX: 0.55, scaleY: 0.55, alpha: 1 }, 230, null, Laya.Handler.create(this, this.next1));
                }
                else {
                    this.ckuang.scaleX = 1.2;
                    this.ckuang.scaleY = 1.2;
                    this.ckuang.alpha = 0;
                    Laya.Tween.to(this.ckuang, { scaleX: 0.55, scaleY: 0.55, alpha: 1 }, 230, null, Laya.Handler.create(this, this.next1));
                }
            }
        };
        cangkuItem.prototype.next1 = function () {
            Laya.Tween.to(this.ckuang, { scaleX: 0.7, scaleY: 0.7 }, 170, null, Laya.Handler.create(this, this.next2));
        };
        cangkuItem.prototype.next2 = function () {
            Laya.Tween.to(this.ckuang, { scaleX: 0.666, scaleY: 0.666 }, 170);
        };
        return cangkuItem;
    }(ui.cangkuItemUI));
    wuling.cangkuItem = cangkuItem;
})(wuling || (wuling = {}));
//# sourceMappingURL=cangkuItem.js.map